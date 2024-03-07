import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import DetailsSlice from "./DetailsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const reducers = combineReducers({
    details: DetailsSlice
})
const persReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer: persReducer
});