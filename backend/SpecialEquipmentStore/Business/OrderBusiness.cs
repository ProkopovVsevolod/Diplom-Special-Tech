using AutoMapper;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System;
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
        private readonly IMapper _mapper;

        public OrderBusiness(
            IOrderRepository orderRepository,
            ITechniqueRepository techniqueRepository,
            IMapper mapper)
        {
            _orderRepository = orderRepository;
            _techniqueRepository = techniqueRepository;
            _mapper = mapper;
        }

        /// <inheritdoc/>
        public async Task<OrderDto> AddOrder(OrderDto orderData)
        {
            var order = _mapper.Map<Order>(orderData);
            await _orderRepository.AddOrder(order);
            var technique = await _techniqueRepository.GetTechniqueById(order.IdTechnique);
            technique.Count -= 1;
            await _techniqueRepository.EditTechnique(technique);
            return await GetOrderById(order.Id);
        }

        /// <inheritdoc/>
        public async Task DeleteOrder(int id)
        {
            var order = await _orderRepository.GetOrderById(id);
            await _orderRepository.DeleteOrder(order);
            var technique = await _techniqueRepository.GetTechniqueById(order.IdTechnique);
            technique.Count += 1;
            await _techniqueRepository.EditTechnique(technique);
        }

        /// <inheritdoc/>
        public async Task<OrderDto> EditOrder(OrderDto orderData)
        {
            var oldOrder = await _orderRepository.GetOrderById(orderData.Id);

            if (oldOrder == null)
            {
                return null;
            }

            oldOrder.IdTechnique = orderData.IdTechnique;
            oldOrder.IdUser = orderData.IdUser;
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

            return _mapper.Map<OrderDto>(order);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<OrderDto>> GetOrders()
        {
            var orders = await _orderRepository.GetOrders();

            var orderDtos = new List<OrderDto>();
            foreach (var order in orders)
            {
                orderDtos.Add(_mapper.Map<OrderDto>(order));
            }

            return orderDtos;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<OrderDto>> GetOrdersByUserId(int id)
        {
            var userOrders = await _orderRepository.GetOrdersByUserId(id);

            if (userOrders == null)
            {
                return null;
            }

            var orderDtos = new List<OrderDto>();
            foreach (var order in userOrders)
            {
                orderDtos.Add(_mapper.Map<OrderDto>(order));
            }

            return orderDtos;
        }
    }
}
