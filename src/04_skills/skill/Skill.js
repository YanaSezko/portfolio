import React from 'react'
import style from './Skill.module.scss';


function Skill(props) {
  return (
    <div className={style.skill}>
      <div className={style.icon}></div>
      <div className={style.skillInfo}>
        <h4 className={style.skillTitle}>{props.title}</h4>
        <p className={style.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Skill;