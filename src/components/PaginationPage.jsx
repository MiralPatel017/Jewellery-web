import React, { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const PaginationPage = ({ totalPages = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 my-4">
      {/* Previous Button */}
      <button
        className={`text-[17px] ${currentPage === 1 ? "text-primary cursor-not-allowed" : "text-secondary"
          }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaLessThan />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          className={`text-[17px] ${page === currentPage
            ? "text-primary font-semibold"
            : "text-secondary"
            }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`text-[17px] ${currentPage === totalPages
          ? "text-primary cursor-not-allowed"
          : "text-secondary"
          }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaGreaterThan />
      </button>
    </div>
  );
};

export default PaginationPage;
