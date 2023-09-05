import { ApiCallActionType, ApiTypeAction } from "../Actions/ApiAction";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const ApiReducer = (state = initialState, action: ApiTypeAction) => {
  switch (action.type) {
    case ApiCallActionType.FETCH_SUCCESS_ACTION:
      return { ...state, loading: false, data: action.payload };
    case ApiCallActionType.FETCH_FAILURE_ACTION:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
