import React from 'react'
import styles from './Project.module.scss';

function Project(props) {
  return (
    <div className={styles.project}>
      <div style={props.style} className={styles.imageWrapper}>
        <a rel='noopener noreferrer' target='_blank' href={props.src}>watch</a>
      </div>
      <div className={styles.projectInfo}>
        <h4 className={styles.projectTitle}>{props.title}</h4>
        <p className={styles.projectDescription}>{props.description}</p>
      </div>
    </div>
  );
}

export default Project;