import { configureStore } from "@reduxjs/toolkit";
import { getUsersReducer } from "../slice/userSlice";

export default configureStore({
    reducer:{
        getUsers : getUsersReducer
    },
    middleware: (getDefultMiddleware) => getDefultMiddleware({ serializableCheck: false})
});