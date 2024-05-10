using System.ComponentModel.DataAnnotations;

namespace SpecialEquipmentStore.Models
{
    /// <summary>
    /// Класс сущности БД - техника
    /// </summary>
    public class Technique
    {
        /// <summary>
        /// Первичный ключ - id техники
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Название техники
        /// </summary>
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Характеристика
        /// </summary>
        [Required]
        public string Сharacteristic { get; set; }

        /// <summary>
        /// Цена техники
        /// </summary>
        [Required]
        public int Price { get; set; }

        /// <summary>
        /// Количество техники
        /// </summary>
        [Required]
        public int Count { get; set; }

        /// <summary>
        /// Id типа техники
        /// </summary>
        [Required]
        public int TypeOfTechniqueId { get; set; }
    }
}
