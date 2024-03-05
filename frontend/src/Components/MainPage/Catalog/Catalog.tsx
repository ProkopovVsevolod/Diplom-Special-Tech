import { Link } from "react-router-dom";

import liftTruckIMG from "./../../../assets/technic/lift-truck.png";
import craneIMG from "./../../../assets/technic/cranes.png";
import excavatorIMG from "./../../../assets/technic/excavators.png";
import roadRinksIMG from "./../../../assets/technic/road-rinks.png";
import trawlIMG from "./../../../assets/technic/trawls.png";
import dumpTrucksIMG from "./../../../assets/technic/dump-trucks.png";

import styles from "./catalog.module.scss";
import { FC } from "react";


interface EmptyProps {};

interface ITech {
    id: string;
    title: string;
    url: string;
}

const techArray: ITech[] = [
    {id: "liftTrucks", title: "Погрузчики", url: liftTruckIMG},
    {id: "dumpTrucks", title: "Самосвалы", url: dumpTrucksIMG},
    {id: "roadRinks", title: "Катки", url: roadRinksIMG},
    {id: "excavators", title: "Экскаваторы", url: excavatorIMG},
    {id: "cranes", title: "Краны", url: craneIMG},
    {id: "trawl", title: "Тралы", url: trawlIMG},
]

const Catalog: FC<EmptyProps> = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Наш автопарк</h2>
            <div className={styles.wrapper}>
                {techArray.map(tech => {
                    return (
                    <Link  key={tech.id} to={`/catalog/` + tech.id}>
                        <img className={styles.img} src={tech.url} alt={tech.title} />
                        <h3>{tech.title}</h3>
                    </Link>) 
                })}
            </div>
        </section>
    );
}
 
export default Catalog;