import { useState } from "react";

import "./Pagination.css";
export default function Pagination({
  total,
  resultsPerPage,
  onChange = () => {},
}) {
  const [currentPage, setCurrentPage] = useState(1);

  function changePage(page) {
    if (page <= 0) return;
    if (page > totalPages) return;

    setCurrentPage(page);

    onChange({
      offset: (page - 1) * resultsPerPage,
      limit: resultsPerPage,
    });
  }

  const slots = 10;
  const totalPages = Math.ceil(total / resultsPerPage);
  return (
    <nav className="pagination">
      <button className="pagination__button" onClick={() => changePage(1)}>
        &lt;&lt;
      </button>
      <button
        className="pagination__button"
        onClick={() => changePage(currentPage - 1)}
      >
        &lt;
      </button>
      <ul className="pagination__list">
        {Array(totalPages)
          .fill(0)
          .map((_, i) => {
            const page = i + 1;

            let start = currentPage - 1 - slots / 2;
            let end = currentPage - 1 + slots / 2;

            if (start < 0) {
              end -= start;
              start = 0;
            }

            if (end >= totalPages) {
              start -= end - totalPages + 1;
              end = total;
            }

            if (i < start || i > end) return;

            return (
              <li
                className={`pagination__list__item ${
                  page === currentPage && "pagination__list__item--selected"
                }`}
                onClick={() => changePage(page)}
                key={i}
              >
                {page}
              </li>
            );
          })}
      </ul>
      <button
        className="pagination__button"
        onClick={() => changePage(currentPage + 1)}
      >
        &gt;
      </button>
      <button
        className="pagination__button"
        onClick={() => changePage(totalPages)}
      >
        &gt;&gt;
      </button>
    </nav>
  );
}
