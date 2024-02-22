import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import Aside from './Aside/Aside';
import styles from "./header.module.scss";
import Modal from '../../ui-kit/Modal/Modal';
import PaymentAndDelivery from '../PaymentAndDelivery/PaymentAndDelivery';

const Header: FC = () => {

    const [isVisibleAside, setIsVisibleAside] = useState(false);
    const [modalActivePayment, setActiveModalPayment] = useState(false)

    const handleOpenAsideMenu = () => {
        setIsVisibleAside(!isVisibleAside);
    }

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link to={"/"}>
                            <span>Сам</span>спецтех
                        </Link>
                    </div>

                    <ul className={styles.list}>
                        <li><Link className={styles.links} to={"/"}>Автопарк</Link></li>
                        <li><p className={styles.links}>О компании</p></li>
                        <li><p className={styles.links} onClick={() => setActiveModalPayment(true)}>Оплата и доставка</p></li>
                        <li><Link className={styles.links} to={"/"}>FAQ</Link></li>
                        <li><Link className={styles.links} to={"/"}>Контакты</Link></li>
                    </ul>
                    
                    <Link to={"/cart"} className={styles.icon + " " +  styles.cart}></Link>
                    <div className={styles.icon + " " +  styles.person} onClick={handleOpenAsideMenu}>
                        <Aside isVisible={isVisibleAside}/>
                    </div>
                </nav>
            </header>

            <PaymentAndDelivery active={modalActivePayment} setActive={setActiveModalPayment}/>
        </>
        
    );
}
 
export default Header;