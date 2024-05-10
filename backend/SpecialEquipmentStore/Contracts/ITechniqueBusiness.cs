using SpecialEquipmentStore.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    /// Контракт для работы с сервисом техники
    /// </summary>
    public interface ITechniqueBusiness
    {
        /// <summary>
        /// Получить список типов техники
        /// </summary>
        /// <returns>Список типов техники</returns>
        Task<IEnumerable<TypeOfTechniqueDto>> GetTypesOfTechnique();

        /// <summary>
        /// Получить технику по Id типа техники
        /// </summary>
        /// <returns>Список техники</returns>
        Task<IEnumerable<TechniqueDto>> GetTechniquesByTypeOfTechniqueId(int id);

        /// <summary>
        /// Получить технику по её Id
        /// </summary>
        /// <returns>Техника</returns>
        Task<TechniqueDto> GetTechniqueById(int id);

        /// <summary>
        /// Добавить технику
        /// </summary>
        /// <param name="techniqueDto">Дто техники</param>
        /// <returns>Добавленная техника</returns>
        Task<TechniqueDto> AddTechnique(TechniqueDto techniqueDto);

        /// <summary>
        /// Редактировать технику
        /// </summary>
        /// <param name="techniqueDto">Дто техники</param>
        /// <returns>Обновленная техника</returns>
        Task<TechniqueDto> EditTechnique(TechniqueDto techniqueDto);
    }
}
