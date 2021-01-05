import React from 'react'
import style from './Hire.module.css';
import s from './../common/styles/container.module.css'


function Hire() {
  return (
    <div className={`${style.hire} ${s.container}`}>
      <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
      <button>Нанять меня</button>
    

    </div>
  );
}

export default Hire;