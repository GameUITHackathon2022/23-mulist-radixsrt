import styles from './index.module.css'
import clsx from 'clsx';

import body1 from '~/pages/Home/Thanh/body-1-right.png'
import { Link } from 'react-router-dom';
const Intro = () => {
    return (
        <div className={clsx(styles["body-1"])}>
            <div className={clsx(styles["body-1-left"])}>
                <div className={clsx(styles["body-1-slogan"])}>
                    <p className={clsx(styles["body-1-slogan-text"])}>Slogan</p>
                </div>
                <div className={clsx(styles["body-1-get-started"])}>
                    <Link to ='/SignUp' className={clsx(styles["get-started"])} role="get-started">Tham gia</Link>
                </div>
            </div>
            <div className={clsx(styles["body-1-right"])}>
                <img src={body1} alt="" className={clsx(styles["body-1-right-png"])} />
            </div>
        </div>
    )
}
export default Intro