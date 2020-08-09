import React from 'react';

import { NavSite, NavUser } from 'src/components';

import logo from 'src/assets/icons/logo.svg';
import './AppHeader.scss';

const AppHeader = () => (
  <header className="app-header">
    <div className="app-header__container">
      <div className="app-header__wrapper">
        <a className="app-header__logo-link" href="/">
          <img
            className="app-header__logo-image"
            src={logo}
            alt="logo"
            width="70"
            height="70"
          />
        </a>
        <NavSite />
        <NavUser />
      </div>
    </div>
  </header>
);

export default AppHeader;
