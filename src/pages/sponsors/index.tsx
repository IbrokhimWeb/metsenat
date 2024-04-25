import { ChangeEvent, useEffect, useMemo } from "react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import {
  $axios,
  CustomSponsor,
  State,
  formatNumber,
  loader,
  response,
  setPageSize,
  status_color,
} from "../../utils";
import { Loader } from "../../components/loader";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination";

const Sponsors = () => {
  const dispatch = useDispatch();

  const {
    params,
    res: { loading, response: res },
  } = useSelector(({ res, params }: State) => ({ res, params }));

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

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(+e.target.value));
  };

  const startCount = useMemo(
    (): number => +(params?.page * params?.page_size - params?.page_size + 1),
    [params?.page, params?.page_size]
  );

  const endCount = useMemo(
    (): number => +(startCount - 1 + res?.results?.length),
    [res?.results?.length, startCount]
  );

  if (loading) return <Loader />;

  return (
    <main className="w-full h-full inline-block overflow-x-auto overflow-y-hidden">
      <table className="h-[92%] overflow-x-hidden">
        <thead className="w-full">
          <tr className="flex items-center px-5">
            <th className="w-[15px] text-center mr-10">#</th>
            <th className="min-w-[230px] flex-1 text-start">F.I.SH.</th>
            <th className="min-w-[200px] flex-1 text-center">Tel.Raqami</th>
            <th className="min-w-[150px] flex-1 text-center">
              Homiylik summasi
            </th>
            <th className="min-w-[150px] flex-1 text-center">
              Sarflangan summa
            </th>
            <th className="min-w-[150px] flex-1 text-center">Sana</th>
            <th className="min-w-[150px] flex-1 text-center">Holati</th>
            <th className="min-w-[70px] flex-1 text-center">Amallar</th>
          </tr>
        </thead>
        <tbody className="w-full block h-full overflow-y-auto">
          {res?.results?.map((sponsor: CustomSponsor, i: number) => (
            <tr
              key={i}
              className="w-full inline-flex mt-3 bg-white border border-[#2e5bff1b] p-5 rounded-md"
            >
              <td className="w-[15px] text-center mr-10">{i + startCount}</td>
              <td className="min-w-[230px] flex-1">{sponsor?.full_name}</td>
              <td className="min-w-[200px] flex-1 text-center medium-font">
                {sponsor?.phone}
              </td>
              <td className="min-w-[150px] flex-1 text-center">
                {formatNumber(sponsor?.sum)}{" "}
                <span className="text-[#B1B1B8]">UZS</span>
              </td>
              <td className="min-w-[150px] flex-1 text-center">
                {formatNumber(sponsor?.spent)}{" "}
                <span className="text-[#B1B1B8]">UZS</span>
              </td>
              <td className="min-w-[150px] flex-1 text-center">
                {sponsor?.created_at?.split("T")[0]}
              </td>
              <td
                style={{
                  color: status_color[sponsor?.get_status_display],
                }}
                className="min-w-[150px] flex-1 text-center"
              >
                {sponsor?.get_status_display}
              </td>
              <td className="min-w-[70px] flex-1 flex items-center justify-center">
                <Link to={`/sponsor/${sponsor?.id}`}>
                  <img
                    src="/images/view.svg"
                    alt="viwe icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-[8%] flex items-center justify-between">
        <p className="min-w-[300px]">
          {res?.count || 0} tadan {startCount}-{endCount} ko‘rsatilmoqda
        </p>
        <div className="flex items-center justify-end gap-5">
          <label className="flex items-center gap-3">
            Ko‘rsatish
            <select
              value={params?.page_size}
              onChange={handleSelect}
              className="border rounded-md px-2 py-1"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </label>
          <Pagination
            key={Math.random()}
            totalCount={res?.count}
            pageSize={params?.page_size}
            currentPage={params?.page}
          />
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
