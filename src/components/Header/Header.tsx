import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export default function Header(props: any) {
  return (
    <nav className={styles.header}>
      <Link className={styles.headerLink} to="/">
        Home
      </Link>
      <Link className={styles.headerLink} to="/search">
        Search
      </Link>
    </nav>
  )
}