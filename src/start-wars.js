import { useReducer, useEffect } from "react";
import axios from "axios";

const urlBase = "https://swapi.dev/api";

const initialState = {
  isFetching: true,
  error: "",
  data: [],
};


function apiReducer(state, action) {
  switch (action.type) {
    case "DATA_FETCH_START":
      return { ...state, isFetching: true };
    case "DATA_FETCH_FAILURE":
      return { ...state, isFetching: false, error: action.payload.response.data.detail };
    case "DATA_FETCH_SUCCESS":
      return { ...state, isFetching: false, data: action.payload };
    default:
      return state;
  }
}

export const useFetch = (pathcomplete, pagination = { current: 1, pageSize: 10 }) => {

  const [data, dispatch] = useReducer(apiReducer, {...initialState, pagination});

  useEffect(() => {
    dispatch({ type: "DATA_FETCH_START" });

    axios
      .get(`${urlBase}${pathcomplete}/?page=${pagination.current}`)
      .then((response) => {
        dispatch({ type: "DATA_FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "DATA_FETCH_FAILURE", payload: error });
      });
  }, [pathcomplete, pagination]);

  return data;
};
