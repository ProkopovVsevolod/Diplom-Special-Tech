using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    ///  Контракт для работы с репозиторием заказов
    /// </summary>
    public interface IOrderRepository
    {
        /// <summary>
        /// Получить все заказы
        /// </summary>
        /// <returns>Список заказов</returns>
        Task<IEnumerable<Order>> GetOrders();

        /// <summary>
        /// Получить заказ по Id пользователя
        /// </summary>
        /// <param name="id">Id пользователя</param>
        /// <returns>Список заказов пользователя</returns>
        Task<IEnumerable<Order>> GetOrdersByUserId(int id);

        /// <summary>
        /// Получить заказ по его Id 
        /// </summary>
        /// <param name="id">Id заказа</param>
        /// <returns>Заказ</returns>
        Task<Order> GetOrderById(int id);

        /// <summary>
        /// Добавить заказ
        /// </summary>
        /// <param name="order">Данные заказа</param>
        Task AddOrder(Order order);

        /// <summary>
        /// Редактировать заказ
        /// </summary>
        /// <param name="order">Данные заказа</param>
        Task EditOrder(Order order);

        /// <summary>
        /// Удалить заказ
        /// </summary>
        /// <param name="order">Данные заказа</param>
        Task DeleteOrder(Order order);
    }
}
