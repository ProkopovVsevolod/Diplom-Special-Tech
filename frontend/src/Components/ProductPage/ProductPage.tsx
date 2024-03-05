import { FC, useState } from "react";
import Calendar from "react-calendar";
import Description from "./Description";
import styles from "./product.module.scss"
import ProductImg from "./../../assets/tech-img.png"
import Breadcrumbs from "../../ui-kit/Breadcrumbs/Breadcrumbs";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ProductSercvices } from "../../services/product.service";
import { useQuery } from "@tanstack/react-query";

const CalendarWrapper = styled.div`
    max-width: 600px;
    margin: auto;
    padding: 10px;
    border-radius: 3px;

    .react-calendar__tile--range {
        border-radius: 50%;
    }

    react-calendar__year-view__months__month {
        padding: 20px;
    }
`

const disabledDates = [
    new Date('2024-05-25'),
    new Date('2024-05-26'),
    new Date('2024-05-27')
  ];

  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

const ProductPage: FC = () => {

    const { id } = useParams<{id:string}>();

    const [value, onChange] = useState<Value>(new Date());

    const { isFetching, data: techData, error} = useQuery({
        queryKey: [`${id}`],
        queryFn: () => { 
            if(id) {
                return ProductSercvices.getTechById(id)
            }},
        enabled: !!id
    })

    return (
        <section className={styles.section}>
            <Breadcrumbs />

            {isFetching ? <h1>Загрузка данных товара</h1> : <></>}
            {techData ?
            <>
                <h1 className={styles.title}>{techData.name}</h1>

                <div className={styles.row}>
                    <img className={styles.img} src={ProductImg} alt={`Изображение ${"Boomag 33"}`} />

                    <div className={styles.characterCol}>
                        <p>{techData.сharacteristic}</p>
                        <p>Цена за смену: {techData.price} руб</p>

                        <button className={styles.button}>Добавить в заказ</button>
                    </div>
                    

                </div>

                <div className={styles.row}>
                    <div>
                        <div className={styles.tab_button_wrapper}>
                            <button className={styles.tab_button}>Описание</button>
                            <button className={styles.tab_button}>Характеристики</button>
                        </div>

                        <div className={styles.tab_content}>
                            <Description />
                        </div>
                    </div>

                    <CalendarWrapper>
                        <Calendar 
                            value={value}
                            onChange={onChange}
                            tileDisabled={({ date, view }) =>
                                view === 'month' && disabledDates.some(d => d.getDate() === date.getDate())
                            }
                        />
                    </CalendarWrapper>
                </div>
            </> : <p>Ошибка получения данных</p>}
        </section>
    );
}
 
export default ProductPage;