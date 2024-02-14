import axios from "axios";

export const ProductSercvices = {
    async getTech(category: string, url: string) {
        const responseFromServer = await axios.get(url);
    }
}