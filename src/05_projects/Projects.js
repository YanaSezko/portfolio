import React from 'react'
import styles from './Projects.module.scss';
import s from './../common/styles/container.module.css'
import Project from './project/Project';
import Title from '../common/components/title/Title'
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
      <div className={`${styles.projectsBlock} ${s.container}`}>
        <Title title='Projects' />
        <div className={styles.projects}>
          <Project style={todolist} src={'https://eco-cos.com/'} title={'Eco_Cosmetics'} description={'Магазин на WordPress'} />
          <Project style={social} src={'https://yanasezko.github.io/OrganicSoap/'} title={'Organic_Soap'} description={'JavaScript 91.7%; CSS 5.3%; HTML 3.0%'} />
          <Project style={counter} src={'https://yanasezko.github.io/WeatherApp/'} title={'Weather_App'} description={'JavaScript 38.0%; HTML 31.6%; CSS 30.4%'} />
          <Project style={counter} src={'https://yanasezko.github.io/orthodox-alendar/'} title={'Orthodox_Calendar'} description={'HTML 46.1%; JavaScript 36.3%; CSS 17.6%'} />
        </div>
      </div>
    </section>
  );
}

export default Projects;