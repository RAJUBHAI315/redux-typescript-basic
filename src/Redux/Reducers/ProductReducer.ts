import { ProductOperationType, ProductType } from "../Actions/ProductAction";

const initialState = {
  count: 0,
};

export const ProductReducer = (state = initialState, action: ProductType) => {
  switch (action.type) {
    case ProductOperationType.ADD:
      return { ...state, count: state.count + action.payload };
    case ProductOperationType.DELETE:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
