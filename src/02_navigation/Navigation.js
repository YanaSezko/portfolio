import React from 'react'
import styles from './Navigation.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navigation() {
  return (<>
    <ul id='upp' className={styles.navigation}>
      <li><AnchorLink href="#main">main</AnchorLink></li>
      <li><AnchorLink href="#skills">skills</AnchorLink></li>
      <li><AnchorLink href="#projects">projects</AnchorLink></li>
      <li><AnchorLink href="#contacts">contacts</AnchorLink></li>
    </ul>
    <AnchorLink className={styles.btnUpp} href="#upp">up</AnchorLink>
  </>
  );
}

export default Navigation;