﻿using System.ComponentModel.DataAnnotations;

namespace SpecialEquipmentStore.Models
{
    /// <summary>
    /// Класс сущности БД - пользователь
    /// </summary>
    public class User
    {
        /// <summary>
        /// Первичный ключ - id пользователя
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Логин пользователя
        /// </summary>
        [Required]
        public string Login { get; set; }

        /// <summary>
        /// Пароль пользователя
        /// </summary>
        [Required]
        public string Password { get; set; }

        /// <summary>
        /// Телефон пользователя
        /// </summary>
        [Required]
        public string Phone { get; set; }
    }
}
