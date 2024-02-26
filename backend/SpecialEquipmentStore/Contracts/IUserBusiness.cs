﻿using SpecialEquipmentStore.Dto;
using SpecialEquipmentStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpecialEquipmentStore.Contracts
{
    /// <summary>
    /// Контракт для работы с сервисом пользователей
    /// </summary>
    public interface IUserBusiness
    {
        /// <summary>
        /// Зарегистрировать пользователя
        /// </summary>
        /// <param name="userRegisterDto"> ДТО пользователя для регистрации </param>
        /// <returns></returns>
        Task Register(UserDto userRegisterDto);

        /// <summary>
        /// Авторизовать пользователя
        /// </summary>
        /// <param name="userAuthorizeDto"> ДТО пользователя для авторизации </param>
        /// <returns> ДТО авторизованного пользователя </returns>
        Task<UserDto> Authorize(UserDto userAuthorizeDto);
    }
}
