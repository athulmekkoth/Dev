import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SaveData=createAsyncThunk('mail/save',async(data:{content:String,title:String,})=>{
try{
console.log(data);
    const result=await axios.post(`${import.meta.env.VITE_BASE_URL}/content/create`,data,{withCredentials: true});
}
catch(error){


}
})