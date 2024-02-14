import { FC, useState } from "react";
import Calendar from "react-calendar";
import Description from "./Description";
import styles from "./product.module.scss"
import ProductImg from "./../../assets/tech-img.png"
import Breadcrumbs from "../../ui-kit/Breadcrumbs/Breadcrumbs";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

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
    new Date('2024-02-25'),
    new Date('2024-02-26'),
    new Date('2024-02-27')
  ];

  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

const ProductPage: FC = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (
        <section className={styles.section}>
            <Breadcrumbs />
            <h1 className={styles.title}></h1>

            <div className={styles.row}>
                <img className={styles.img} src={ProductImg} alt={`Изображение ${"Boomag 33"}`} />

                <div>
                    <span>Масса 15 700 кг</span>
                    <span>Масса 15 700 кг</span>
                    <span>Масса 15 700 кг</span>
                    <span>Масса 15 700 кг</span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quam totam, officiis similique vel sit alias omnis laudantium quas 
                        libero quisquam ab? Laudantium facilis beatae amet. Impedit vel 
                        accusantium maiores. Perspiciatis.
                    </p>
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
        </section>
    );
}
 
export default ProductPage;