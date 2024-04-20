//todo Import packages/types
import axios, { AxiosInstance } from "axios";

const ax: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY!,
});

ax.interceptors.request.use(
  // eslint-disable-next-line
  async (request: any) => ({
    ...request,
    headers: {
      ...request?.headers,
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  }),
  (error) => Promise.reject(error),
);

export const $axios = ax;
