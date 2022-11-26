import styles from './index.module.css'
import clsx from 'clsx';
import google_logo from '~/assets/images/google.png'
import facebook_logo from '~/assets/images/facebook.png'
import logo from '~/assets/images/logo_black.png'
import { Fragment, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {loginStateContext} from '~/provider/LoginProvider'

const SignUp = ({ isSignUp, HandleSignUp}) => {
    const {loginState} = useContext(loginStateContext);
    const [message, setMessage] = useState('temp')
    const [confirmPassWord, setConfirmPassWord] = useState('')
    const [userInfor, setUserInfor] = useState({
        userName: '',
        passWord: '',
    })

    const toggleUserInfor = (userName, passWord) => {
        const newInfor = { userName: userName, passWord: passWord }
        setUserInfor(userInfor => newInfor)
    }

    const HandleChangeName = (event) => {
        event.preventDefault();
        toggleUserInfor(event.target.value, userInfor.passWord)
    }

    const HandleChangePassWord = (event) => {
        event.preventDefault();
        toggleUserInfor(userInfor.userName, event.target.value)
    }

    const HandleChangePassConfirmWord = (event) => {
        event.preventDefault();
        setConfirmPassWord(event.target.value);
    }
    
    const API = 'http://localhost:3002/api/user/signup'
    const { userName, passWord } = userInfor;

    const HandleSubmitSignUp = async (event) => {
        const newUser = {
            username: userInfor.userName,
            password: userInfor.passWord,
            avatar: "this is avatar",
            address: "i dont know"
        }
        event.preventDefault();
        const response = await fetch(API, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(newUser)
        });

        response.json().then((result) => {
            if (result.message.localeCompare("existed") === 0) {
                setMessage("Tai khoan da ton tai")
            } else {
                setMessage("Dang ki thanh cong")
            }
        })

        toggleUserInfor('', '');
    }

    return (
        <Fragment>
            {isSignUp === true && loginState === false &&
                <div className={clsx(styles["form-login"])}>
                    <img className={clsx(styles['logo'])} src={logo} alt="logo" />
                    <div onClick={() => { HandleSignUp(); }} className={clsx(styles['close-form'])}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <div className={clsx(styles["form-login-social"])}>
                        <div className={clsx(styles["form-login-social-item"])}>
                            <img src={google_logo} className={clsx(styles["form-login-logo"])} alt="login by google" />
                            <p>Đăng nhập với Google</p>
                        </div>
                        <div className={clsx(styles["form-login-social-item"])}>
                            <img src={facebook_logo} className={clsx(styles["form-login-logo"])} alt="login by google" />
                            <p>Đăng nhập với Facebook</p>
                        </div>
                    </div>
                    <div className={clsx(styles["line-cross"])}>Hoặc</div>
                    <form onSubmit={HandleSubmitSignUp}>
                        <div className={clsx(styles["form-login-default"])}>
                            <input value={userName} spellCheck='false' placeholder="Tên tài khoản" type="text" onChange={HandleChangeName} name='username' />
                            <input value={passWord} placeholder="Mật khẩu" type="password" onChange={HandleChangePassWord} name='password' />
                            <input value={confirmPassWord} placeholder="Xác nhận mật khẩu" type="password" onChange={HandleChangePassConfirmWord} name='confirmPassword' />
                        </div>
                        <label htmlFor="submit">Đăng kí</label>
                        <input disabled={!(confirmPassWord === passWord)} type='submit' className={clsx(styles['signup-btn'])} name='submit'/>
                        {message !== "temp" && <p> {message} </p>}
                    </form>
                </div>

            }
        </Fragment>);
}

export default SignUp;

