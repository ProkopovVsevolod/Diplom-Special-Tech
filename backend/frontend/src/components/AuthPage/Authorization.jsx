import { Link } from "react-router-dom"

const Authorization = () => {
    return (
        <div className="auth">
            <form action="">
                <p className="auth__title">Авторизация</p>
                <input className="input" type="text" placeholder="Логин"/>
                <p></p>
                <input className="input" type="password" placeholder="Пароль"/>
                <p></p>

                <Link to="/">Забыли пароль</Link>

                <button className="button button-inner">Войти</button>
                <button className="button">Создать аккаунт</button>
            </form>
        </div>
    );
}
 
export default Authorization;