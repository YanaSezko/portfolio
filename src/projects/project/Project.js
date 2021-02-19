import React from 'react'
import style from './Project.module.scss';

function Project(props) {
  return (
    <div className={style.project}>
      <div style={props.style} className={style.imageWrapper}>
        <a>Смотреть</a>
      </div>
      <div className={style.projectInfo}>
        <h4 className={style.projectTitle}>{props.title}</h4>
        <p className={style.projectDescription}>{props.description}</p>
      </div>
    </div>
  );
}

export default Project;