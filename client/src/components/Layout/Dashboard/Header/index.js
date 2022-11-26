import { Fragment } from "react";
import { Link } from "react-router-dom";
import account from '~/assets/images/Dashboard/account.png'
import down from '~/assets/images/Dashboard/down.png'
import logo from '~/assets/images/Dashboard/logo.png'
import styles from './index.module.css'
import clsx from 'clsx';
const Header = () => {
    return (
        <Fragment>
            <div className={clsx(styles["navbar"])}>
                <Link to='/' className={clsx(styles["nav-logo"])}>
                    <img src={logo} alt='logo' className={clsx(styles["nav-logo__img"])} />
                    <span>CollectMe</span>
                </Link>
                <div className={clsx(styles["user"])}>
                    <img className={clsx(styles["user-account"])} src={account} alt='account' />
                    <img className={clsx(styles["user-down"])} src={down} alt='down' />
                    <div className={clsx(styles["user-elements"])}>
                        <Link to='/dashboard' className={clsx(styles["user-element"])}>Dashboard</Link>
                        <div className={clsx(styles["user-element"])}>Log out</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;