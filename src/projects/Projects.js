import React from 'react'
import style from './Projects.module.scss';
import s from './../common/styles/container.module.css'
import Project from './project/Project';
import Title from './../common/components/title/Title'
import todoImage from './../assets/image/logo512.png'
import socialImage from './../assets/image/logo512.png'
import counterImage from './../assets/image/logo512.png'

function Projects() {
  const social = {
    backgroundImage: `url(${socialImage})`,

  };
  const todolist = {
    backgroundImage: `url(${todoImage})`,

  };
  const counter = {
    backgroundImage: `url(${counterImage})`,

  };


  return (
    <section id='projects'>
      <div className={`${style.projectsBlock} ${s.container}`}>
        <Title title='Projects' />
        <div className={style.projects}>
          <Project style={social} title={'SamuraiJS'} description={'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'} />
          <Project style={todolist} title={'TodoList'} description={'Donec quam felis, ultricies nec, pellentesque eu'} />
          <Project style={counter} title={'Counter'} description={'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem, pellentesque eu, pretium quis, sem.'} />
        </div>
      </div>
    </section>
  );
}

export default Projects;