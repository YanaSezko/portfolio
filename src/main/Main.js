import React from 'react'
import style from './Main.module.css';
import s from './../common/styles/container.module.css'


function Main() {
  return (
    <div className={`${style.main} ${s.container}`}> 
      <div className={style.info}>
        <span>Hi There</span>
        <h1>I am Yana Sezko</h1>
        <p>Frontend Developer</p>
      </div>
      <div className={style.photo}></div>
    </div>
    );
}

export default Main;