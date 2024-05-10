import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ITechData } from "../../interfaces/tech.interfaces";

interface IOrderState {
    techniques: ITechData[],
    date: Date | null,
    totalPrice: number
}

const initialState: IOrderState = {
    techniques: [],
    date: null,
    totalPrice: 0
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addTechToOrder: (state, action: PayloadAction<ITechData>) => {
            state.techniques.push(action.payload);
            state.techniques.map(tech => {
                state.totalPrice = state.totalPrice + tech.price;
            })
        },

        deleteTechFromOrder: (state, action: PayloadAction<{id: number;}>) => {
            const index =  state.techniques.findIndex(tech => tech.id === action.payload.id);
            state.totalPrice = state.totalPrice - state.techniques[index].price;

            if (index !== -1) {
                state.techniques.splice(index, 1);
            }
        },

        updateDate: (state) => {
            state.date = new Date();
        },
    }
});

export const {addTechToOrder, deleteTechFromOrder, updateDate} = orderSlice.actions;

export const selectIsAdmin = (state: RootState) => state.order;

export default orderSlice.reducer;