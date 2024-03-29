import React from 'react';
import styles from './styles.module.scss';

const Layout = ({ children , headingText} ) => {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.heading}>{headingText}</h1>
        </header>
        <main className={styles.content}>
            {children}
        </main>

    </div>
  );
}

export default Layout