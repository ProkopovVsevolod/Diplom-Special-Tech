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
            

            

            
            <form className={styles.form}>
                <p>Контактные данные</p>

                <input className={styles.input} type="text" placeholder="Имя"/>
                <input className={styles.input} type="text" placeholder="Фамилия"/>
                <input className={styles.input} type="text" placeholder="Номер телефона"/>
                <input className={styles.input} type="email" placeholder="Email"/>

            </form>

            <div className={styles.wrapper}>
                {CartElements.map(card => {
                    return <CardCart card={card}/>
                })}

                <div className={styles.buy}>
                    <p className={styles.price}>Итого: <span>29 697 ₽</span></p>
                    <Link className={styles.button} to={"/"}>Оформить</Link>
                </div>
            </div>
        </div>


    );
}
 
export default Cart;
