import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

type articleState={
    articleNo:number|null;
    title:string|null;
    contents:string|null;
    writer:string|null;
    fileUrl:string|null;
}|null

interface boardState {
    articles: articleState[],
    saved: articleState,
}
const initialState: boardState = {
    articles:[], saved:null
}
const boardSlice = createSlice({
    name:'boardSlice',
    initialState:initialState,
    reducers:{
        registerArticle:(state, action:PayloadAction)=>{

        },
        getArticleList:()=>{},
        getArticleDetail:()=>{},
        updateArticle:()=>{},
        deleteArticle:()=>{}
    }
})
export const boardActions = {...boardSlice.actions}
export default boardSlice.reducer