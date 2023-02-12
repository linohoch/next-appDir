import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Article, Photo, Comments} from "../types";
import {getBoard} from "../pages/api/board";

// type articleState={
//     articleNo:number|null;
//     title:string|null;
//     contents:string|null;
//     writer:string|null;
//     fileUrl:string|null;
// }|null

interface boardState {
    loading: boolean,
    articleList: Article[],
    contents: Article,
    photo: Photo[],
    comment: Comments[],
    saved: boolean,
}
const initialState: boardState = {
    loading:false, articleList:[], saved:false, contents:null, photo:[],comment:[]
}
const fetchList = createAsyncThunk(
    `boardSlice/fetchList`,
    async ()=>{
        return await fetch(`${process.env.BASE_URL}/api/board/1?per-page=10`)
    }
)
const boardSlice = createSlice({
    name:'boardSlice',
    initialState:initialState,
    reducers:{
        registerArticle:(state, action:PayloadAction)=>{

        },
        setArticleList:(state,action:PayloadAction<Article[]>)=>{
           state.articleList=action.payload
        },
        setArticleDetail:(state,action)=>{
            state.contents=action.payload.article[0]
            state.photo=action.payload.photo
            state.comment=action.payload.comment

        },
        setArticlePhoto:(state,action:PayloadAction<Photo[]>)=>{
            state.photo=action.payload
        },
        setArticleComment:(state,action:PayloadAction<Comments[]>)=>{
            state.comment=action.payload
        },
        updateArticle:()=>{},
        deleteArticle:()=>{}
    },
    extraReducers: {
        [fetchList.pending.type]:(state, action)=>{
            state.loading=true
        },
        [fetchList.fulfilled.type]:(state, action:PayloadAction<Article[]>)=>{
            state.loading=false
            state.articleList=action.payload
        },
        [fetchList.rejected.type]:(state, action)=>{
            state.loading=false
            state.articleList=initialState.articleList
        },
}
})
export const boardActions = {...boardSlice.actions}
export default boardSlice.reducer