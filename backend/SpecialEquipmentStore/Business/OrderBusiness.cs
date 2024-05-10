using AutoMapper;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Business
{
    /// <summary>
    /// Сервис для заказов
    /// </summary>
    public class OrderBusiness : IOrderBusiness
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ITechniqueRepository _techniqueRepository;
        private readonly IOrderTechniqueRepository _orderTechniqueRepository;
        private readonly IMapper _mapper;

        public OrderBusiness(
            IOrderRepository orderRepository,
            ITechniqueRepository techniqueRepository,
            IOrderTechniqueRepository orderTechniqueRepository,
            IMapper mapper)
        {
            _orderRepository = orderRepository;
            _techniqueRepository = techniqueRepository;
            _orderTechniqueRepository = orderTechniqueRepository;
            _mapper = mapper;
        }

        /// <inheritdoc/>
        public async Task<OrderDto> AddOrder(OrderDto orderData)
        {
            var order = _mapper.Map<Order>(orderData);
            await _orderRepository.AddOrder(order);

            var techniqueIds = orderData.TechniqueIds;
            foreach (var techniqueId in techniqueIds)
            {
                var technique = await _techniqueRepository.GetTechniqueById(techniqueId);
                if (technique == null)
                {
                    continue;
                }    

                technique.Count -= 1;
                await _techniqueRepository.EditTechnique(technique);

                await _orderTechniqueRepository.AddOrderTechnique(new OrderTechnique
                { 
                    OrderId = order.Id,
                    TechniqueId = technique.Id
                });
            }
            
            return await GetOrderById(order.Id);
        }

        /// <inheritdoc/>
        public async Task DeleteOrder(int id)
        {
            var orderTechniques = await _orderTechniqueRepository.GetOrderTechniquesByOrderId(id);
            foreach (var orderTechnique in orderTechniques)
            {
                var technique = await _techniqueRepository.GetTechniqueById(orderTechnique.TechniqueId);
                if (technique == null)
                {
                    continue;
                }

                technique.Count += 1;
                await _techniqueRepository.EditTechnique(technique);

                await _orderTechniqueRepository.DeleteOrderTechnique(orderTechnique);
            }

            var order = await _orderRepository.GetOrderById(id);
            await _orderRepository.DeleteOrder(order);
        }

        /// <inheritdoc/>
        public async Task<OrderDto> EditOrder(OrderDto orderData)
        {
            var oldOrder = await _orderRepository.GetOrderById(orderData.Id);

            if (oldOrder == null)
            {
                return null;
            }

            var oldOrderTechniques = await _orderTechniqueRepository.GetOrderTechniquesByOrderId(oldOrder.Id);
            foreach (var oldOrderTechnique in oldOrderTechniques)
            {
                await _orderTechniqueRepository.DeleteOrderTechnique(oldOrderTechnique);
            }

            var newOrderTechniques = orderData.TechniqueIds;
            foreach (var newOrderTechnique in newOrderTechniques)
            {
                await _orderTechniqueRepository.AddOrderTechnique(new OrderTechnique
                {
                    OrderId = oldOrder.Id,
                    TechniqueId = newOrderTechnique
                });
            }

            oldOrder.UserId = orderData.UserId;
            oldOrder.Phone = orderData.Phone;
            oldOrder.Email = orderData.Email;
            oldOrder.Address = orderData.Address;
            oldOrder.Date = orderData.Date;

            await _orderRepository.EditOrder(oldOrder);
            return await GetOrderById(orderData.Id);
        }

        /// <inheritdoc/>
        public async Task<OrderDto> GetOrderById(int id)
        {
            var order = await _orderRepository.GetOrderById(id);

            if (order == null)
            {
                return null;
            }

            var orderDto = _mapper.Map<OrderDto>(order);

            var orderTechniques = await _orderTechniqueRepository.GetOrderTechniquesByOrderId(id);
            orderDto.TechniqueIds = orderTechniques.Select(ot => ot.TechniqueId);

            return orderDto;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<OrderDto>> GetOrders()
        {
            var orders = await _orderRepository.GetOrders();

            var orderDtos = new List<OrderDto>();
            foreach (var order in orders)
            {
                var orderDto = _mapper.Map<OrderDto>(order);

                var orderTechniques = await _orderTechniqueRepository.GetOrderTechniquesByOrderId(order.Id);
                orderDto.TechniqueIds = orderTechniques.Select(ot => ot.TechniqueId);

                orderDtos.Add(orderDto);
            }

            return orderDtos;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<OrderDto>> GetOrdersByUserId(int id)
        {
            var userOrders = await _orderRepository.GetOrdersByUserId(id);

            if (!userOrders.Any())
            {
                return null;
            }

            var orderDtos = new List<OrderDto>();
            foreach (var order in userOrders)
            {
                var orderDto = _mapper.Map<OrderDto>(order);

                var orderTechniques = await _orderTechniqueRepository.GetOrderTechniquesByOrderId(order.Id);
                orderDto.TechniqueIds = orderTechniques.Select(ot => ot.TechniqueId);

                orderDtos.Add(orderDto);
            }

            return orderDtos;
        }
    }
}
