import { FC, useEffect } from "react";
import SideBar from "../../ui-kit/SideBar/SideBar";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../ui-kit/Breadcrumbs/Breadcrumbs";
import { ProductSercvices } from "../../services/product.services";
import { useQuery } from "@tanstack/react-query";

const CatalogPage: FC = () => {

    const { id } = useParams<{ id:string}>();
    console.log(id);

    const { isLoading, data, error, status} = useQuery({
        queryKey: [`${id}`, id],
        queryFn: () => {
            if (id) {
                ProductSercvices.getTech(id, "http://localhost:5001/auth"); 
            }
        }
    })

    return (
        <>
            <Breadcrumbs />
            <SideBar />
        </>
    );
}
 
export default CatalogPage;