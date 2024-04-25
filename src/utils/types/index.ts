export interface CustomLayoutProps {
  component: () => JSX.Element;
}

export interface CustomWigetProps {
  res: {
    total_paid: number;
    total_need: number;
    total_must_pay: number;
  };
  index: number;
}

export interface CustomWiget {
  title: string;
  price: "total_paid" | "total_need" | "total_must_pay";
}

export interface MainChartProps {
  title: string;
  chart: {
    labels: Array<string>;
    series: Array<{
      name: string;
      type: string;
      fill: string;
      data: Array<number>;
    }>;
  };
}

export interface CustomSponsor {
  id: number;
  full_name: string;
  phone: string;
  sum: number;
  spent: number;
  get_status_display:
    | "Yangi"
    | "Moderatsiyada"
    | "Tasdiqlangan"
    | "Bekor qilingan";
  created_at: string;
}

export interface LoginState {
  username: string;
  password: string;
}

export interface ParamsState {
  search: string | null;
  ordering: string | null;
  page: number;
  page_size: number;
}

export interface ResponseState {
  loading: boolean;
  // eslint-disable-next-line
  response: any;
}

export interface ColumsState {
  id: number;
  Colum: () => JSX.Element;
}

export interface TableProps {
  columns: Array<ColumsState>;
}

export interface PaginationProps {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  siblingCount?: number;
}
