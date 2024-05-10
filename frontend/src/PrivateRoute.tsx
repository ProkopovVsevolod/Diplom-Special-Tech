import { FC, ReactNode } from "react";
import { RouteProps } from "react-router"
import { Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

// export interface PrivateRouteProps {
//     redirectPath: string;
// }

// type CombinedRouteProps = RouteProps & PrivateRouteProps;

interface IPrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
    const isAdmin = useAppSelector(state => state.user.isAdmin);

    if (!isAdmin) {
        return <Navigate to={"/login"} replace/>;
    }
    return <>{children}</>;
}
 
export default PrivateRoute;