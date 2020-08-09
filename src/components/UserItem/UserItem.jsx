import React from 'react';

const UserItem = ({ href, title, icon }) => (
  <li className="nav-user__item">
    <a className="nav-user__link" href={href}>
      <img src={icon} alt="icon" />
      <span className="visually-hidden">{title}</span>
    </a>
  </li>
);

export default UserItem;
