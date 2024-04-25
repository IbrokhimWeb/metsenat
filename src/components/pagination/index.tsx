import { FC } from "react";
import { useDispatch } from "react-redux";
import { DOTS, PaginationProps, setPage, usePagination } from "../../utils";

const Pagination: FC<PaginationProps> = (props) => {
  const { pageSize, totalCount, currentPage, siblingCount = 1 } = props;
  const dispatch = useDispatch();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) return null;

  const lastPage = paginationRange[paginationRange?.length - 1];

  const onNext = () => {
    dispatch(setPage(currentPage + 1));
  };

  const onPrevious = () => {
    dispatch(setPage(currentPage - 1));
  };

  const onPageChange = (selected: number) => {
    dispatch(setPage(selected));
  };

  return (
    <ul className="flex list-none select-none">
      <li
        className={`pagination ${currentPage <= 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange?.map((pageNumber: number | string, i: number) =>
        pageNumber === DOTS ? (
          <li key={i} className="pagination dots">
            &#8230;
          </li>
        ) : (
          <li
            key={i}
            className={`pagination ${
              pageNumber === currentPage ? "selected" : ""
            }`}
            onClick={() => onPageChange(+pageNumber)}
          >
            {pageNumber}
          </li>
        ),
      )}
      <li
        className={`pagination ${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
