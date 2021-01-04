import React from 'react'
import Navigation from '../navigation/Navigation';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
    <Navigation />
    </div>
  );
}

export default Header;