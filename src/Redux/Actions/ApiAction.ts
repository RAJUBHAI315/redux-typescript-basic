import { Dispatch } from "redux";
import axios from "axios";

export enum ApiCallActionType {
  FETCH_LOADING_ACTION = "FETCH_LOADING",
  FETCH_SUCCESS_ACTION = "FETCH_SUCCESS",
  FETCH_FAILURE_ACTION = "FETCH_FAILURE",
}

export interface filteredDataType {
  id: number;
  title: string;
  info: string;
  price: number;
}

export interface rawDataApi {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ApiCallSucess {
  type: string;
  payload: filteredDataType[];
}

interface ApiCallFailure {
  type: string;
  payload: string;
}

export type ApiTypeAction = ApiCallSucess | ApiCallFailure;

export const ApiCallDispatch = () => {
  return async (dispatch: Dispatch<ApiTypeAction>) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      if (response.status === 200) {
        const rawData = response.data;

        const filteredData: filteredDataType[] = rawData.map(
          (item: rawDataApi) => {
            return {
              id: rawData.id,
              title: rawData.title,
              info: rawData.description,
              price: rawData.price,
            };
          }
        );

        dispatch({
          type: ApiCallActionType.FETCH_SUCCESS_ACTION,
          payload: filteredData,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ApiCallActionType.FETCH_FAILURE_ACTION,
        payload: error,
      });
    }
  };
};
