import axios from "axios";
import { IOrderData } from "../interfaces/order.interfaces";

const order = axios.create({
    baseURL: "https://localhost:5001/api/Order/"
})


export const OrderSercvices = {
    async getOrdersList() { 
        try {
            const responseFromServer = await order.get<IOrderData[]>("GetOrders");
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
    },

    async getOrderByUserId(id:string): Promise<any> { 
        try {
            const responseFromServer = await order.get("GetOrdersByUserId/" + id);
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
    },

    async deleteOrder(id:number) { 
        try {
            const responseFromServer = await order.post("DeleteOrder/", id, {
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
    },
}

