import { Dispatch, FC, SetStateAction } from "react";

export interface IModalParametres {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    children?: React.ReactNode;
}