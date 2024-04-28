import { configureStore } from "@reduxjs/toolkit";
import paramsSlice from "./paramsSlice";
import responseSlice from "./responseSlice";
import paginationSlice from "./paginationSlice";

export const store = configureStore({
  reducer: {
    res: responseSlice,
    params: paramsSlice,
    pagination: paginationSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
