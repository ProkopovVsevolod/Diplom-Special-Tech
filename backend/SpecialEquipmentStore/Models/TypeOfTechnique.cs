using System.ComponentModel.DataAnnotations;

namespace SpecialEquipmentStore.Models
{
    /// <summary>
    /// Класс сущности БД - тип техники
    /// </summary>
    public class TypeOfTechnique
    {
        /// <summary>
        /// Первичный ключ - id типа техники
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Название типа техники
        /// </summary>
        [Required]
        public string Name { get; set; }
    }
}
