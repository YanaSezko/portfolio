import React from 'react'
import Navigation from '../02_navigation/Navigation';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.header}>
    <Navigation />
    </div>
  );
}

export default Header;