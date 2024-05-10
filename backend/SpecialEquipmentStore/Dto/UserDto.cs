using System;
using System.Collections.Generic;
using System.Linq;
namespace SpecialEquipmentStore.Dto
{
    /// <summary>
    /// ДТО пользователя
    /// </summary>
    public class UserDto
    {
        /// <summary>
        /// Id пользователя
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Логин
        /// </summary>
        public string Login { get; set; }

        /// <summary>
        /// Пароль
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Пароль
        /// </summary>
        public string Phone { get; set; }
    }
}
