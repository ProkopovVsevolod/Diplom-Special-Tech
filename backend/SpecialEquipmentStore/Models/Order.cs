using System;
using System.ComponentModel.DataAnnotations;

namespace SpecialEquipmentStore.Models
{
    /// <summary>
    /// Класс сущности БД - заказ
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Первичный ключ - id заказа
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Id техники
        /// </summary>
        [Required]
        public int IdTechnique { get; set; }

        /// <summary>
        /// Id пользователя
        /// </summary>
        [Required]
        public int IdUser { get; set; }

        /// <summary>
        /// Телефон
        /// </summary>
        [Required]
        public string Phone { get; set; }

        /// <summary>
        /// Почта
        /// </summary>
        [Required]
        public string Email { get; set; }

        /// <summary>
        /// Адрес
        /// </summary>
        [Required]
        public string Address { get; set; }

        /// <summary>
        /// Дата
        /// </summary>
        [Required]
        public DateTime Date { get; set; }
    }
}
