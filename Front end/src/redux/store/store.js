import { configureStore } from "@reduxjs/toolkit";
import { listUserReducer } from "../slice/userSlice";

export default configureStore({
    reducer:{
        listUsers: listUserReducer
    },
    middleware: (getDefultMiddleware) => getDefultMiddleware({ serializableCheck: false})
});