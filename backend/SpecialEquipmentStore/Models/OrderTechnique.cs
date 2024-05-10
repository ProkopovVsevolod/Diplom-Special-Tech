using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpecialEquipmentStore.Models
{
    /// <summary>
    /// Связь M - N заказа и техники
    /// </summary>
    [Table("Order_Technique")]
    public class OrderTechnique
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
        public int TechniqueId { get; set; }

        /// <summary>
        /// Техника
        /// </summary>
        [ForeignKey("TechniqueId")]
        public virtual Technique Technique { get; set; }

        /// <summary>
        /// Id заказа
        /// </summary>
        [Required]
        public int OrderId { get; set; }

        /// <summary>
        /// Заказ
        /// </summary>
        [ForeignKey("OrderId")]
        public virtual Order Order { get; set; }
    }
}
