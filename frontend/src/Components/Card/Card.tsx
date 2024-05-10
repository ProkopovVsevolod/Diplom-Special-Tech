import { FC } from "react";
import { ITechData } from "../../interfaces/tech.interfaces";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { addTechToOrder } from "../../store/order/order.slice";


const Card: FC<{data: ITechData}> = ({data}) => {
    const dispath = useAppDispatch();
    const {name, price, id} = data;
    console.log(data)

    return (
        <Link to={`tech/${id}`} key={id} className={styles.wrapper}>
            <img  className={styles.img} src="" alt={`Изображение `} />
            <h3 className={styles.title}>{name}</h3>
            <p>{price} за смену</p>
            <p className={styles.button} onClick={() => dispath(addTechToOrder(data))}>Добавить в заказ</p>
        </Link>
    );
}
 
export default Card;