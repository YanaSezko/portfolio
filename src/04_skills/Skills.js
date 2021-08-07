import React from 'react'
import styles from './Skills.module.scss';
import s from './../common/styles/container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title'

function Skills() {
  return (
    <div id="skills" className={`${styles.skillsBlock} ${s.container}`}>
      <Title title='Skills' />
      <div className={styles.skills}>
        <Skill title={'JS'} description={'Donec quam felis, ultricies nec'} />
        <Skill title={'CSS'} description={'Donec quam felis, ultricies nec'} />
        <Skill title={'React'} description={'Donec quam felis, ultricies nec, pellentesque eu'} />
        <Skill title={'Redux'} description={'Donec quam felis, ultricies nec, pellentesque eu'} />
        <Skill title={'TypeScript'} description={'Donec quam felis, ultricies nec, pellentesque'} />
        <Skill title={'GIT'} description={'Donec quam felis, ultricies nec, pellentesque eu'} />
      </div>
    </div>
  );
}

export default Skills;