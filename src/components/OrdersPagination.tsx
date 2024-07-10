import { useLocation, useNavigate, useLoaderData } from "react-router-dom";
import { Meta } from "../types";

const PaginationContainer = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  const { pageCount, page } = meta.pagination;

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

  const addPageButton = ({
    pageNumber,
    activeClass,
  }: {
    pageNumber: number;
    activeClass: boolean;
  }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
        onClick={() => handlePageChange(pageNumber.toString())}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons: JSX.Element[] = [];
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    if (page !== 2) {
      pageButtons.push(
        <button className="join-item btn btn-md" key="dots">
          ...
        </button>
      );
    }

    //current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
      pageButtons.push(
        <button className="join-item btn btn-md" key="dots">
          ...
        </button>
      );
    }

    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  return (
    <div className="my-16 flex justify-center sm:justify-end">
      <div className="join">
        <button
          className="btn btn-md join-item"
          onClick={() => handlePageChange((page - 1).toString())}
          disabled={page === 1 ? true : false}
        >
          prev
        </button>
        {renderPageButtons().map((button) => {
          return button;
        })}
        <button
          className="btn btn-md join-item"
          onClick={() =>
            handlePageChange(page + 1 > pageCount ? "1" : (page + 1).toString())
          }
          disabled={page === pageCount ? true : false}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
