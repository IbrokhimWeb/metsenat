import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParamsState } from "../types";

const initialState: ParamsState = {
  search: null,
  ordering: null,
  page: 1,
  page_size: 10,
};

export const paramsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action?.payload;
    },
    setOrdering: (state, action: PayloadAction<string>) => {
      state.ordering = action?.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action?.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.page_size = action?.payload;
    },
  },
});

export const { setSearch, setPage, setPageSize } = paramsSlice.actions;
export default paramsSlice.reducer;
