using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    /// Контракт репозитория для работы с пользователями
    /// </summary>
    public interface IUserRepository
    {
        /// <summary>
        /// Добавить пользователя
        /// </summary>
        /// <param name="User"> ДТО пользователя для регистрации </param>
        Task SaveUser(User user);

        /// <summary>
        /// Получить пользователя
        /// </summary>
        /// <param name="userDto"> ДТО пользователя для авторизации </param>
        /// <returns> Объект пользователя </returns>
        Task<User> GetUser(UserDto userDto);

        /// <summary>
        /// Получить список пользователей
        /// </summary>
        /// <returns> Список пользователей </returns>
        Task<IEnumerable<User>> GetAllUsers();
    }
}
