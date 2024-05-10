using AutoMapper;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
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
            var newTechnique = await _techniqueRepository.GetTechniqueById(technique.Id);
            return _mapper.Map<TechniqueDto>(newTechnique);
        }

        /// <inheritdoc/>
        public async Task<TechniqueDto> EditTechnique(TechniqueDto techniqueDto)
        {
            var oldTechnique = await _techniqueRepository.GetTechniqueById(techniqueDto.Id);

            if (oldTechnique == null || techniqueDto.Count < 0)
            {
                return null;
            }

            oldTechnique.Name = techniqueDto.Name;
            oldTechnique.Price = techniqueDto.Price;
            oldTechnique.Count = techniqueDto.Count;
            oldTechnique.Сharacteristic = techniqueDto.Сharacteristic;
            oldTechnique.TypeOfTechniqueId = techniqueDto.TypeOfTechniqueId;

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
            
            return _mapper.Map<IEnumerable<TechniqueDto>>(techniques);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<TypeOfTechniqueDto>> GetTypesOfTechnique()
        {
            var typesOfTechnique = await _techniqueRepository.GetTypesOfTechnique();
            
            return _mapper.Map<IEnumerable<TypeOfTechniqueDto>>(typesOfTechnique);
        }
    }
}
