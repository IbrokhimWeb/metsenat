import { configureStore } from "@reduxjs/toolkit";
import paramsSlice from "./paramsSlice";
import responseSlice from "./responseSlice";

export const store = configureStore({
  reducer: {
    params: paramsSlice,
    res: responseSlice,
  },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
