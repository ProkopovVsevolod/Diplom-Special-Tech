using Microsoft.EntityFrameworkCore;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Business
{
    /// <summary>
    /// Репозиторий для заказов
    /// </summary>
    public class OrderRepository : IOrderRepository
    {
        private readonly SpecialEquipmentStoreDbContext _specialEquipmentStoreDbContext;

        public OrderRepository(SpecialEquipmentStoreDbContext specialEquipmentStoreDbContext)
        {
            _specialEquipmentStoreDbContext = specialEquipmentStoreDbContext;
        }

        /// <inheritdoc/>
        public async Task AddOrder(Order order)
        {
            await _specialEquipmentStoreDbContext.Order.AddAsync(order);
            await _specialEquipmentStoreDbContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task DeleteOrder(Order order)
        {
            _specialEquipmentStoreDbContext.Order.Remove(order);
            await _specialEquipmentStoreDbContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task EditOrder(Order order)
        {
            _specialEquipmentStoreDbContext.Order.Update(order);
            await _specialEquipmentStoreDbContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task<Order> GetOrderById(int id)
        {
            return await _specialEquipmentStoreDbContext.Order
                .FirstOrDefaultAsync(o => o.Id == id);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Order>> GetOrders()
        {
            return await _specialEquipmentStoreDbContext.Order
                .Select(o => o)
                .ToListAsync();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Order>> GetOrdersByUserId(int id)
        {
            return await _specialEquipmentStoreDbContext.Order
                .Where(o => o.UserId == id)
                .Select(o => o)
                .ToListAsync();
        }
    }
}
