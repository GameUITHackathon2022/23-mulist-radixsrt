import { Fragment, useState, useContext } from "react"
import styles from './index.module.css'
import clsx from 'clsx';
import { Link, redirect, useNavigate } from "react-router-dom";
import { loginStateContext } from '~/provider/LoginProvider'

const Login = () => {
    const { loginState, toggleLoginState } = useContext(loginStateContext);
    const [message, setMessage] = useState('temp')
    const API = 'http://localhost:3001/api/user/login'
    const [userInfor, setUserInfor] = useState({
        userName: '',
        passWord: '',
    })

    const navigate = useNavigate()

  
    const { userName, passWord } = userInfor;


    const HandleSubmitLoginForm = async (event) => {
        event.preventDefault();
        const user = {
            email: userInfor.userName,
            password: userInfor.passWord
        }
        console.log(user);
        const response = await fetch(API, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(user)
        });

        response.json().then((result) => {
            console.log(result);
            toggleLoginState(result.user.role)

            if (result.success === true) {
                console.log("sucessfully");
                toggleLoginState(result.user.role)
                navigate('/')
            } else {
                setMessage("Dang nhap that bai")
            }
        })
        toggleUserInfor('', '')
    }

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

    return (
        <Fragment>
            <div className={clsx(styles["container"])} id="container">
                <div className={clsx(styles["form-container"], styles["sign-in-container"])}>
                    <form onSubmit={HandleSubmitLoginForm}>
                        <h1>????ng nh???p</h1>
                        <input value={userName} spellCheck='false' placeholder="Email" type="Email" onChange={HandleChangeName} name='username' required />
                        <input value={passWord} placeholder="M???t kh???u" type="password" onChange={HandleChangePassWord} name='password' required />
                        <Link to='/'>Qu??n m???t kh???u</Link>
                        <button type="submit">????ng nh???p</button>
                    </form>
                </div>
                <div className={clsx(styles["overlay-container"])}>
                    <div className={clsx(styles["overlay"])}>
                        <div className={clsx(styles["overlay-panel"], styles["overlay-right"])}>
                            <h1>Ch??o b???n,</h1>
                            <p>C??ng CollectMe chung tay t???o n??n m???t tr??i ?????t xanh nh??!</p>
                            <Link to='/SignUp'>
                                <button className={clsx(styles["ghost"])} id="signUp">????ng k??</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Login