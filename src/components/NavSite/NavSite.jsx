import React from 'react';

import './NavSite.scss';

const siteLinks = [
  { href: '/male', title: 'Мужчинам' },
  { href: '/female', title: 'Женщинам' },
  { href: '/brands', title: 'Бренды' },
  { href: '/sale', title: 'Скидки' },
];

const NavSite = () => (
  <nav className="page-header__nav-site nav-site">
    <ul className="nav-site__list">
      {siteLinks.map((item) => (
        <li key={item.href} className="nav-site__item">
          <a href={item.href} className="nav-site__link">{item.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavSite;
