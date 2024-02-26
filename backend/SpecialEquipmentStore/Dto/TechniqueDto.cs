using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Dto
{
    /// <summary>
    /// ДТО техники
    /// </summary>
    public class TechniqueDto
    {
        /// <summary>
        /// Id техники
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Название техники
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Характеристика
        /// </summary>
        public string Сharacteristic { get; set; }

        /// <summary>
        /// Цена техники
        /// </summary>
        public int Price { get; set; }

        /// <summary>
        /// Количество техники
        /// </summary>
        public int Count { get; set; }

        /// <summary>
        /// Id типа техники
        /// </summary>
        public int IdTypeOfTechnique { get; set; }

    }
}
