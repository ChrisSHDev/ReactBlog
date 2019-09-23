import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({
    visible, password, error, onCancel, onLogin, onChange, onKeyPress
}) => (
    <ModalWrapper visible={visible}>
        <div className={cx('form')}>
            <div onClick={onCancel} className={cx('close')}>&times;</div>
            <div className={cx('title')}>Log-In</div>
            <div className={cx('description')}>Pleaes enter Admin Password</div>
                <input autoFocus type="password" placeholder="Enter password" value={password} onChange={onChange} onKeyPress={onKeyPress}/>
                { error && <div className={cx('error')}> Log In Failed!!</div>}
                <div className={cx('login')} onClick={onLogin}>Log-In</div>

        </div>
    </ModalWrapper>
);

export default LoginModal;