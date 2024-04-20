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

export interface ResponseState {
  // eslint-disable-next-line
  res: any;
  loading: boolean;
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
