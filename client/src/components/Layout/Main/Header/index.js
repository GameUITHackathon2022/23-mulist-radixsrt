import { Link } from 'react-router-dom';
import styles from './header.module.css'
import logo from '~/pages/Home/Thanh/logo-img.png'
import clsx from 'clsx';
import { Fragment, useContext } from 'react';
import { loginStateContext } from '~/provider/LoginProvider'
import down from '~/assets/images/Dashboard/down.png'
import account from '~/assets/images/Dashboard/account.png'

const Header = () => {
    const { loginState, toggleLoginState } = useContext(loginStateContext);



    return (
        <Fragment>
            <div className={clsx(styles["navbar"])}>
                <Link to='/' className={clsx(styles["logo-name"])}>
                    <img src={logo} alt="" className={clsx(styles["logo-img"])} />
                    <p className={clsx(styles["name"])}>CollectMe</p>
                </Link>
                <div className={clsx(styles["menu"])}>
                    <div className={clsx(styles["menu-list"], styles["menu-list-1"])}>
                        Trang chủ
                    </div>
                    <div className={clsx(styles["menu-list"], styles["menu-list-2"])}>
                        Tin tức
                    </div>
                    <div className={clsx(styles["menu-list"], styles["menu-list-3"])}>
                        Sự kiện
                    </div>
                </div>
                {loginState !== -1 && <div className={clsx(styles["user"])}>
                    <img className={clsx(styles["user-account"])} src={account} alt='account' />
                    <img className={clsx(styles["user-down"])} src={down} alt='down' />
                    <div className={clsx(styles["user-elements"])}>
                        <Link to='/dashboard' className={clsx(styles["user-element"])}>Dashboard</Link>
                        <div className={clsx(styles["user-element"])}>Log out</div>
                    </div>
                </div>}
                {loginState === -1 && <Link to='/Login' className={clsx(styles["login-item"])}>
                    <button className={clsx(styles["login-btn"])} >Đăng nhập</button>
                </Link>}

            </div>


        </Fragment>
    );
}

export default Header;