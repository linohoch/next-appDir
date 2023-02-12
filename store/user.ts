import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserType = {
    no?:number | null;
    userId?:string | null;
    password?:string | null;
    firstname?:string | null;
    lastname?:string | null;
    birthdate?:string | null;
    accessToken?:string | null;
}
const initialState: UserType = {
    no:0,
    userId:'',
    password:'',
    firstname:'',
    lastname:'',
    birthdate:'',
    accessToken:''
}

const userSlice = createSlice({
    name:"authUser",
    initialState:initialState,
    reducers:{
        setUser:(state, action:PayloadAction<UserType>)=>{
            state= {...action.payload}
            return state;
        }
    }
})
export const userActions = {...userSlice.actions}
export default userSlice.reducer;