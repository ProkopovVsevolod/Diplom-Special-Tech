import { FC } from "react";
import styles from "./card.module.scss";
const Card: FC = () => {
    return (
        <div className={styles.wrapper}>
            <img  className={styles.img} src="" alt={`Изображение `} />
            <h3 className={styles.title}>Price</h3>
            <button className={styles.button}>Добавить в заказ</button>
        </div>
    );
}
 
export default Card;