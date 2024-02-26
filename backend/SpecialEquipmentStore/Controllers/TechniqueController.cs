using System;
using System.Threading.Tasks;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SpecialEquipmentStore.Controllers
{
    /// <summary>
    /// Контроллер для работы с техникой
    /// </summary>
    [Route("api/Technique")]
    public class TechniqueController : ControllerBase
    {
        private readonly ITechniqueBusiness _techniqueBusiness;

        public TechniqueController(ITechniqueBusiness techniqueBusiness)
        {
            _techniqueBusiness = techniqueBusiness;
        }

        /// <summary>
        /// Добавить технику
        /// </summary>
        /// <param name="techniqueData">Данные техники</param>
        /// <exception cref="Exception">Исключение: не удалось добавить упражнение</exception>
        [HttpPost]
        [Route("AddTechnique")]
        public async Task<TechniqueDto> AddTechnique(TechniqueDto techniqueData)
        {
            var technique = await _techniqueBusiness.AddTechnique(techniqueData);
            if (technique == null)
                throw new Exception("Не удалось добавить технику!");
            return technique;
        }

        /// <summary>
        /// Редактировать технику
        /// </summary>
        /// <param name="techniqueData">Данные техники</param>
        /// <exception cref="Exception">Исключение: не удалось редактировать упражнение</exception>
        [HttpPost]
        [Route("EditTechnique")]
        public async Task<TechniqueDto> EditTechnique(TechniqueDto techniqueData)
        {
            var technique = await _techniqueBusiness.EditTechnique(techniqueData);
            if (technique == null)
                throw new Exception("Не удалось редактировать технику!");
            return technique;
        }

        /// <summary>
        /// Получить технику по ее Id
        /// </summary>
        /// <param name="id">Id техники</param>
        /// <exception cref="Exception">Исключение: не удалось получить технику</exception>
        [HttpGet]
        [Route("GetTechniqueById/{id}")]
        public async Task<TechniqueDto> GetTechniqueById(int id)
        {
            var technique = await _techniqueBusiness.GetTechniqueById(id);
            if (technique == null)
                throw new Exception("Не удалось получить технику!");
            return technique;
        }

        /// <summary>
        /// Получить технику по Id типа техники
        /// </summary>
        /// <param name="id">Id типа техники</param>
        /// <exception cref="Exception">Исключение: не удалось получить технику</exception>
        [HttpGet]
        [Route("GetTechniquesByTypeOfTechniqueId/{id}")]
        public async Task<IEnumerable<TechniqueDto>> GetTechniquesByTypeOfTechniqueId(int id)
        {
            var technique = await _techniqueBusiness.GetTechniquesByTypeOfTechniqueId(id);
            if (technique == null)
                throw new Exception("Не удалось получить технику!");
            return technique;
        }

        /// <summary>
        /// Получить типы техники
        /// </summary>
        /// <exception cref="Exception">Исключение: не удалось получить типы техники</exception>
        [HttpGet]
        [Route("GetTypesOfTechnique")]
        public async Task<IEnumerable<TypeOfTechniqueDto>> GetTypesOfTechnique()
        {
            var typesOfTechnique = await _techniqueBusiness.GetTypesOfTechnique();
            if (typesOfTechnique == null)
                throw new Exception("Не удалось получить типы техники!");
            return typesOfTechnique;
        }
    }
}
