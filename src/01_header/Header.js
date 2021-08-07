import React from 'react'
import Navigation from '../02_navigation/Navigation';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.headerBlock}>
      <Navigation />
    </div>
  );
}

export default Header;