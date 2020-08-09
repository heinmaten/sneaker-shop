import React from 'react';

import adidas from 'src/assets/images/adidas-s.jpg';
import './Catalog.scss';

const Catalog = () => (
  <div className="page-catalog">
    <section className="options">
      <div className="options__wrapper">
        <div className="options__filters">
          filters
        </div>

        <div className="options__sorting">
          sorting
        </div>
      </div>
    </section>

    <section className="product-cards">
      <ul className="product-cards__list">
        {Array(13).fill(0).map(() => (
          <li className="product-cards__item">

            <a className="product-cards__item-link" href="/">
              <img className="product-cards__item-image" src={adidas} alt="" width="248" />

              <div className="product-cards__item-info">
                <h2 className="product-cards__item-title">
                  <span className="product-cards__item-brand">adidas Origins</span>
                  <span className="product-cards__item-name">Stan Smith</span>
                </h2>

                <span className="product-cards__item-price">199 $</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Catalog;
