import { FC, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import styles from "./product.module.scss"
import { ITechData } from "../../interfaces/tech.interfaces";
import { useAppDispatch } from "../../store/hooks";
import { addTechToOrder } from "../../store/order/order.slice";

const CalendarWrapper = styled.div`
    max-width: 600px;
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
    new Date('2024-05-03'),
    new Date('2024-05-02'),
    new Date('2024-05-04'),
];


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const TechCalendar:FC<{techData: ITechData}> = ({techData}) => {

    const [value, onChange] = useState<Value>(new Date());
    const dispath = useAppDispatch();

    const handlerClick = () => {
        const valueArray = Array.isArray(value) ? value : [value];
        const formattedDates = valueArray.map(date => formateDate(date))
        console.log(formattedDates);

        dispath(addTechToOrder(techData))
    }

    const formateDate = (date: Value ) => {
        if(date != null) {
            return date.toLocaleString('ru-Ru', {
                day: '2-digit',
                month: '2-digit',
                year: "2-digit",
            }).replace(/\//g, ".")
        }
    }

    const isDateDisabled = (date: Date) => {
        return disabledDates.some(disabledDate => 
            disabledDate.getDate() === date.getDate() && 
            disabledDate.getMonth() === date.getMonth() &&
            disabledDate.getFullYear() === date.getFullYear()
        )
    }

    return (
        <CalendarWrapper>
            <Calendar 
                value={value}
                onChange={onChange}
                tileDisabled={({ date }) => isDateDisabled(date)}
                selectRange={true}
            />

            <button className={styles.button} onClick={handlerClick}>Добавить в заказ</button>
            <p>{techData.price} / смена</p>
            <p>{techData.price} / смена</p>
        </CalendarWrapper>
    );
}
 
export default TechCalendar;