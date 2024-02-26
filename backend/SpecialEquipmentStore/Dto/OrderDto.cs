using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        /// Id техники
        /// </summary>
        public int IdTechnique { get; set; }

        /// <summary>
        /// Id пользователя
        /// </summary>
        public int IdUser { get; set; }

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
