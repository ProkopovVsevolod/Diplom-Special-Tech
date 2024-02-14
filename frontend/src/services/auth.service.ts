import axios from "axios";
import { IAuthData } from "../interfaces/auth.interface";

export const AuthService = {
    async sendData(dataToSend: IAuthData, url: string) {
        const responseFromServer = await axios.post(url, dataToSend, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Ответ сервера успешно получен!', responseFromServer.data);
    }
}