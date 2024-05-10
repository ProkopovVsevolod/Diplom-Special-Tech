import { FC } from "react";
import OrderList from "./OrdersList/OrderList";
import { useQuery } from "@tanstack/react-query";
import { OrderSercvices } from "../../services/order.service";

const AdminPanel: FC = () => {



    return (
        <div>
            <OrderList />
        </div>
    );
}
 
export default AdminPanel;