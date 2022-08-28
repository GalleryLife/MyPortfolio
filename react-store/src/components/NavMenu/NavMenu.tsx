import React from 'react';
import {Link} from 'react-router-dom'
import styles from './NavMenu.module.scss'

type PropsTyped = {
  rout: string
  text: string | React.ReactElement
}

const NavMenu = ({rout, text}: PropsTyped) => (
  <li className={styles.wrapper__link}>
    <Link to={rout} className={styles.link}>{text}</Link>
  </li>
);


export default NavMenu;
