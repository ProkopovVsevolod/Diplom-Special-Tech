import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss"

interface EmptyProps {};

const Footer: FC<EmptyProps>= () => {
    return (
        <footer className={styles.footer}>
            <div className="footer__column">
                <p className={styles.title}>Аренда спецтехники</p>
                <ul>
                    <li><Link className={styles.link} to={"/catalog/trawl"}>Аренда трала</Link></li>
                    <li><Link className={styles.link} to={"/catalog/cranes"}>Аренда крана</Link></li>
                    <li><Link className={styles.link} to={"/catalog/roadRinks"}>Аренда катка</Link></li>
                    <li><Link className={styles.link} to={"/catalog/excavators"}>Аренда экскаватора</Link></li>
                    <li><Link className={styles.link} to={"/catalog/dumpTrucks"}>Аренда самосвала</Link></li>
                    <li><Link className={styles.link} to={"/catalog/liftTrucks"}>Аренда погрузчика</Link></li>
                </ul>
            </div>

            <div className="footer__column">
                <p className={styles.title}>Контакты</p>
                <a className={styles.link} href="tel:+79277499370">+7 (927) 499 370</a>
            </div>

            <div className="footer__column">
                <p className={styles.title}>Офис</p>
                <p className={styles.text}>443876, г. Самара, ул. Ленинская 14, оф. 555</p>
                <p className={styles.text}>Пн-Пт с 8:00 до 17:00</p>
                <a className={styles.link}>vaprokopov@mail.ru</a>

                <div className="footer__social-network-wrapper">
                    <a href="#"  className={styles.socialNetwork}></a>
                    <a href="#"  className={styles.socialNetwork}></a>
                    <a href="#"  className={styles.socialNetwork}></a>
                </div>
            </div>
    </footer>
    );
}
 
export default Footer;