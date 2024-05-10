import { Link } from "react-router-dom";
import "./style.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__column">
                <p className="footer__title">Аренда спецтехники</p>
                <ul>
                    <li><Link className="footer__link">Аренда трала</Link></li>
                    <li><Link className="footer__link">Аренда крана</Link></li>
                    <li><Link className="footer__link">Аренда катка</Link></li>
                    <li><Link className="footer__link">Аренда экскаватора</Link></li>
                    <li><Link className="footer__link">Аренда самосвала</Link></li>
                    <li><Link className="footer__link">Аренда погрузчика</Link></li>
                </ul>
            </div>

            <div className="footer__column">
                <p className="footer__title">Контакты</p>
                <Link>+7 (927) 499 370</Link>
            </div>

            <div className="footer__column">
                <p className="footer__title">Офис</p>
                <p className="footer__text">443876, г. Самара, ул. Ленинская 14, оф. 555</p>
                <p className="footer__text">Пн-Пт с 8:00 до 17:00</p>
                <Link className="footer__link">vaprokopov@mail.ru</Link>

                <div className="footer__social-network-wrapper">
                    <Link className="footer__social-network"></Link>
                    <Link className="footer__social-network"></Link>
                    <Link className="footer__social-network"></Link>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
