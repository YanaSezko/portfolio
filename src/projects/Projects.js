import React from 'react'
import style from './Projects.module.css';
import s from './../common/styles/container.module.css'
import Project from './project/Project';

function Projects() {
  return (
    <div className={`${style.projectsBlock} ${s.container}`}> 
    <h2 className={style.title}>Projects</h2>
   <div className={style.projects}>
  <Project  title={'SamuraiJS'} description={'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'}/>
  <Project  title={'TodoList'} description={'Donec quam felis, ultricies nec, pellentesque eu'}/>
  <Project  title={'Counter'} description={'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem, pellentesque eu, pretium quis, sem.'}/>
   </div>
   </div>
    );
}

export default Projects;