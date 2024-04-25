import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseState } from "../types";

const initialState: ResponseState = {
  loading: false,
  response: null,
};

export const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    loader: (state, action: PayloadAction<boolean>) => {
      state.loading = action?.payload;
    },
    response: (state, action) => {
      state.response = action?.payload;
    },
  },
});

export const { loader, response } = responseSlice.actions;
export default responseSlice.reducer;
