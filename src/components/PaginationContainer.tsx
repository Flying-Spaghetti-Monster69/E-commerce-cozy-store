import { useLocation, useNavigate, useLoaderData } from "react-router-dom";
import { Meta } from "../types";

const PaginationContainer = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: string) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams}`);
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mb-16 flex justify-center sm:justify-end">
      <div className="join">
        <button
          className="btn btn-md join-item"
          onClick={() => handlePageChange((page - 1).toString())}
          disabled={page === 1 ? true : false}
        >
          prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber.toString())}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-md join-item"
          onClick={() => handlePageChange((page + 1).toString())}
          disabled={page === pageCount ? true : false}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
