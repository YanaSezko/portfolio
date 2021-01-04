import React from 'react'
import style from './Navigation.module.css';

function Navigation() {
  return (
      <ul  className={style.navigation}>
        <li>Главная</li>
        <li>Скилы</li>
        <li>Проекты</li>
        <li>Контакты</li>
      </ul>
  );
}

export default Navigation;