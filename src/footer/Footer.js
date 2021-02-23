import React from 'react'
import style from './Footer.module.scss';

function Footer() {
  return (
    <div className={style.footer}>
      <h2 className={style.title}>Яна Сезько</h2>
      <ul className={style.socialIcons}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>© 2021 YanaSezko</p>
    </div>
  );
}

export default Footer;