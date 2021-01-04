import React from 'react'
import style from './Contacts.module.css';
import s from './../common/styles/container.module.css'


function Contacts() {
  return (
    <div className={`${style.contacts} ${s.container}`}>
      <h2 className={style.title}>Contacts</h2>
      <form className={style.contactsForm}>
        <input type='text'></input>
        <input type='text'></input>
        <textarea></textarea>
        <button>Отправить</button>
      </form>

    </div>
  );
}

export default Contacts;