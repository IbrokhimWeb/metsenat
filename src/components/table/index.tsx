import { Link } from "react-router-dom";
import {
  State,
  setPage,
  TableProps,
  setPageSize,
  formatNumber,
  status_color,
  CustomSponsor,
} from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../loader";
import { ChangeEvent } from "react";
import Pagination from "../pagination";

const Table = ({ columns }: TableProps) => {
  const dispatch = useDispatch();
  const { loading, response, page, page_size } = useSelector(
    ({ res, params }: State) => ({
      ...res,
      ...params,
    })
  );

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(+e.target.value));
  };

  const onPageChange = (selected: number) => {
    dispatch(setPage(selected));
  };

  return (
    <main className="w-full h-full">
      {loading ? (
        <Loader />
      ) : (
        <table className="w-full table-fixed">
          <thead className="w-full">
            <tr className="inline-flex px-5">
              {columns?.map(({ id, Colum }) => <Colum key={id} />)}
            </tr>
          </thead>
          <tbody className="w-full h-[60vh] overflow-y-auto">
            {response?.results?.map((sponsor: CustomSponsor, i: number) => (
              <tr
                key={sponsor?.id}
                className="inline-flex mt-3 bg-white border border-[#2e5bff1b] p-5 rounded-md"
              >
                <td className="w-[10px] mr-10">{i + 1}</td>
                <td className="w-[230px]">{sponsor?.full_name}</td>
                <td className="w-[200px] text-center medium-font">
                  {sponsor?.phone}
                </td>
                <td className="w-[150px] text-center">
                  {formatNumber(sponsor?.sum)}{" "}
                  <span className="text-[#B1B1B8]">UZS</span>
                </td>
                <td className="w-[150px] text-center">
                  {formatNumber(sponsor?.spent)}{" "}
                  <span className="text-[#B1B1B8]">UZS</span>
                </td>
                <td className="w-[150px] text-center">
                  {sponsor?.created_at?.split("T")[0]}
                </td>
                <td
                  style={{ color: status_color[sponsor?.get_status_display] }}
                  className="w-[150px] text-center"
                >
                  {sponsor?.get_status_display}
                </td>
                <td className="w-[70px] flex items-center justify-center">
                  <Link to={`/sponsor/${sponsor?.id}`}>
                    <img src="/images/view.svg" alt="viwe icon" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <section className="min-w-[1200px] flex items-center justify-between my-5">
        <p>
          {response?.count || 0} tadan {page} - {page_size} talik ko‘rsatilmoqda
        </p>
        <div className="flex items-center gap-5">
          <label className="flex items-center gap-3">
            Ko‘rsatish
            <select
              value={page_size}
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
          {/* <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={Math.floor((response?.count || 0) / page_size)}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={onPageChange}
            breakClassName="break"
            activeClassName="active"
            containerClassName="pagination"
          /> */}
          <Pagination
            onPageChange={onPageChange}
            totalCount={response?.count}
            pageSize={page_size}
            currentPage={page}
          />
        </div>
      </section>
    </main>
  );
};

export default Table;
