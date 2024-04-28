export { $axios } from "./axios";
export { store } from "./store";
export { chart, status_color, DOTS } from "./static";

export { usePagination } from "./hooks/usePagination";
export { formatNumber, counterWithFormattedNumbers, range } from "./helpers";
export { setSearch, setPage, setPageSize } from "./store/paramsSlice";
export { loader, response } from "./store/responseSlice";

export type { State, AppDispatch } from "./store";
export type {
  LoginState,
  CustomWiget,
  CustomSponsor,
  MainChartProps,
  CustomWigetProps,
  CustomLayoutProps,
  PaginationProps,
  ParamsState,
  ResponseState,
  ColumsState,
  TableProps,
  PaginationState,
} from "./types";
