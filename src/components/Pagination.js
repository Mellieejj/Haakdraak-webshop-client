import React from "react";
import { useHistory } from "react-router-dom";
import "../style/components/pagination.scss";

export default function Pagination({ currentPage, totalProducts, setCurrentPage }) {
  const params = new URLSearchParams();
  const totalPages = totalProducts && Math.ceil(totalProducts / 16);
  const history = useHistory();

  const pages = Array.from(Array(totalPages), (x, i) => i + 1);

  const firstPage = () => {
    if (currentPage > 1) {
      params.append("page", 1);
      history.push({ search: params.toString() });
      setCurrentPage(1);
    }
  };

  const lastPage = () => {
    //   const productsList = categoryFilter === "all" ? products : filter;
    if (currentPage < totalPages) {
      params.append("page", totalPages);
      history.push({ search: params.toString() });
      setCurrentPage(totalPages);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      params.append("page", parseInt(currentPage) - 1);
      history.push({ search: params.toString() });
      setCurrentPage(parseInt(currentPage) - 1);
    }
  };

  const nextPage = () => {
    //   const productsList = categoryFilter === "all" ? products : filter;
    if (currentPage < totalPages) {
      params.append("page", parseInt(currentPage) + 1);
      history.push({ search: params.toString() });
      setCurrentPage(parseInt(currentPage) + 1);
    }
  };

  const pageClick = (page) => {
    params.append("page", parseInt(page));
    history.push({ search: params.toString() });
    setCurrentPage(parseInt(page));
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => firstPage()}
        aria-label="Eerste pagina"
        className="pagination__button pagination__button--arrow"
      >
        <i className="fas fa-angle-double-left fa-lg"></i>
      </button>
      <button
        className="pagination__button pagination__button--arrow"
        disabled={currentPage <= 1}
        onClick={() => prevPage()}
        aria-label="Vorige Pagina"
      >
        <i className="fas fa-angle-left fa-lg"></i>
      </button>

      {pages.map((page) => {
        const style = parseInt(page) === parseInt(currentPage) ? "active" : "";
        return (
          <button
            key={page}
            className={`pagination__button pagination__page ${style}`}
            onClick={() => pageClick(page)}
            aria-label={`pagina ${page}`}
          >
            {page}
          </button>
        );
      })}
      <button
        className="pagination__button pagination__button--arrow"
        disabled={currentPage >= totalPages}
        onClick={() => nextPage()}
        aria-label="Volgende pagina"
      >
        <i className="fas fa-angle-right fa-lg"></i>
      </button>
      <button
        className="pagination__button pagination__button--arrow"
        disabled={currentPage >= totalPages}
        onClick={() => lastPage()}
        aria-label="Laatste pagina"
      >
        <i className="fas fa-angle-double-right fa-lg"></i>
      </button>
    </div>
  );
}
