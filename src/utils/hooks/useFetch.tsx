import { $axios } from "../axios";
import { toast } from "react-toastify";
import { ResponseState } from "../types";
import { useEffect, useState } from "react";

export const useFetch = (url: string, reload: number) => {
  const [state, setState] = useState<ResponseState>({
    res: null,
    loading: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setState((prev: ResponseState) => ({ ...prev, loading: true }));
        const res = await $axios.get(url, {
          signal: controller.signal,
        });

        setState((prev: ResponseState) => ({ ...prev, res }));

        //!
      } catch (err: unknown) {
        if (err instanceof Error) {
          const error = err as unknown as {
            response: { data: { detail: string } };
          };
          toast.error(error?.response?.data?.detail);
        }
      } finally {
        setState((prev: ResponseState) => ({ ...prev, loading: false }));
      }
    })();

    return () => controller.abort();
  }, [url, reload]);

  return { ...state };
};
