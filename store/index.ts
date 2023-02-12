import { HYDRATE, createWrapper, MakeStore } from "next-redux-wrapper";
import {combineReducers, configureStore, ThunkAction, Action, Reducer, AnyAction} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import thunkMiddleware from 'redux-thunk'
import boardReducer from './board'

const rootReducer = combineReducers({
    board:boardReducer,
})
export type RootState = ReturnType<typeof rootReducer>;
let initialRootState: RootState;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

// app구조 에서는 redux-wrapper x, devtools x, clientcompo에서만

// const reducer = (state:any, action:any) => {
//     if(action.type==HYDRATE){
//         if(state==initialRootState){
//             return {
//                 ...state,
//                 ...action.payload,
//             }
//         }
//         return state;
//     }
//     return rootReducer(state, action);
// }
// const initStore: MakeStore<any> = () => {
    const store = configureStore({
        reducer:rootReducer,
        devTools:true,
        middleware:[thunkMiddleware],
    });
    initialRootState = store.getState();
    // return store;
// }
// export const wrapper = createWrapper(initStore)
export default store