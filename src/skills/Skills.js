import React from 'react'
import style from './Skills.module.css';
import s from './../common/styles/container.module.css'
import Skill from './skill/Skill';

function Skills() {
  return (
    <div className={`${style.skillsBlock} ${s.container}`}> 
     <h2 className={style.title}>Skills</h2>
    <div className={style.skills}>
      <Skill title={'JS'} description={'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'}/>
      <Skill  title={'CSS'} description={'Donec quam felis, ultricies nec'}/>
      <Skill  title={'React'} description={'Donec quam felis, ultricies nec, pellentesque eu'}/>
    </div>
    </div>
    );
}

export default Skills;