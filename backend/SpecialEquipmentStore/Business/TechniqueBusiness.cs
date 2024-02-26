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
    /// Сервис для техники
    /// </summary>
    public class TechniqueBusiness : ITechniqueBusiness
    {
        private readonly ITechniqueRepository _techniqueRepository;
        private readonly IMapper _mapper;

        public TechniqueBusiness(
            ITechniqueRepository techniqueRepository,
            IMapper mapper)
        {
            _techniqueRepository = techniqueRepository;
            _mapper = mapper;
        }

        /// <inheritdoc/>
        public async Task<TechniqueDto> AddTechnique(TechniqueDto techniqueDto)
        {
            var technique = _mapper.Map<Technique>(techniqueDto);
            await _techniqueRepository.AddTechnique(technique);
            var newTechnique = _techniqueRepository.GetTechniqueById(techniqueDto.Id);
            return _mapper.Map<TechniqueDto>(newTechnique);
        }

        /// <inheritdoc/>
        public async Task<TechniqueDto> EditTechnique(TechniqueDto techniqueDto)
        {
            var oldTechnique = await _techniqueRepository.GetTechniqueById(techniqueDto.Id);

            if (oldTechnique == null)
            {
                return null;
            }

            if (techniqueDto.Count < 0)
            {
                return null;
            }

            oldTechnique.Name = techniqueDto.Name;
            oldTechnique.Price = techniqueDto.Price;
            oldTechnique.Count = techniqueDto.Count;
            oldTechnique.Сharacteristic = techniqueDto.Сharacteristic;
            oldTechnique.IdTypeOfTechnique = techniqueDto.IdTypeOfTechnique;

            await _techniqueRepository.EditTechnique(oldTechnique);
            var newTechnique = await _techniqueRepository.GetTechniqueById(techniqueDto.Id);
            return _mapper.Map<TechniqueDto>(newTechnique);
        }

        /// <inheritdoc/>
        public async Task<TechniqueDto> GetTechniqueById(int id)
        {
            var technique = await _techniqueRepository.GetTechniqueById(id);

            if (technique == null)
            {
                return null;
            }

            return _mapper.Map<TechniqueDto>(technique);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<TechniqueDto>> GetTechniquesByTypeOfTechniqueId(int id)
        {
            var techniques = await _techniqueRepository.GetTechniquesByTypeOfTechniqueId(id);
            var techniqueDtos = new List<TechniqueDto>();
            foreach (var technique in techniques)
            {
                techniqueDtos.Add(_mapper.Map<TechniqueDto>(technique));
            }
            return techniqueDtos;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<TypeOfTechniqueDto>> GetTypesOfTechnique()
        {
            var typesOfTechnique = await _techniqueRepository.GetTypesOfTechnique();
            var typeOfTechniqueDtos = new List<TypeOfTechniqueDto>();
            foreach (var typeOfTechnique in typesOfTechnique)
            {
                typeOfTechniqueDtos.Add(_mapper.Map<TypeOfTechniqueDto>(typeOfTechnique));
            }
            return typeOfTechniqueDtos;
        }
    }
}
