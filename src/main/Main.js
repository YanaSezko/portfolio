import React from 'react'
import style from './Main.module.css';
import s from './../common/styles/container.module.css'

function Main() {
  return (
    <section id='main'>
        <div className={`${style.main} ${s.container}`}>
          <div className={style.info}>
          <span>Hi There</span>
          <h1>I am <span>Yana Sezko</span></h1>
          <p>Frontend Developer</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </section>
  );
}

export default Main;