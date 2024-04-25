import { useEffect } from "react";
import { toast } from "react-toastify";

import Table from "../../components/table";
import { useDispatch, useSelector } from "react-redux";
import { $axios, State, loader, response } from "../../utils";

const Sponsors = () => {
  const dispatch = useDispatch();
  const params = useSelector((state: State) => state?.params);

  console.log("Sponsor", params);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        dispatch(loader(true));
        const resp = await $axios.get(`/sponsor-list/`, {
          signal: controller.signal,
          params,
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
  }, [dispatch, params]);

  const columns = [
    {
      id: 1,
      Colum: () => <th className="w-[10px] text-start mr-10">#</th>,
    },
    {
      id: 2,
      Colum: () => <th className="w-[230px] text-start">F.I.SH.</th>,
    },
    {
      id: 3,
      Colum: () => <th className="w-[200px] text-center">Tel.Raqami</th>,
    },
    {
      id: 4,
      Colum: () => <th className="w-[150px] text-center">Homiylik summasi</th>,
    },
    {
      id: 5,
      Colum: () => <th className="w-[150px] text-center">Sarflangan summa</th>,
    },
    {
      id: 6,
      Colum: () => <th className="w-[150px] text-center">Sana</th>,
    },
    {
      id: 7,
      Colum: () => <th className="w-[150px] text-center">Holati</th>,
    },
    {
      id: 8,
      Colum: () => <th className="w-[70px] text-center">Amallar</th>,
    },
  ];

  return (
    <main className="w-full h-full">
      <Table columns={columns} />
    </main>
  );
};

export default Sponsors;
