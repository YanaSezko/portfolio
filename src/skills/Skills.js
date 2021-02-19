import React from 'react'
import style from './Skills.module.css';
import s from './../common/styles/container.module.css'
import Skill from './skill/Skill';
import Title from './../common/components/title/Title'

function Skills() {
  return (
    <div  id="skills" className={`${style.skillsBlock} ${s.container}`}>
      <Title title = 'Skills' /> 
    <div className={style.skills}>
    
      <Skill  title={'JS'} description={'Donec quam felis, ultricies nec'}/>
      <Skill  title={'CSS'} description={'Donec quam felis, ultricies nec'}/>
      <Skill  title={'React'} description={'Donec quam felis, ultricies nec, pellentesque eu'}/>
      <Skill  title={'React'} description={'Donec quam felis, ultricies nec, pellentesque eu'}/>
      <Skill  title={'JS'} description={'Donec quam felis, ultricies nec, pellentesque'}/>
      <Skill  title={'React'} description={'Donec quam felis, ultricies nec, pellentesque eu'}/>
    </div>
    </div>
    );
}

export default Skills;