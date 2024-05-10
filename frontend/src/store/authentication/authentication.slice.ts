import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IAuthState {
    id: number | null,
    data: string | null,
    phone: string | null,
    email: string | null;
    isAdmin: boolean
}

const initialState: IAuthState = {
    id: null,
    data: null,
    phone: null,
    email: null,
    isAdmin: true
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<{id: number; data: string; phone: string; isAdmin: boolean; email: string}>) => {
            state.id = action.payload.id;
            state.data = action.payload.data;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.isAdmin = action.payload.isAdmin;
        },

        exitUser: (state) => {
            state.id = null;
            state.data = null;
            state.phone = null;
            state.isAdmin = false;
        }
    }
});

export const {authUser, exitUser} = authSlice.actions;

export const selectIsAdmin = (state: RootState) => state.user;

export default authSlice.reducer;