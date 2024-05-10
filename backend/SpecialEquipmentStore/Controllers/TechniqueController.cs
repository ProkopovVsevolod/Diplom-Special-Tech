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
        [HttpPost]
        [Route("AddTechnique")]
        public async Task<IActionResult> AddTechnique([FromBody] TechniqueDto techniqueData)
        {
            var technique = await _techniqueBusiness.AddTechnique(techniqueData);

            if (technique == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось добавить технику!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(technique);
        }

        /// <summary>
        /// Редактировать технику
        /// </summary>
        /// <param name="techniqueData">Данные техники</param>
        [HttpPost]
        [Route("EditTechnique")]
        public async Task<IActionResult> EditTechnique([FromBody] TechniqueDto techniqueData)
        {
            var technique = await _techniqueBusiness.EditTechnique(techniqueData);

            if (technique == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось редактировать технику!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(technique);
        }

        /// <summary>
        /// Получить технику по ее Id
        /// </summary>
        /// <param name="id">Id техники</param>
        [HttpGet]
        [Route("GetTechniqueById/{id}")]
        public async Task<IActionResult> GetTechniqueById(int id)
        {
            var technique = await _techniqueBusiness.GetTechniqueById(id);

            if (technique == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось получить технику!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(technique);
        }

        /// <summary>
        /// Получить технику по Id типа техники
        /// </summary>
        /// <param name="id">Id типа техники</param>
        [HttpGet]
        [Route("GetTechniquesByTypeOfTechniqueId/{id}")]
        public async Task<IActionResult> GetTechniquesByTypeOfTechniqueId(int id)
        {
            var technique = await _techniqueBusiness.GetTechniquesByTypeOfTechniqueId(id);

            if (technique == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось получить технику!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(technique);
        }

        /// <summary>
        /// Получить типы техники
        /// </summary>
        /// <exception cref="Exception">Исключение: не удалось получить типы техники</exception>
        [HttpGet]
        [Route("GetTypesOfTechnique")]
        public async Task<IActionResult> GetTypesOfTechnique()
        {
            var typesOfTechnique = await _techniqueBusiness.GetTypesOfTechnique();

            if (typesOfTechnique == null)
            {
                return new ContentResult
                {
                    Content = "Не удалось получить технику!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(typesOfTechnique);
        }
    }
}
