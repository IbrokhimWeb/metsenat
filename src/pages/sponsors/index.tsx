import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CustomSponsor } from "../../utils";
import { ChangeEvent, useState } from "react";
import { Loader } from "../../components/loader";
import { useFetch } from "../../utils/hooks/useFetch";
import { formatNumber, status_color } from "../../utils";

const Sponsors = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const url = `/sponsor-list/?search=&ordering=&page=${page}&page_size=${pageSize}`;
  const { loading, res } = useFetch(url, page);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(+e.target.value);
  };

  return (
    <main className="w-full h-full">
      <main className="w-full overflow-x-auto">
        <section className="min-w-[1200px] ">
          <div className="flex items-center justify-between px-5 mt-5 text-[#B1B1B8]">
            <h1 className="w-[10px] mr-10">#</h1>
            <h1 className="w-[230px]">F.I.SH.</h1>
            <h1 className="w-[200px] text-center">Tel.Raqami</h1>
            <h1 className="w-[150px] text-center">Homiylik summasi</h1>
            <h1 className="w-[150px] text-center">Sarflangan summa</h1>
            <h1 className="w-[150px] text-center">Sana</h1>
            <h1 className="w-[150px] text-center">Holati</h1>
            <h1 className="w-[100px] text-center">Amallar</h1>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="w-full h-[60vh] overflow-y-auto overflow-x-hidden">
              {res?.data?.results?.map((sponsor: CustomSponsor, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between mt-3 bg-white border border-[#2e5bff1b] p-5 rounded-md"
                >
                  <p className="w-[10px] mr-10">{i + 1}</p>
                  <p className="w-[230px]">{sponsor?.full_name}</p>
                  <p className="w-[200px] text-center medium-font">
                    {sponsor?.phone}
                  </p>
                  <p className="w-[150px] text-center">
                    {formatNumber(sponsor?.sum)}{" "}
                    <span className="text-[#B1B1B8]">UZS</span>
                  </p>
                  <p className="w-[150px] text-center">
                    {formatNumber(sponsor?.spent)}{" "}
                    <span className="text-[#B1B1B8]">UZS</span>
                  </p>
                  <p className="w-[150px] text-center">
                    {sponsor?.created_at?.split("T")[0]}
                  </p>
                  <p
                    style={{ color: status_color[sponsor?.get_status_display] }}
                    className="w-[150px] text-center"
                  >
                    {sponsor?.get_status_display}
                  </p>
                  <Link
                    to={`/sponsor/${sponsor?.id}`}
                    className="w-[100px] flex items-center justify-center"
                  >
                    <img src="/images/view.svg" alt="viwe icon" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="min-w-[1200px] flex items-center justify-between my-5">
          <p>
            <span>{res?.data?.count}</span> tadan <span>{page - pageSize}</span>
            {"-"}
            <span>{page * pageSize}</span> ko‘rsatilmoqda
          </p>
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-3">
              Ko‘rsatish
              <select
                value={pageSize}
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
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.floor(res?.data?.count / pageSize)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={onPageChange}
              breakClassName="break"
              activeClassName="active"
              containerClassName="pagination"
            />
          </div>
        </section>
      </main>
    </main>
  );
};

export default Sponsors;
