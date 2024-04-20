//todo Import packages
import { useEffect, useState } from "react";
import { $axios } from "../axios";

interface CustomState {
  // eslint-disable-next-line
  res: any;
  loading: boolean;
}

export const useFetch = (url: string, reload: number) => {
  const [state, setState] = useState<CustomState>({
    res: null,
    loading: false,
  });

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setState((prev: CustomState) => ({ ...prev, loading: true }));
        const res = await $axios.get(url, {
          signal: controller.signal,
        });

        setState((prev: CustomState) => ({ ...prev, res }));

        //!
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setState((prev: CustomState) => ({ ...prev, loading: false }));
      }
    })();

    return () => controller.abort();
  }, [url, reload]);

  return { ...state };
};
