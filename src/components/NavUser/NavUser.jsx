import React from 'react';

import { UserItem } from 'src/components';

import {
  search,
  cart,
  heart,
  person,
} from 'src/assets/icons';
import './NavUser.scss';

const navUserList = [
  { href: '/favorites', title: 'Избранное', icon: heart },
  { href: '/cart', title: 'Корзина', icon: cart },
  { href: '/profile', title: 'Профиль', icon: person },
];

const NavUser = () => (
  <nav className="page-header__nav-user nav-user">
    <ul className="nav-user__list">
      <li className="nav-user__item">
        <button className="nav-user__link" type="button">
          <img src={search} alt="icon" />
          <span className="visually-hidden">Поиск</span>
        </button>
      </li>
      {navUserList && (
        navUserList.map((item) => (
          <UserItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        ))
      )}
    </ul>
  </nav>
);

export default NavUser;
