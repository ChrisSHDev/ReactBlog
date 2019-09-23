import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const Footer = ({onLoginClick, logged}) => (
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>Reactblog</Link>
    <div onClick={onLoginClick} className={cx('admin-login')}>
      {logged ?'Log-Out':'Admin Log-In'}
    </div>
  </footer>
);


export default Footer;