import styles from './index.module.css'
import clsx from 'clsx';
const Footer = () => {
    return (
        <footer className={clsx(styles["footer"])}>
            <div className={clsx(styles["about"])}>
                <div className={clsx(styles["about-us"])}>
                    <h1>Về chúng tôi</h1>
                    <p>CollectMe</p>
                </div>
                <div className={clsx(styles["classify"])}>
                    <h1>Phân loại</h1>
                    <a href='/'>Trang chủ</a>
                    <a href='/'>Tin tức</a>
                </div>
                <div className={clsx(styles["quick-access"])}>
                    <h1>Truy cập nhanh</h1>
                    <a href='/'>Về chúng tôi</a>
                    <a href='/'>Liên hệ</a>
                    <a href='/'>Đóng góp</a>
                    <a href='/'>Chính sách</a>
                </div>
            </div>
        </footer>
        )
}

export default Footer;