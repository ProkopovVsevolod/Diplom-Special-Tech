using Microsoft.EntityFrameworkCore;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Repositories
{
    /// <summary>
    /// Репозиторий для работы с техникой
    /// </summary>
    public class TechniqueRepository : ITechniqueRepository
    {
        private readonly SpecialEquipmentStoreDbContext _specialEquipmentStoreDbContext;

        public TechniqueRepository(SpecialEquipmentStoreDbContext specialEquipmentStoreDbContext)
        {
            _specialEquipmentStoreDbContext = specialEquipmentStoreDbContext;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<TypeOfTechnique>> GetTypesOfTechnique()
        {
            return await _specialEquipmentStoreDbContext.TypeOfTechnique
                .Select(tot => tot)
                .ToListAsync();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Technique>> GetTechniquesByTypeOfTechniqueId(int id)
        {
            return await _specialEquipmentStoreDbContext.Technique
                .Where(t => t.TypeOfTechniqueId == id)
                .Select(t => t)
                .ToListAsync();
        }

        /// <inheritdoc/>
        public async Task<Technique> GetTechniqueById(int id)
        {
            return await _specialEquipmentStoreDbContext.Technique
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        /// <inheritdoc/>
        public async Task AddTechnique(Technique technique)
        {
            await _specialEquipmentStoreDbContext.Technique.AddAsync(technique);
            await _specialEquipmentStoreDbContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task EditTechnique(Technique technique)
        {
            _specialEquipmentStoreDbContext.Technique.Update(technique);
            await _specialEquipmentStoreDbContext.SaveChangesAsync();
        }
    }
}
