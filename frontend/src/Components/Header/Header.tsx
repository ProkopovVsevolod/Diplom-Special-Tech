import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import Aside from './Aside/Aside';
import styles from "./header.module.scss";
import PaymentAndDelivery from '../HeaderModal/PaymentAndDelivery';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { stat } from 'fs';
import { exitUser } from '../../store/authentication/authentication.slice';

const Header: FC = () => {

    const [isVisibleAside, setIsVisibleAside] = useState(false);
    const [modalActivePayment, setActiveModalPayment] = useState(false)

    const dispath = useAppDispatch()
    const isAdmin = useAppSelector(state => state.user.isAdmin)

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

                    
                    {isAdmin ? 
                        <>
                            <ul className={styles.list}>
                                <li><Link className={styles.links} to={"/"}>Заказы</Link></li>
                                <li onClick={() => dispath(exitUser())}>Выйти</li>
                            </ul>
                        </>
                    :
                        <>
                            <ul className={styles.list}>
                                {/* <li><Link className={styles.links} to={"/"}>Автопарк</Link></li> */}
                                <li><p className={styles.links}>О компании</p></li>
                                <li><p className={styles.links} onClick={() => setActiveModalPayment(true)}>Оплата и доставка</p></li>
                                <li><Link className={styles.links} to={"/"}>Контакты</Link></li>
                            </ul>
                            
                            <Link to={"/cart"} className={styles.icon + " " +  styles.cart}></Link>
                            <div className={styles.icon + " " +  styles.person} onClick={handleOpenAsideMenu}>
                                <Aside isVisible={isVisibleAside}/>
                            </div>
                        </>
                    }
                    

                    
                </nav>
            </header>

            <PaymentAndDelivery active={modalActivePayment} setActive={setActiveModalPayment}/>
        </>
        
    );
}
 
export default Header;