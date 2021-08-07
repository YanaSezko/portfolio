import React from 'react'
import Title from './../common/components/title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.footerBlock}>
      <ul className={styles.socialIconsList}>
        <li>
          <a rel='noopener noreferrer' target='_blank' href={"https://github.com/YanaSezko"}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a rel='noopener noreferrer' target='_blank' href={"https://www.linkedin.com/in/yana-sezko-034611151/"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a rel='noopener noreferrer' target='_blank' href={"https://t.me/YanaSezko"}>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
        <li>
          <a rel='noopener noreferrer' target='_blank' href={"https://www.facebook.com/profile.php?id=100031114026734"}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>

      </ul>
      <Title title={'Yana Sezko'} />
    </div>
  );
}

export default Footer;