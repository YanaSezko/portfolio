import React from 'react'
import style from './Skill.module.css';


function Skill(props) {
  return (
    <section id="skills">
    <div className={style.skill}>
      <div className={style.icon}></div>
      <h3>{props.title}</h3>
      <p className={style.description}>
        {props.description}
      </p>
    </div>
    </section>
  );
}

export default Skill;