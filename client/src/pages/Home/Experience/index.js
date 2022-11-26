import styles from './index.module.css'
import clsx from 'clsx';
import { Fragment } from 'react';
import avt from '~/assets/images/Home/Event/event1.jpg'

const Experience = () => {
    return (
        <Fragment>
            <div className={clsx(styles["experience"])}>
                <h1>Cảm nhận</h1>
                <div className={clsx(styles["experience-list"])}>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt'/>
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Xuân Hiếu</h2>
                        <p className={clsx(styles["experince-item__des"])}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                    </div>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt'/>
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Xuân Hiếu</h2>
                        <p className={clsx(styles["experince-item__des"])}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                    </div>
                    <div className={clsx(styles["experience-item"])}>
                        <img className={clsx(styles["experience-item__avt"])} src={avt} alt='avt'/>
                        <h2 className={clsx(styles["experience-item__name"])}>Nguyễn Xuân Hiếu</h2>
                        <p className={clsx(styles["experince-item__des"])}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience;