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
          <a>
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a>
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a>
          <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
        <li>
          <a>
          <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
       
      </ul>
     <Title title={'Yana Sezko'} />
    </div>
  );
}

export default Footer;