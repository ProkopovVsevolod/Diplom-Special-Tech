import { FC, useState } from "react";
import styles from "./product.module.scss"
import ProductImg from "./../../assets/tech-img.png"
import Breadcrumbs from "../../ui-kit/Breadcrumbs/Breadcrumbs";
import 'react-calendar/dist/Calendar.css';
import { useParams } from "react-router-dom";
import { ProductSercvices } from "../../services/product.service";
import { useQuery } from "@tanstack/react-query";
import { useTechId } from "../../hooks/useTech";
import TechCalendar from "./TechCalendar";

const disabledDates = [
    new Date('25-05-2024'),
    new Date('26-05-2024'),
    new Date('27-05-2024')
];

const userData = {
    idUser: 1,
    phone: +79277499370,
}


const ProductPage: FC = () => {

    const { id } = useParams<{id:string}>();
    const { isFetching, data: techData, error} = useQuery({
        queryKey: [`tech`, id],
        queryFn: () => { 
            if(id) {
                return ProductSercvices.getTechById(id)
            }},
        enabled: !!id
    })

    // const handlerClick = () => {
    //     const valueArray = Array.isArray(value) ? value : [value];
    //     const formattedDates = valueArray.map(date => formateDate(date))
    //     console.log(formattedDates);
    // }

    // const { isFetching, data: techData, error} = useTechId(id)

    return (
        <section className={styles.section}>
            {/* <Breadcrumbs /> */}
            {isFetching ? <h1>Загрузка данных товара</h1> : <></>}
            {techData ?
            <>
                <h1 className={styles.title}>{techData.name}</h1>
                <div className={styles.row}>
                    <img className={styles.img} src={ProductImg} alt={`Изображение ${techData.name}`} />

                    <div className={styles.characterCol}>
                        <p>{techData.сharacteristic}</p>
                        <p>Цена за смену: {techData.price} руб</p>

                        
                    </div>
                </div>

                <TechCalendar techData={techData}/>
            </> : <p>Ошибка получения данных: </p>}
        </section>
    );
}
 
export default ProductPage;