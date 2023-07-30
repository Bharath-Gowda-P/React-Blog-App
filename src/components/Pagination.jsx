import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-t-2 border-t-gray-300  fixed bottom-0 inset-x-0 bg-white">
      <div className="flex justify-between items-center w-screen max-w-2xl mx-auto py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
