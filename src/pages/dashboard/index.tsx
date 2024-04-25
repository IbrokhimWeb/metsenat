import { $axios, State, chart, loader, response } from "../../utils";
import Widget from "../../components/widget";
import { Loader } from "../../components/loader";
import { MainChart } from "../../components/charts/main";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Deshboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        dispatch(loader(true));
        const resp = await $axios.get(`/dashboard/`, {
          signal: controller.signal,
        });
        dispatch(response(resp?.data));
      } catch (err: unknown) {
        if (err instanceof Error) {
          const error = err as unknown as {
            response: { data: { detail: string } };
          };
          toast.error(error?.response?.data?.detail);
        }
      } finally {
        dispatch(loader(false));
      }
    })();

    return () => controller.abort();
  }, [dispatch]);

  const { loading, response: res } = useSelector((state: State) => state?.res);

  if (loading) return <Loader />;

  return (
    <main className="w-full h-full overflow-y-auto">
      <div className="w-full grid grid-cols-3 gap-5 max-xl:gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {[0, 1, 2]?.map((e, i) => <Widget key={e} index={i} res={res} />)}
      </div>
      <MainChart title="Homiylar va talabalar soni" chart={chart} />
    </main>
  );
};

export default Deshboard;
