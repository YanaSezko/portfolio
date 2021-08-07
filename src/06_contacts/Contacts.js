import React from 'react'
import styles from './Contacts.module.scss';
import s from './../common/styles/container.module.css'
import Title from '../common/components/title/Title'

function Contacts() {
  return (
    <section id='contacts' className={`${styles.contactsBlock} ${s.container}`}>
      <Title title='Contacts' />
      <div className={styles.contacts}>
        <div>
          <h3>Call me:</h3>
          <span> &#128383;+38(066)972-18-78</span><br />
        </div>
        <form method="POST" action="#" id="form" className={styles.contactsForm}>
          <input name="name" className={styles.req} type='text' placeholder={"Your Name"}></input>
          <input name="email" className={styles.req} type='text' placeholder={"Your Email"}></input>
          <textarea name="message" className={styles.req} placeholder={"Your Message"}></textarea>
          <button className={styles.sendBtn} type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;