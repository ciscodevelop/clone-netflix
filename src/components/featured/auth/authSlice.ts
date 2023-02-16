import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./authAPI";
import { RootState } from "../../../app/store";
import { UserModel } from "../../../models/UserModel";
 
 
//const key: string | null =  JSON.parse(  localStorage.getItem("user")! );;
//const myKey = key !== null ? key : "";
const user:UserModel|undefined =  JSON.parse(  localStorage.getItem("user")! );
 
const initialState = {
  user: user ?user: undefined,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "",
};

 
//REGISTRATION
export const register = createAsyncThunk ('auth/register', async (user:any,thunkAPI) => {
  try {
    return await authAPI.register(user)
  } catch (error) { 
      console.log(error);
       thunkAPI.rejectWithValue(error);
      
  }    
})
export const login = createAsyncThunk ('auth/login', async (userData:any,thunkAPI) => {
  try {
    return await authAPI.login(userData)
  } catch (error) { 
      console.log(error);
       thunkAPI.rejectWithValue(error);
      
  }    
})
 


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSucces = false;
      state.isLoading = false;
      state.message = "";
      state.user = undefined
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {         
            state.isLoading = true;
        })
        builder.addCase(register.fulfilled, (state, actions) => {
            state.isError = false;
            state.isSucces = true;
            state.isLoading = false;
            state.message = "";
            state.user= actions.payload
        })
        builder.addCase(register.rejected, (state, actions) => {
            state.isError = true;
            state.isSucces = false;
            state.isLoading = false;
            state.message = actions.payload as string;
            state.user= undefined
        })
        builder.addCase(login.pending, (state) => {         
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, actions) => {
            state.isError = false;
            state.isSucces = true;
            state.isLoading = false;
            state.message = "";
            state.user= actions.payload??undefined
        })
        builder.addCase(login.rejected, (state, actions) => {
            state.isError = true;
            state.isSucces = false;
            state.isLoading = false;
            state.message = actions.payload as string;
            state.user= undefined
        })
        
      
  }
});
export const selectUser = (state: RootState) => state.auth.user;
export const {reset}= authSlice.actions
export default authSlice.reducer
