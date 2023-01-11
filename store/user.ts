import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserType = {
    no:number;
    id:string;
    password:string;
    firstname:string;
    lastname:string;
    birthdate:string;
}

const initialState: UserType = {
    no:0,
    id:'',
    password:'',
    firstname:'',
    lastname:'',
    birthdate:''
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