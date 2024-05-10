import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss"

const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Каталог техники</p>

            <ul>
                <li className={styles.listItem}>
                    <Link to={"/"}>Экскаваторы</Link>
                    <ul>
                        {/* <li><Link to={"/"}>page1.2</Link></li> */}
                    </ul>
                </li>

                <li className={styles.listItem}>
                    <Link to={"/"}>Погрузчики</Link>
                </li>

                <li className={styles.listItem}>
                    <Link to={"/"}>Самосвалы</Link>
                </li>

                <li className={styles.listItem}>
                    <Link to={"/"}>Катки</Link>
                </li>

                <li className={styles.listItem}>
                    <Link to={"/"}>Краны</Link>
                </li>

                <li className={styles.listItem}>
                    <Link to={"/"}>Тралы</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default SideBar;