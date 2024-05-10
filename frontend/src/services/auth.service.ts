import axios from "axios";
import { IAuthData } from "../interfaces/auth.interface";


const auth = axios.create({
    baseURL: "https://localhost:5001/api/User"
})

export const AuthService = {
    async sendAuthData(dataToSend: IAuthData, url: string): Promise<any> { 
        try {
            const responseFromServer = await auth.post(url, dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Ответ сервера успешно получен!', responseFromServer.data);
            return responseFromServer.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Ошибка Axios:', error.response);
                // Обработка ошибки Axios
                throw error; // Выбрасываем ошибку, чтобы она могла быть обработана на уровне вызова
            } else {
                console.error('Неизвестная ошибка:', error);
                // Обработка других типов ошибок
                throw error; // Выбрасываем ошибку, чтобы она могла быть обработана на уровне вызова
            }
        }     
    }
}