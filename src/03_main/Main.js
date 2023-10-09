import React from 'react'
import styles from './Main.module.scss';
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
      <div className={`${styles.main} ${s.container}`}>
        <div className={styles.info}>
          <span>Hi There</span>
          <h1>I am <span>Яна Сезько</span></h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.photo}>
          <img src={myPhoto} alt='myPhoto'></img>
        </div>
      </div>
    </section>
  );
}

export default Main;