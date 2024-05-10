import { useQuery } from "@tanstack/react-query";
import { OrderSercvices } from "../../../services/order.service";
import "./style.scss";
import { phoneFormatter } from "../../../helpers/phoneFormater";
import { Link } from "react-router-dom";

const OrderList = () => {

    const { isFetching, data: orderList, error} = useQuery({
        queryKey: ["orderList"],
        queryFn: () => { return OrderSercvices.getOrdersList() }
    })

    console.log(orderList)


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>№ заказа</th>
                    <th>ID пользователя</th>
                    <th>Телефон</th>
                    <th>Почта</th>
                    <th>Адрес</th>
                    <th>Дата заказа</th>
                </tr>
            </thead>

            <tbody>
                {orderList && orderList.map(order => 
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.idUser}</td>
                        <td>{phoneFormatter(order.phone)}</td>
                        <td><a href={`mailto:${order.email}`}></a>{order.email}</td>
                        <td>{order.address}</td>
                        <td>{order.date}</td>
                        <td><Link className="table__edit-btn" to={`order/${order.id}`}>Редактировать</Link></td>
                        <td>
                            <button className="table__delete-btn" onClick={() => {OrderSercvices.deleteOrder(order.id)}}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
 
export default OrderList;