import { FC } from "react";
import styles from "./Aside.module.scss";
import { Link } from "react-router-dom";

interface IAside {
    isVisible: boolean;
}

const Aside: FC<IAside> = ({isVisible}) => {
    return (
        <aside className={styles.aside + " " + (isVisible ? styles.visible : "")}>
            <p className={styles.userName}>NAME</p>
            <ul>
                <li><Link className={styles.icon + " " + styles.cabinet} to={"/"}>Личный кабинет</Link></li>
                <li><Link className={styles.icon + " " + styles.orders} to={"/"}>Мои заказы</Link></li>
                <li><Link className={styles.icon + " " + styles.settings} to={"/"}>Настройки</Link></li>
                <li><Link className={styles.icon + " " + styles.help} to={"/"}>Поддержка</Link></li>
            </ul>

            <p className={styles.exit}>Выход</p>
        </aside>
    );
}
 
export default Aside;