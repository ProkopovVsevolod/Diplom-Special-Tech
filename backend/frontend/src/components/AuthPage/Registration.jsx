const Registration = () => {
    return (
        <div className="auth">
            <form className="auth__form" action="">
                <p className="auth__title">Регистрация</p>
                <input className="input" type="text" placeholder="Логин"/>
                <p></p>
                <input className="input" type="password" placeholder="Пароль"/>
                <p></p>

                <input className="input" type="password" placeholder="Повторите пароль"/>
                <p></p>

                <input className="input" type="tel" placeholder="Номер телефона"/>
                <p></p>

                <button className="button">Создать аккаунт</button>
            </form>
        </div>
    );
}
 
export default Registration;