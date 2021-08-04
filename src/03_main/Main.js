import React from 'react'
import style from './Main.module.scss';
import s from './../common/styles/container.module.css'
//import  { useEffect, useState } from 'react'
import myPhoto from './../images/my-photo.jpeg'

function Main() {
 /*  let [days, setDays] = useState(null)
  
  useEffect(() => {
    fetch('https://my-plan-api-project.herokuapp.com/days')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDays(data);
        console.log(data);
      })
  }, []) */

  return (
    <section id='main'>
     {/*   {days &&
       <ul>
        {days.map((day,index) => {
         return <li key={index} className={style.clLi}>
           {day.name}
           </li>
        })}
      </ul>} */}
      <div className={`${style.main} ${s.container}`}>
        <div className={style.info}>
          <span>Hi There</span>
          <h1>I am <span>Yana Sezko</span></h1>
          <p>Frontend Developer</p>
        </div>
        <div className={style.photo}>
          <img src={myPhoto} alt='my-photo'></img>
        </div>
      </div>
    </section>
  );
}

export default Main;