import { useState, useEffect } from "react";
// usepagination---------------------------------------------------------------------
export const usePagination = (
  initialPage: number,
  initialRowsPerPage: number
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [totalPages, setTotalPages] = useState(1);
  // function handle page click----------------------------------------------------------
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // function render pagination button-----------------------------------------------------------
  const renderPaginationButtons = () => {
    const pageButtons = [];

    // Determine the range of pages to show
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // If there are not enough pages to show 5, adjust the range
    if (endPage - startPage + 1 < 5) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + 4);
      } else {
        startPage = Math.max(1, endPage - 4);
      }
    }

    // Render the "previous" button if necessary
    if (startPage > 1) {
      pageButtons.push(
        <button
          key="prev"
          onClick={() => handlePageClick(currentPage - 1)}
          className="bg-table w-8 h-8"
        >
          {"<"}
        </button>
      );
    }

    // Render the page buttons
    for (let i = startPage; i <= endPage; i++) {
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

    // Render the "next" button if necessary
    if (endPage < totalPages) {
      pageButtons.push(
        <button
          key="next"
          onClick={() => handlePageClick(currentPage + 1)}
          className="bg-table w-8 h-8"
        >
          {">"}
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
