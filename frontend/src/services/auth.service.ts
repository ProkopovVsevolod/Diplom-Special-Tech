import axios from "axios";
import { IAuthData } from "../interfaces/auth.interface";


const auth = axios.create({
    baseURL: "https://localhost:5001/api/User"
})

export const AuthService = {
    async sendData(dataToSend: IAuthData, url: string) { 
        const responseFromServer = await auth.post(url, dataToSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Ответ сервера успешно получен!', responseFromServer.data);
    }
}