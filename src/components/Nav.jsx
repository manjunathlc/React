import React from 'react';
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div  >
        <div className={styles.navigationBar}>
        <img src="/images/brand_logo.png" alt="brand-logo" />
        <ul className={styles.navList}>
            <li href="#">Home</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button className={styles.navButton}>Login</button>
        </div>
      
    </div>
  )
}

export default Nav
