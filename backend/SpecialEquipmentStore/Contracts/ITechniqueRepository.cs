using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    /// Контракт репозитория для работы с техникой
    /// </summary>
    public interface ITechniqueRepository
    {
        /// <summary>
        /// Получить список типов техники
        /// </summary>
        /// <returns>Список типов техники</returns>
        Task<IEnumerable<TypeOfTechnique>> GetTypesOfTechnique();

        /// <summary>
        /// Получить технику по Id типа техники
        /// </summary>
        /// <param name="id">Id типа техники</param>
        /// <returns>Список техники</returns>
        Task<IEnumerable<Technique>> GetTechniquesByTypeOfTechniqueId(int id);

        /// <summary>
        /// Получить технику по её Id
        /// </summary>
        /// <param name="id">Id техники</param>
        /// <returns>Техника</returns>
        Task<Technique> GetTechniqueById(int id);

        /// <summary>
        /// Добавить технику
        /// </summary>
        /// <param name="technique">Техника</param>
        Task AddTechnique(Technique technique);

        /// <summary>
        /// Редактировать технику
        /// </summary>
        /// <param name="technique">Техники</param>
        Task EditTechnique(Technique technique);
    }
}
