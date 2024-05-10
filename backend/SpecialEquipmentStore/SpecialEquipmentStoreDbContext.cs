using Microsoft.EntityFrameworkCore;
using SpecialEquipmentStore.Models;

namespace SpecialEquipmentStore
{
    /// <summary>
    /// Контекст базы данных
    /// </summary>
    public class SpecialEquipmentStoreDbContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<TypeOfTechnique> TypeOfTechnique { get; set; }
        public DbSet<Technique> Technique { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderTechnique> OrderTechnique { get; set; }

        public SpecialEquipmentStoreDbContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=SpecialEquipmentStore;Username=postgres;Password=user1");
        }
    }
}
