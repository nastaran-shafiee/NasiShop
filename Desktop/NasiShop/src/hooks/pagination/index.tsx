import { useState, useEffect } from "react";

export const usePagination = (
  initialPage: number,
  initialRowsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [totalPages, setTotalPages] = useState(1);
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={
            i === currentPage ? "bg-purple w-8 h-8" : "bg-table w-8 h-8"
          }
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  const paginationProps = {
    currentPage,
    rowsPerPage,
    setTotalPages,
    handlePageClick,
    renderPaginationButtons,
  };

  return paginationProps;
};
