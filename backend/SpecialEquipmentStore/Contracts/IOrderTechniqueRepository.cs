using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    /// Контракт для работы со связкой заказ - техника
    /// </summary>
    public interface IOrderTechniqueRepository
    {
        /// <summary>
        /// Добавить запись
        /// </summary>
        /// <param name="orderTechnique">Запись</param>
        Task AddOrderTechnique(OrderTechnique orderTechnique);

        /// <summary>
        /// Удалить запись
        /// </summary>
        /// <param name="orderTechnique">Запись</param>
        Task DeleteOrderTechnique(OrderTechnique orderTechnique);

        /// <summary>
        /// Получить всю технику заказа
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<IEnumerable<OrderTechnique>> GetOrderTechniquesByOrderId(int id);
    }
}
