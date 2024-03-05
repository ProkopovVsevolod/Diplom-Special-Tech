import { FC } from "react";
import { ICardData } from "../../interfaces/tech.interfaces";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";


const Card: FC<{data: ICardData}> = ({data}) => {
    const {name, price, id} = data;
    console.log(data)

    return (
        <Link to={`tech/${id}`} key={id} className={styles.wrapper}>
            <img  className={styles.img} src="" alt={`Изображение `} />
            <h3 className={styles.title}>{name}</h3>
            <p>{price} за смену</p>
            <p className={styles.button}>Добавить в заказ</p>
        </Link>
    );
}
 
export default Card;