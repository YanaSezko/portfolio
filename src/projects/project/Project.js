import React from 'react'
import style from './Project.module.css';

function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.imageWrapper}>
        <a>Смотреть</a>
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Project;