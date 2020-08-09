import React from 'react';

import { FavButton } from 'src/components';

import adidas from 'src/assets/images/adidas-m.jpg';

import './Product.scss';

const Product = () => (
  <div className="page-product">
    <section className="media">
      <div className="media__container">

        <div className="media__current">
          <img className="media__current-image" src={adidas} alt="" />
        </div>

        <ul className="media__list">
          <li className="media__list-item media__list-item--current">
            <button className="media__button" type="button">
              <img className="media__image" src={adidas} alt="" />
            </button>
          </li>
          <li className="media__list-item">
            <button className="media__button media__button--active" type="button">
              <img className="media__image" src={adidas} alt="" />
            </button>
          </li>
          <li className="media__list-item">
            <button className="media__button" type="button">
              <img className="media__image" src={adidas} alt="" />
            </button>
          </li>
          <li className="media__list-item">
            <button className="media__button" type="button">
              <img className="media__image" src={adidas} alt="" />
            </button>
          </li>
          <li className="media__list-item">
            <button className="media__button" type="button">
              <img className="media__image" src={adidas} alt="" />
            </button>
          </li>
          <li className="media__list-item">
            <button className="media__button" type="button">
              <img className="media__image" src={adidas} alt="" />
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section className="details">
      <div className="details__container">

        <div className="details__info">
          <h1 className="details__title">
            <span className="details__brand">adidas Origins</span>
            <span className="details__name">x atmos x Sean Wotherspoon Gel-Lyte III Multicolor</span>
          </h1>
          <span className="details__price">199.00 $</span>
        </div>

        <div className="tabs">
          <ul className="tabs__list">
            <li className="tabs__list-item">
              <button className="tabs__button tabs__button--active" type="button">
                Описание
              </button>
            </li>
            <li className="tabs__list-item">
              <button className="tabs__button" type="button">
                Информация
              </button>
            </li>
          </ul>

          <p className="tabs__description">
            adidas Originals - линейка классических кроссовок и одежды одного из мировых гигантов спортивной индустрии, в рамках которого знаменитый немецкий бренд работает с известными дизайнерами и магазинами, а также выпускают классические модели своего богатого архива. Кроссовки adidas Originals подходят как для занятий спортом, так и для повседневной жизни.
          </p>
        </div>

        <div className="details__size">
          <ul className="details__size-list">
            {[
              { id: 37, size: 37 },
              { id: 38, size: 38 },
              { id: 39, size: 37 },
              { id: 40, size: 40 },
              { id: 41, size: 41 },
              { id: 42, size: 42 },
              { id: 43, size: 43 },
              { id: 44, size: 44 },
              { id: 45, size: 45 },
            ].map((item) => (
              <li className="details__size-item">
                <label
                  className="details__size-label"
                  htmlFor={item.id}
                >
                  <input
                    className="details__size-radio visually-hidden"
                    type="radio"
                    name="size"
                    id={item.id}
                  />
                  <span className="details__size-text">
                    {item.size}
                    <span className="details__size-code">Eu</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <section className="bottom-bar">
          <FavButton />

          <button className="details__order-button" type="button">
            Добавить в корзину
          </button>
        </section>
      </div>
    </section>
  </div>
);

export default Product;
