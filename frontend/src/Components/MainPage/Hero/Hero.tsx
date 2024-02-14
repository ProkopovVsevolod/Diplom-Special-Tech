import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./hero.module.scss";

interface EmptyProps {};

const Hero: FC<EmptyProps> = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Аренда спецтехники в Самарской области</h1>
            <p>по низким ценам</p>
            <Link to={"/"}>Заказать спецтехнику</Link>
        </div>
    );
}
 
export default Hero;