export const validatorData = {
    email: {
        required: "Почта обязательна для заполнения!",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Неправильный формат почты!"
        },
        minLength: {
            value: 2,
            message: "Логин должен быть длинее 2 символов!"
        },
        maxLength: {
            value: 20,
            message: "Логин должен быть не больше 20 символов!"
        }   
    },

    phone: {
        required: "Номер телефона обязателен для заполнения!",
        pattern: {
            value: /^(\+7|8)[- ]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
            message: "Неправильный формат телефона!"
        }
    },

    password: {
        required: "Пароль обязателен для заполнения!",
        minLength: {
            value: 2,
            message: "Пароль должен быть длинее 2 символов!"
        },
        maxLength: {
            value: 20,
            message: "Пароль должен быть не больше 20 символов!"
        }    
    },

    repeatPassword: {
        required: "Повторить пароль обязательно!",
        minLength: {
            value: 2,
            message: "Пароль должен быть длинее 2 символов!"
        },
        maxLength: {
            value: 20,
            message: "Пароль должен быть не больше 20 символов!"
        }    
    }
}
