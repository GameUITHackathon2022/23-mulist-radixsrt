import styles from './index.module.css'
import clsx from 'clsx';
import partner1 from '~/pages/Home/Thanh/partner1.png'
import partner2 from '~/pages/Home/Thanh/partner2.png'
import partner3 from '~/pages/Home/Thanh/partner3.png'
const Donors = () => {
    return (
        <div className={clsx(styles["body-3"])}>
            <div className={clsx(styles["body-3-top"])}>
                Nhà đồng hành
            </div>
            <div className={clsx(styles["body-3-middle"])}>
            </div>
            <div className={clsx(styles["body-3-right"])} >
                <img src={partner1} alt="" className={clsx(styles["body-3-right-left-img"])} />
                <img src={partner2} alt="" className={clsx(styles["body-3-right-middle-img"])} />
                <img src={partner3} alt="" className={clsx(styles["body-3-right-right-img"])} />
            </div>
        </div >
    );
}

export default Donors