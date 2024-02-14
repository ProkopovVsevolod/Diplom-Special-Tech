import { FC } from "react";
import "./style.scss";

interface ICardProps {
    card: {
        id: string;
        url:string;
        title: string;
        date: string;
        price: number;
    }
    
}

const CardCart: FC<ICardProps> = ({card}) => {
    const {id, url, title, date, price} = card;
    return (
        <div className="card" id={id}>
            <img className="card__img" src={url} alt={`изображение ${title}`} />
            <div className="card__info">
                <p className="card__title">{title}</p>
                <p className="card__date">{date}</p>
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