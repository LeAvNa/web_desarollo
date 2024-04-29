import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

// export const getUsers = createAsyncThunk("http://187.189.158.186:7777/Usuario",
// async({rejectWithValue}) => {
//     try{
//         // const resp = await axios.get('http://187.189.158.186:7777/Usuario')
//         return resp.data
//     }catch(error)
//     {
//         return rejectWithValue('Error:,${error.message}');
//     }
// }
// );

export const getUsers = createAsyncThunk("users/getUsers",
async() => {
    try{
        const resp = await axios.get('http://187.189.158.186:7777/Usuario');
        console.log(resp);
        return resp.data;
    }catch(error)
    {
        return null;
    }
}
);

export const getUserUnique = createAsyncThunk("users/getUserUnique",
async({rejectWithValue}) => {
    try{
        const resp = await axios.get('http://187.189.158.186:7777/Usuario/');
        return resp.data
    }catch(error)
    {
        return rejectWithValue('Error:,${error.message}');
    }
}
);

