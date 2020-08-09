import React from 'react';

import './Pagination.scss';

const Pagination = () => (
  <div className="pagination">
    <div className="pagination__container">
      <a className="pagination__link pagination__link--back" href="/">back</a>
      <ul className="pagination__list">
        {Array(10).fill(0).map((_, index) => (
          <li className="pagination__item">
            <a className="pagination__link" href="/">{index + 1}</a>
          </li>
        ))}
      </ul>
      <a className="pagination__link pagination__link--forward" href="/">forward</a>
    </div>
  </div>
);

export default Pagination;
