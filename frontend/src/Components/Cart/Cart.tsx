import { FC } from "react";
import { Link } from "react-router-dom";
import CardCart from "./CartCard/CartCard";

import styles from "./cart.module.scss";
import { useAppSelector } from "../../store/hooks";
import { IOrderData } from "../../interfaces/order.interfaces";

const CartElements = [
    {id: "1", url: "222", title: "DM-614", date: '17.01.2024-19.01.2024', price: 9899},
    {id: "2", url: "222", title: "DM-614", date: '17.01.2024-19.01.2024', price: 10000},
    {id: "3", url: "222", title: "DM-614", date: '17.01.2024-19.01.2024', price: 10001},
]

interface IAddNewOrder extends IOrderData{
    idUser: number,
    phone: string,
    email: string,
    address: string
}

const Cart: FC = () => {
    const orderStoreData = useAppSelector(state => state.order);
    const userStoreData = useAppSelector(state => state.user);
    // const techniques = useAppSelector(state => state.order.techniques);
    
    const addOrder = () => {
        if(userStoreData.id && userStoreData.phone && userStoreData.email) {
            const newOrder: IAddNewOrder = {
                id: 0,
                idTechnique: 0,
                idUser: userStoreData.id,
                phone: userStoreData.phone,
                email: userStoreData.email,
                address: "",
                date: ""
            }
        }
        
    }
    
    return (
        <div className={styles.flex}>

            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <p>Контактные данные</p>

                    <input className={styles.input} type="text" placeholder="Номер телефона"/>
                    <input className={styles.input} type="email" placeholder="Email"/>
                    <input className={styles.input} type="text" placeholder="Введите адрес доставки"/>
                </form>

                <div className={styles.buy}>
                    <p className={styles.price}>Итого: <span>{orderStoreData.totalPrice} ₽</span></p>
                    <button className={styles.button} onClick={() => {}}>Оформить</button>
                </div>
            </div>

            {orderStoreData.techniques.length !== 0 
                ? 
                    <div className={styles.card_wrapper}>
                        {orderStoreData.techniques.map(card => {
                            return <CardCart key={card.id} card={card}/>
                        })}
                    </div>
                : 
                    <div className={styles.empty_data}>
                        <p>Вы пока что не добавили технику в заказ</p>
                    </div>
            }        
        </div>
    );
}
 
export default Cart;
