import { FC } from "react";
import styles from "./Aside.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { exitUser } from "../../../store/authentication/authentication.slice";

interface IAside {
    isVisible: boolean;
}

const Aside: FC<IAside> = ({isVisible}) => {
    const isAuth = useAppSelector(state => state.user.data);
    const dispath = useAppDispatch();

    return (
        <aside className={styles.aside + " " + (isVisible ? styles.visible : "")}>
            
            {isAuth
            ? <>
                <p className={styles.userName}>NAME</p>
                <ul>
                    <li><Link className={styles.icon + " " + styles.cabinet} to={"/"}>Личный кабинет</Link></li>
                    <li><Link className={styles.icon + " " + styles.orders} to={"/"}>Мои заказы</Link></li>
                    <li><Link className={styles.icon + " " + styles.settings} to={"/"}>Настройки</Link></li>
                    <li><Link className={styles.icon + " " + styles.help} to={"/"}>Поддержка</Link></li>
                    <li onClick={() => dispath(exitUser())}>Выйти</li>
                </ul>
            </>
            : 
            <>
                <p className={styles.userName}>Авторизируйтесь</p>
                <ul>
                    <li><Link className={styles.icon + " " + styles.register} to={"/registration"}>Регистрация</Link></li>
                    <li><Link className={styles.icon + " " + styles.cabinet} to={"/login"}>Авторизация</Link></li>
                </ul>
            </>
            }
        </aside>
    );
}
 
export default Aside;