import React from 'react'
import style from './Navigation.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navigation() {
  return (
    <ul className={style.navigation}>
      <li><AnchorLink href="#main">main</AnchorLink></li>
      <li><AnchorLink href="#skills">skills</AnchorLink></li>
      <li><AnchorLink href="#projects">projects</AnchorLink></li>
      <li><AnchorLink href="#hire">hire</AnchorLink></li>
      <li><AnchorLink href="#contacts">contacts</AnchorLink></li>
    </ul>

  );
}

export default Navigation;