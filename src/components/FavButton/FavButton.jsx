import React from 'react';

import './FavButton.scss';

const FavButton = () => (
  <button className="favorite-button" type="button">
    <span className="visually-hidden">Добавить в избранное</span>

    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4599 3.39979L11.0029 3.87117L11.5467 3.40061C12.544 2.53766 13.8644 2.00659 15.3351 2.00659C18.4638 2.00659 21 4.44078 21 7.44349V7.93628C21 8.26994 20.9748 8.58297 20.9102 8.87612C20.3096 11.5988 18.5657 13.9244 16.5156 15.8515C14.6503 17.6049 12.5815 18.9828 11 20C9.41875 18.9827 7.34998 17.6032 5.48468 15.8484C3.43445 13.9197 1.69039 11.5923 1.08989 8.86952C1.02524 8.57637 1 8.26334 1 7.92969V7.43691C1 4.43418 3.53625 2 6.66486 2C8.13878 2 9.46189 2.53344 10.4599 3.39979Z" stroke="black" />
    </svg>
  </button>
);

export default FavButton;
