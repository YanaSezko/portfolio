import React from 'react'
import style from './Hire.module.css';

function Hire() {
  return (
    <section id="hire">
      <div className={style.hire}>
        <h3 className={style.title}>Рассматриваю варианты <br/> удаленной работы</h3>
        <button>Нанять меня</button>
      </div>
    </section>
  );
} 

export default Hire;