using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System;
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
            return _specialEquipmentStoreDbContext.TypeOfTechnique
                .Select(tot => tot)
                .ToList();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Technique>> GetTechniquesByTypeOfTechniqueId(int id)
        {
            return _specialEquipmentStoreDbContext.Technique
                .Where(t => t.IdTypeOfTechnique == id)
                .Select(t => t)
                .ToList();
        }

        /// <inheritdoc/>
        public async Task<Technique> GetTechniqueById(int id)
        {
            return _specialEquipmentStoreDbContext.Technique
                .FirstOrDefault(t => t.Id == id);
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
