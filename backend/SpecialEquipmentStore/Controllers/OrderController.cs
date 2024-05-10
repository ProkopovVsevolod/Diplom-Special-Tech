using System;
using System.Threading.Tasks;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using Microsoft.AspNetCore.Mvc;

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
        [HttpGet]
        [Route("GetOrders")]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _orderBusiness.GetOrders();

            if (orders == null)
            {
                return new ContentResult {
                    Content = "Не удалось получить заказы!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(orders);
        }

        /// <summary>
        /// Получить заказ по Id пользователя
        /// </summary>
        /// <param name="id">id пользователя</param>
        [HttpGet]
        [Route("GetOrdersByUserId/{id}")]
        public async Task<IActionResult> GetOrdersByUserId(int id)
        {
            var orders = await _orderBusiness.GetOrdersByUserId(id);

            if (orders == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось получить заказы!",
                    ContentType = "plain/text",
                    StatusCode = 400
                };
            }

            return Ok(orders);
        }

        /// <summary>
        /// Получить заказ по его Id 
        /// </summary>
        /// <param name="id">id заказа</param>
        [HttpGet]
        [Route("GetOrderById/{id}")]
        public async Task<IActionResult> GetOrderById(int id)
        {
            var order = await _orderBusiness.GetOrderById(id);
            
            if (order == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось получить заказы!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(order);
        }

        /// <summary>
        /// Добавить заказ
        /// </summary>
        /// <param name="orderData">Данные заказа</param>
        [HttpPost]
        [Route("AddOrder")]
        public async Task<IActionResult> AddOrder([FromBody] OrderDto orderData)
        {
            var order = await _orderBusiness.AddOrder(orderData);

            if (order == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось добавить заказ!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(order);
        }

        /// <summary>
        /// Редактировать заказ
        /// </summary>
        /// <param name="orderData">Данные заказа</param>
        [HttpPost]
        [Route("EditOrder")]
        public async Task<IActionResult> EditOrder([FromBody] OrderDto orderData)
        {
            var order = await _orderBusiness.EditOrder(orderData);
            if (order == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось редактировать заказ!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(order);
        }

        /// <summary>
        /// Удалить заказ
        /// </summary>
        /// <param name="id">Id заказа</param>
        [HttpPost]
        [Route("DeleteOrder")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            try
            {
                await _orderBusiness.DeleteOrder(id);
            }
            catch (Exception e)
            {
                return new ContentResult
                {
                    Content = "Не удалось удалить заказ!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok();
        }
    }
}
