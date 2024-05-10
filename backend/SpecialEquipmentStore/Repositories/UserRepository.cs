using Microsoft.EntityFrameworkCore;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Repositories
{
    /// <summary>
    /// Репозиторий для работы с пользователями
    /// </summary>
    public class UserRepository : IUserRepository
    {
        private readonly SpecialEquipmentStoreDbContext _specialEquipmentStoreDbContext;

        public UserRepository(SpecialEquipmentStoreDbContext specialEquipmentStoreDbContext)
        {
            _specialEquipmentStoreDbContext = specialEquipmentStoreDbContext;
        }

        /// <inheritdoc/>
        public async Task SaveUser(User user)
        {
            await _specialEquipmentStoreDbContext.User.AddAsync(user);
            await _specialEquipmentStoreDbContext.SaveChangesAsync();
        }

        /// <inheritdoc/>
        public async Task<User> GetUser(UserDto userDto)
        {
            return await _specialEquipmentStoreDbContext.User
                .FirstOrDefaultAsync(user => user.Login == userDto.Login &&
                                        user.Password == userDto.Password);
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _specialEquipmentStoreDbContext.User.Select(u => u)
                .ToListAsync();
        }
    }
}
