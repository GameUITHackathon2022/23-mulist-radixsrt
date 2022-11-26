import styles from './index.module.css'
import clsx from 'clsx';
import { Fragment } from 'react';
import Clothes from '~/assets/images/Home/Target/Clothes.png'
import Money from '~/assets/images/Home/Target/Money.png'
import Plastic from '~/assets/images/Home/Target/Plastic.png'
const Target = () => {
    return (
        <Fragment>
            <div className={clsx(styles["target"])}>
                <h1 className={clsx(styles["title"])}>
                    Bạn đồng hành cho một &nbsp;
                    <span className={clsx(styles["title--green"])}>
                        Trái Đất Xanh
                    </span>
                </h1>

                <p className={clsx(styles["text"])}>Bạn có thể đóng góp các thứ sau:</p>

                <div className={clsx(styles["targets"])}>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Plastic} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Rác thải nhựa</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Clothes} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Quần Áo</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className={clsx(styles["target-element"])}>
                        <img src={Money} className={clsx(styles["target-element__img"])} alt="element" />
                        <p className={clsx(styles["target-element__title"])}>Tiền</p>
                        <p className={clsx(styles["target-element__decription"])}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Target;  