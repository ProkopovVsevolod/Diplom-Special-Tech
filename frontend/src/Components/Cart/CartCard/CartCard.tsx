import { FC } from "react";
import "./style.scss";
import { ITechData } from "../../../interfaces/tech.interfaces";

const CardCart: FC<{card: ITechData}> = ({card}) => {
    const {id, name, price} = card;


    return (
        <div className="card" key={id}>
            <img className="card__img" src={''} alt={`изображение ${name}`} />
            <div className="card__info">
                <p className="card__title">{name}</p>
                <p className="card__date">{}</p>
                <p className="card__price">{price} ₽</p>
            </div>
            
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default CardCart;