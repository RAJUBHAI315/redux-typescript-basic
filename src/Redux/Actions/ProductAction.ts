import { Dispatch } from "redux";

export enum ProductOperationType {
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface AddAction {
  type: string;
  payload: number;
}

export interface DeleteAction {
  type: string;
  payload: number;
}

export type ProductType = AddAction | DeleteAction;

export const addDispatch = (value: number) => {
  return (dispatch: Dispatch<ProductType>) => {
    dispatch({
      type: ProductOperationType.ADD,
      payload: value,
    });
  };
};

export const deleteDispatch = (value: number) => {
  return (dispatch: Dispatch<ProductType>) => {
    dispatch({
      type: ProductOperationType.DELETE,
      payload: value,
    });
  };
};
