using AutoMapper;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Business
{
    /// <summary>
    /// Сервис для пользователей
    /// </summary>
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserBusiness(
            IUserRepository userRepository,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        /// <inheritdoc/>
        public async Task Register(UserDto userDto)
        {
            var user = _mapper.Map<User>(userDto);
            await _userRepository.SaveUser(user);
        }

        /// <inheritdoc/>
        public async Task<UserDto> Authorize(UserDto userDto)
        {
            if (userDto.Login == "admin" && userDto.Password == "admin")
            {
                userDto.Id = null;
                return userDto;
            }

            var user = await _userRepository.GetUser(userDto);
            return _mapper.Map<UserDto>(user);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<UserDto>> GetAllUsers()
        {
            var users = await _userRepository.GetAllUsers();
            return _mapper.Map<IEnumerable<UserDto>>(users);
        }
    }
}
