using SpecialEquipmentStore.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    ///  Контракт для работы с сервисом заказов
    /// </summary>
    public interface IOrderBusiness
    {
        /// <summary>
        /// Получить все заказы
        /// </summary>
        /// <returns>Список заказов</returns>
        Task<IEnumerable<OrderDto>> GetOrders();

        /// <summary>
        /// Получить заказ по Id пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>Список заказов пользователя</returns>
        Task<IEnumerable<OrderDto>> GetOrdersByUserId(int id);

        /// <summary>
        /// Получить заказ по его Id 
        /// </summary>
        /// <param name="id">Id заказа</param>
        /// <returns>Заказ</returns>
        Task<OrderDto> GetOrderById(int id);

        /// <summary>
        /// Добавить заказ
        /// </summary>
        /// <param name="orderData">Данные заказа</param>
        /// <returns>Добавленный заказ</returns>
        Task<OrderDto> AddOrder(OrderDto orderData);

        /// <summary>
        /// Редактировать заказ
        /// </summary>
        /// <param name="orderData">Данные заказа</param>
        /// <returns>Обновленный заказ</returns>
        Task<OrderDto> EditOrder(OrderDto orderData);

        /// <summary>
        /// Удалить заказ
        /// </summary>
        /// <param name="id">Id заказа</param>
        Task DeleteOrder(int id);
    }
}
