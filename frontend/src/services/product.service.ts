import axios from "axios";
import { ICardData } from "../interfaces/tech.interfaces";

const tech = axios.create({
    baseURL: "https://localhost:5001/api/Technique"
})


export const ProductSercvices = {
    async getTechByType(id: string) {
        try {
            const responseFromServer = await tech.get<ICardData[]>("/GetTechniquesByTypeOfTechniqueId/" + id);
            return responseFromServer.data
        } catch (err) {
            console.log(err)
        }
    },

    async getTechById(id: string) {
        try {
            const responseFromServer = await tech.get<ICardData>("/GetTechniqueById/" + id);
            return responseFromServer.data
        } catch (err) {
            console.log(err)
        }
    }
}

