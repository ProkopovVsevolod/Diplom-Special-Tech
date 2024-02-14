import { FC } from "react";
import { Link } from "react-router-dom";
import CardCart from "./CartCard/CartCard";

import styles from "./cart.module.scss";

const CartElements = [
    {id: "1", url: "222", title: "DM-614", date: '17.01.2024-19.01.2024', price: 9899},
    {id: "2", url: "222", title: "DM-614", date: '17.01.2024-19.01.2024', price: 10000},
    {id: "3", url: "222", title: "DM-614", date: '17.01.2024-19.01.2024', price: 10001},
]

const Cart: FC = () => {
    return (
        <div className={styles.flex}>
            <div className={styles.wrapper}>
                {CartElements.map(card => {
                    return <CardCart card={card}/>
                })}
            </div>

            <div className={styles.buy}>
                <p className={styles.price}>Итого: <span>29 697 ₽</span></p>
                <Link className={styles.button} to={"/"}>Оформить</Link>
            </div>
        </div>
        
    );
}
 
export default Cart;
