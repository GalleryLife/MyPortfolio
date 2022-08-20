import React from 'react';
import styles from './NavMenu.module.scss'
import {Link} from 'react-router-dom'

function NavMenu() {
  return (
    <div>
      <header>
        <nav>
          <ul className={styles.wrapperItems}>
            <li className={styles.item}>
              <Link to='/profile' className={styles.link}>Profile</Link></li>
            <li className={styles.item}>
              <Link to='/' className={styles.link}>Shop</Link></li>
            <li className={styles.item}>
              <Link to='/about' className={styles.link}>About Us</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavMenu;
