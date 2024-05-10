using System;
using System.Threading.Tasks;
using SpecialEquipmentStore.Contracts;
using SpecialEquipmentStore.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SpecialEquipmentStore.Controllers
{
    /// <summary>
    /// Контроллер для работы с пользователями
    /// </summary>
    [Route("api/User")]
    public class UserController : ControllerBase
    {
        private readonly IUserBusiness _userBusiness;

        public UserController(IUserBusiness userBusiness)
        {
            _userBusiness = userBusiness;
        }

        /// <summary>
        /// Зарегистрировать пользователя
        /// </summary>
        /// <param name="userData">Данные пользователя</param>
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] UserDto userData)
        {
            var user = await _userBusiness.Authorize(userData);

            if (user != null)
            {
                return new ContentResult
                {
                    Content = "Данный пользователь уже зарегистрирован!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            await _userBusiness.Register(userData);

            return Ok();
        }

        /// <summary>
        /// Авторизовать пользователя
        /// </summary>
        /// <param name="userData">Данные пользователя</param>
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] UserDto userData)
        {
            var user = await _userBusiness.Authorize(userData);

            if (user == null)
            {
                return new ContentResult
                {
                    Content = "Пользователь не найден!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(user);
        }

        /// <summary>
        /// Получить всех пользователей
        /// </summary>
        [HttpGet]
        [Route("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userBusiness.GetAllUsers();

            if (users == null)
            {
                return new ContentResult
                {
                    Content = "Пользователи не найдены!",
                    ContentType = "application/json",
                    StatusCode = 400
                };
            }

            return Ok(users);
        }
    }
}
