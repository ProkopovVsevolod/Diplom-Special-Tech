using System;
using System.Collections.Generic;

namespace SpecialEquipmentStore.Dto
{
    /// <summary>
    /// ДТО заказа
    /// </summary>
    public class OrderDto
    {
        /// <summary>
        /// Id заказа
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Список Id техники
        /// </summary>
        public IEnumerable<int> TechniqueIds { get; set; }

        /// <summary>
        /// Id пользователя
        /// </summary>
        public int UserId { get; set; }

        /// <summary>
        /// Телефон
        /// </summary>
        public string Phone { get; set; }

        /// <summary>
        /// Почта
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Адрес
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Дата
        /// </summary>
        public DateTime Date { get; set; }
    }
}
