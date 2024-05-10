using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Models;

namespace SpecialEquipmentStore.Repositories
{
    /// <summary>
    /// Репозиторий для работы со связкой заказ - техника
    /// </summary>
    public class OrderTechniqueRepository : IOrderTechniqueRepository
    {
        private readonly SpecialEquipmentStoreDbContext _dataContext;

        public OrderTechniqueRepository(SpecialEquipmentStoreDbContext dataContext)
        {
            _dataContext = dataContext;
        }

        /// <inheritdoc/>
        public async Task AddOrderTechnique(OrderTechnique orderTechnique)
        {
            await _dataContext.OrderTechnique.AddAsync(orderTechnique);
            await _dataContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task DeleteOrderTechnique(OrderTechnique orderTechnique)
        {
            _dataContext.OrderTechnique.Remove(orderTechnique);
            await _dataContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<OrderTechnique>> GetOrderTechniquesByOrderId(int id)
        {
            return await _dataContext.OrderTechnique
                .Where(ot => ot.OrderId == id)
                .Select(ot => ot)
                .ToListAsync();
        }
    }
}
