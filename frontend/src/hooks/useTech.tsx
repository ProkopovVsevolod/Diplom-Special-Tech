import { useQuery } from "@tanstack/react-query"
import { ProductSercvices } from "../services/product.service"

export const useTechId = (id:string) => {
    return useQuery({
        queryKey: [`tech`, id],
        queryFn: () => {return ProductSercvices.getTechById(id)},
        enabled: !!id
    })
}