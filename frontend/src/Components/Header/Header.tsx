import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import Aside from './Aside/Aside';

import cartImg from "./../../assets/icons/Cart.png";
import personImg from "./../../assets/icons/person.png";
import styles from "./header.module.scss";

const Header: FC = () => {

    const [isVisibleAside, setIsVisibleAside] = useState(false);

    const handleOpenAsideMenu = () => {
        setIsVisibleAside(!isVisibleAside);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to={"/"}>
                        <span>Сам</span>спецтех
                    </Link>
                </div>

                <ul className={styles.list}>
                    <li><Link className={styles.links} to={"/"}>Автопарк</Link></li>
                    <li><Link className={styles.links} to={"/"}>О компании</Link></li>
                    <li><Link className={styles.links} to={"/"}>Оплата и доставка</Link></li>
                    <li><Link className={styles.links} to={"/"}>FAQ</Link></li>
                    <li><Link className={styles.links} to={"/"}>Контакты</Link></li>
                </ul>
                
                <Link to={"/cart"} className={styles.icon + " " +  styles.cart}></Link>
                <div className={styles.icon + " " +  styles.person} onClick={handleOpenAsideMenu}>
                    <Aside isVisible={isVisibleAside}/>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;