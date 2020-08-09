import React from 'react';

import adidas from 'src/assets/images/adidas-s.jpg';
import { heart } from 'src/assets/icons';
import './Product.scss';

const Product = () => (
  <section className="product">
    <ul className="product__list">
      {Array(13).fill(0).map(() => (
        <li className="product__item">
          {/* <button className="product__favorite-button" type="button">
            <img className="product__favorite-icon" src={heart} alt="icon" />
            <span className="visually-hidden">Добавить в избранное</span>
          </button> */}

          <a className="product__link" href="/">
            <img className="product__image" src={adidas} alt="" width="248" />

            <div className="product__info">
              <h2 className="product__title">
                <span className="product__brand">adidas Origins</span>
                <span className="product__name">Stan Smith</span>
              </h2>

              <span className="product__price">199 $</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Product;
