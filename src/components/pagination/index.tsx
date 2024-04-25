import { FC } from "react";
import { DOTS, usePagination } from "../../utils";

interface PaginationProps {
  onPageChange: (e: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="pagination-container">
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: number | string) =>
        pageNumber === DOTS ? (
          <li key={pageNumber} className="pagination-item dots">
            &#8230;
          </li>
        ) : (
          <li
            key={pageNumber}
            className={`pagination-item ${
              pageNumber === currentPage ? "selected" : ""
            }`}
            onClick={() => onPageChange(+pageNumber)}
          >
            {pageNumber}
          </li>
        )
      )}
      <li
        className={`pagination-item ${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
