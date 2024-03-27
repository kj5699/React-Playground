import React from 'react';
import styles from './styles.module.scss';

const Layout = ({ children , headingText} ) => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3 className={styles.heading}>{headingText}</h3>
        </div>
        <div className={styles.content}>
            {children}
        </div>

    </div>
  );
}

export default Layout