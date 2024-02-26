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
            return _specialEquipmentStoreDbContext.Order
                .FirstOrDefault(o => o.Id == id);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Order>> GetOrders()
        {
            return _specialEquipmentStoreDbContext.Order
                .Select(o => o)
                .ToList();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Order>> GetOrdersByUserId(int id)
        {
            return _specialEquipmentStoreDbContext.Order
                .Where(o => o.IdUser == id)
                .Select(o => o)
                .ToList();
        }
    }
}
