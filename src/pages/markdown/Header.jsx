import React from 'react';
import styles from'./styles.module.scss';

const Header = ({label , options}) => {
  return (
    <div className={styles.header}>
        {label} 
    </div>
  )
}

export default Header