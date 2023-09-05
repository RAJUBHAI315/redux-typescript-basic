import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { ApiReducer } from "./ApiReducer";

export const rootReducer = combineReducers({
  product: ProductReducer,
  api: ApiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
