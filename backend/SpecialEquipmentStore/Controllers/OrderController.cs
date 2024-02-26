using System;
using System.Threading.Tasks;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using Microsoft.AspNetCore.Mvc;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;

namespace SpecialEquipmentStore.Controllers
{
    /// <summary>
    /// Контроллер для работы с заказом
    /// </summary>
    [Route("api/Order")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderBusiness _orderBusiness;

        public OrderController(IOrderBusiness orderBusiness)
        {
            _orderBusiness = orderBusiness;
        }

        /// <summary>
        /// Получить все заказы
        /// </summary>
        /// <exception cref="Exception">Исключение: не удалось получить заказы</exception>
        [HttpGet]
        [Route("GetOrders")]
        public async Task<IEnumerable<OrderDto>> GetOrders()
        {
            var orders = await _orderBusiness.GetOrders();
            if (orders == null)
                throw new Exception("Не удалось получить заказы!");
            return orders;
        }

        /// <summary>
        /// Получить заказ по Id пользователя
        /// </summary>
        /// <param name="id">id пользователя</param>
        /// <exception cref="Exception">Исключение: не удалось получить заказы</exception>
        [HttpGet]
        [Route("GetOrdersByUserId/{id}")]
        public async Task<IEnumerable<OrderDto>> GetOrdersByUserId(int id)
        {
            var orders = await _orderBusiness.GetOrdersByUserId(id);
            if (orders == null)
                throw new Exception("Не удалось получить заказы!");
            return orders;
        }

        /// <summary>
        /// Получить заказ по его Id 
        /// </summary>
        /// <param name="id">id заказа</param>
        /// <exception cref="Exception">Исключение: не удалось получить заказы</exception>
        [HttpGet]
        [Route("GetOrderById/{id}")]
        public async Task<OrderDto> GetOrderById(int id)
        {
            var order = await _orderBusiness.GetOrderById(id);
            if (order == null)
                throw new Exception("Не удалось получить заказ!");
            return order;
        }

        /// <summary>
        /// Добавить заказ
        /// </summary>
        /// <param name="orderData">Данные заказа</param>
        /// <exception cref="Exception">Исключение: не удалось добавить заказ</exception>
        [HttpPost]
        [Route("AddOrder")]
        public async Task<OrderDto> AddOrder(OrderDto orderData)
        {
            var order = await _orderBusiness.AddOrder(orderData);
            if (order == null)
                throw new Exception("Не удалось добавить заказ!");
            return order;
        }

        /// <summary>
        /// Редактировать заказ
        /// </summary>
        /// <param name="orderData">Данные заказа</param>
        /// <exception cref="Exception">Исключение: не удалось редактировать заказ</exception>
        [HttpPost]
        [Route("EditOrder")]
        public async Task<OrderDto> EditOrder(OrderDto orderData)
        {
            var order = await _orderBusiness.EditOrder(orderData);
            if (order == null)
                throw new Exception("Не удалось редактировать заказ!");
            return order;
        }

        /// <summary>
        /// Удалить заказ
        /// </summary>
        /// <param name="id">Id заказа</param>
        /// <exception cref="Exception">Исключение: не удалось удалить заказ</exception>
        [HttpPost]
        [Route("DeleteOrder")]
        public async Task DeleteOrder(int id)
        {
            await _orderBusiness.DeleteOrder(id);
        }
    }
}
