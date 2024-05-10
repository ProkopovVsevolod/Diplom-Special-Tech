import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./authentication/authentication.slice";
import orderReducer from "./order/order.slice";
// import postsReducer from "./postsSlice";
// import counterReducer from "./counterSlice";

const store = configureStore({
    reducer: {
        user: usersReducer,
        order: orderReducer
        // posts: postsReducer,
        // counter: counterReducer
    }
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;

// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;