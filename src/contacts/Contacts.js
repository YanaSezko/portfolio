import React from 'react'
import style from './Contacts.module.css';
import s from './../common/styles/container.module.css'
import Title from './../common/components/title/Title'
import Hire from './../toHire/Hire';

function Contacts() {
  return (
    <section id='contacts'>

      <div className={`${style.contacts} ${s.container}`}>
        <Title title='Contacts' />
        <div className={style.contactsInfo}>
          <Hire />
          <form className={style.contactsForm}>
            <input type='text'></input>
            <input type='text'></input>
            <textarea></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;