import React from 'react'
import styles from './Skill.module.scss';


function Skill(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}></div>
      <div className={styles.skillInfo}>
        <h4 className={styles.skillTitle}>{props.title}</h4>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}

export default Skill;