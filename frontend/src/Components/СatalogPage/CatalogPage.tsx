import { FC, useEffect, useState } from "react";
import SideBar from "../../ui-kit/SideBar/SideBar";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../ui-kit/Breadcrumbs/Breadcrumbs";
import { ProductSercvices } from "../../services/product.service";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";

import "./style.scss";

// const techArray = [
//     {id: "liftTrucks", title: "Погрузчики", url: liftTruckIMG},
//     {id: "dumpTrucks", title: "Самосвалы", url: dumpTrucksIMG},
//     {id: "roadRinks", title: "Катки", url: roadRinksIMG},
//     {id: "excavators", title: "Экскаваторы", url: excavatorIMG},
//     {id: "cranes", title: "Краны", url: craneIMG},
//     {id: "trawl", title: "Тралы", url: trawlIMG},
// ]

const CatalogPage: FC = () => {

    const { id } = useParams<{id:string}>();
    let techIdType: string = ''

    switch(id) {
        case "cranes": {
            techIdType = '1';
            break;
        }
        case "liftTrucks": {
            techIdType = '2';
            break;
        }
        case "dumpTrucks": {
            techIdType = '3';
            break;
        }
        case "roadRinks": {
            techIdType = '4';
            break;
        }
        case "excavators": {
            techIdType = '5';
            break;
        }
        case "trawl": {
            techIdType = '6';
            break;
        }
    }

    const { isFetching, data: techData, error} = useQuery({
        queryKey: [`${id}`],
        queryFn: () => { return ProductSercvices.getTechByType(techIdType)},
        enabled: !!id
    })


    return (
        <>
            {/* <Breadcrumbs /> */}
            
            <div className="card__wrapper">
                <SideBar />
                {isFetching ? <h1>Загрузка данных</h1> : <></> }

                {techData?.length ? techData.map((tech)=> {
                    return <Card data={tech}/>
                }) : <h1>Данные не найдены</h1>}
            </div>
            
            
        </>
    );
}
 
export default CatalogPage;