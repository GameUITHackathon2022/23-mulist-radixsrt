import styles from './index.module.css'
import clsx from 'clsx'
import hand_in_hand from '~/pages/icons/hand_in_hand.png'
import PlusGradient from '~/pages/icons/PlusGradient.png'
import check from '~/pages/icons/light_gray/light_grey/check.png'
import pending from '~/pages/icons/white/pending.png'
import down_black from '~/pages/icons/light_gray/light_grey/down_black.png'
import pen from '~/pages/icons/gray/grey/pen.png'
import cross2 from '~/pages/icons/cross.png'
import { Fragment } from 'react'

const DashboardPartner = () => {
    const HandleCreateCampain = () => {
        const element = document.getElementById("model-campaign-container")
        element.style.display = 'block'
    }

    return (
        <Fragment>
            <div id={styles["partner-container"]} className={clsx(styles["row"])}>
                <div className={clsx(styles["col"], styles["partner-infor"])}>
                    <div className={clsx(styles["col"])}>
                        <h2 className={clsx(styles["partner-name"])}>Partner A</h2>
                        <div className={clsx(styles["row"], styles["partner-infor-total"])}>
                            <img src={hand_in_hand} alt="total"
                                className={clsx(styles["col"], styles["total-icon"])} />
                            <p className={clsx(styles["partner-total"])}> 7234 </p>
                            <p className={clsx(styles["partner-total"])}> total donations</p>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles["partner-content"])}>
                    <div className={clsx(styles["partner-content-header"])}>
                        <div onClick={HandleCreateCampain} className={clsx(styles["partner-content-header-left"])}>
                            <button className={clsx(styles["create-campaign-btn"])}>
                                <img src={PlusGradient} alt="" />
                            </button>
                            <p className={clsx(styles["create-campaign-lable"])}>Tạo chiến dịch mới</p>
                        </div>
                        <div className={clsx(styles["partner-content-header-right"])}>
                            <div className={clsx(styles["partner-content-filter"])}>
                                <div className={clsx(styles["filter-btn"], styles["--filter-gray"])}>
                                    <img src={check} alt="" />
                                    <p className={clsx(styles["filter-lable"])}>Finished</p>
                                </div>
                                <div className={clsx(styles["filter-btn"], styles["--filter-white"])}>
                                    <img src={pending} alt="" />
                                    <p className={clsx(styles["filter-lable"])}>On going</p>
                                </div>
                                <div className={clsx(styles["filter-btn"], styles["--filter-gray"])}>
                                    <img src={cross2} alt="" />
                                    <p className={clsx(styles["filter-lable"])}>Cancelled</p>
                                </div>
                                <div className={clsx(styles["filter-btn"], styles["--filter-new"])}>
                                    <p className={clsx(styles["filter-lable"])}>Filter</p>
                                    <img src={down_black} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles["partner-content-body"])}>
                        {/* <h3 class="partner-content-null-label">
                    Bạn không có Chiến dịch nào đang diễn ra
                </h3> */}
                        <div className={clsx(styles["col "], styles["campaign-card"])}>
                            <div className={clsx(styles["campaign-header"])}>
                                <div>
                                    <h3 className={clsx(styles["campaign-title"])}>
                                        Campaign Title
                                    </h3>
                                    <p className={clsx(styles["date"])}>
                                        From 20/11/2022 to 20/12/2022
                                    </p>
                                </div>
                                <img className={clsx(styles["campaign-edit-icon"])} src={pen} alt="" />
                            </div>
                            <div className={clsx(styles["campaign-body"])}>
                                <p className={clsx(styles["campaign-desc"])}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                                <div className={clsx(styles["campaign-status"])}>
                                    <div className={clsx(styles["campaign-submissions"])}>
                                        <img className={clsx(styles["campaign-submission-img"])} src={require("src/pages/icons/gray/grey/hand_in_hand.png")} alt="" />
                                        <div className={clsx(styles["col"])}>
                                            <p className={clsx(styles["campaign-submission-total"])}>123</p>
                                            <p>submissions</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-approve"])}>
                                        <img className={clsx(styles["campaign-approve-img"])} src={require("src/pages/icons/gray/grey/Clothes.png")} alt="" />
                                        <div className={clsx(styles["col"])}>
                                            <p className={clsx(styles["campaign-approve-total"])}>123</p>
                                            <p>approved donations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(styles["campaign-status"])}>
                                    <div className={clsx(styles["campaign-timing"])}>
                                        <img className={clsx(styles["campaign-timming-img"])} src={require("src/pages/icons/gray/grey/pending.png")} alt="" />
                                        <p className={clsx(styles["campaign-left-days"])}>12</p>
                                        <p>days left</p>
                                    </div>
                                    <div className={clsx(styles["campaign-cancel-btn"])}>
                                        <p>Cancel Campaign</p>
                                        <img className={clsx(styles["campaign-cancel-img"])} src={require("src/pages/icons/cross.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles["col"], styles["campaign-card"])}>
                            <div className={clsx(styles["campaign-header"])}>
                                <div>
                                    <h3 className={clsx(styles["campaign-title"])}>
                                        Campaign Title
                                    </h3>
                                    <p className={clsx(styles["date"])}>
                                        From 20/11/2022 to 20/12/2022
                                    </p>
                                </div>
                                <img className={clsx(styles["campaign-edit-icon"])} src={require("src/pages/icons/gray/grey/pen.png")} alt="" />
                            </div>
                            <div className={clsx(styles["campaign-body"])}>
                                <p className={clsx(styles["campaign-desc"])}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                                <div className={clsx(styles["campaign-status"])}>
                                    <div className={clsx(styles["campaign-submissions"])}>
                                        <img className={clsx(styles["campaign-submission-img"])} src={require("src/pages/icons/gray/grey/hand_in_hand.png")} alt="" />
                                        <div className={clsx(styles["col"])}>
                                            <p className={clsx(styles["campaign-submission-total"])}>123</p>
                                            <p>submissions</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-approve"])}>
                                        <img className={clsx(styles["campaign-approve-img"])} src={require("src/pages/icons/gray/grey/Clothes.png")} alt="" />
                                        <div className={clsx(styles["col"])}>
                                            <p className={clsx(styles["campaign-approve-total"])}>123</p>
                                            <p>approved donations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(styles["campaign-status"])}>
                                    <div className={clsx(styles["campaign-timing"])}>
                                        <img className={clsx(styles["campaign-timming-img"])} src={require("src/pages/icons/gray/grey/pending.png")} alt="" />
                                        <p className={clsx(styles["campaign-left-days"])}>12</p>
                                        <p>days left</p>
                                    </div>
                                    <div className={clsx(styles["campaign-cancel-btn"])}>
                                        <p>Cancel Campaign</p>
                                        <img className={clsx(styles["campaign-cancel-img"])} src={require("src/pages/icons/cross.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles["col campaign-card"])}>
                            <div className={clsx(styles["campaign-header"])}>
                                <div>
                                    <h3 className={clsx(styles["campaign-title"])}>
                                        Campaign Title
                                    </h3>
                                    <p className={clsx(styles["date"])}>
                                        From 20/11/2022 to 20/12/2022
                                    </p>
                                </div>
                                <img className={clsx(styles["campaign-edit-icon"])} src={require("src/pages/icons/gray/grey/pen.png")} alt="" />
                            </div>
                            <div className={clsx(styles["campaign-body"])}>
                                <p className={clsx(styles["campaign-desc"])}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                                <div className={clsx(styles["campaign-status"])}>
                                    <div className={clsx(styles["campaign-submissions"])}>
                                        <img className={clsx(styles["campaign-submission-img"])} src={require("src/pages/icons/gray/grey/hand_in_hand.png")} alt="" />
                                        <div className={clsx(styles["col"])}>
                                            <p className={clsx(styles["campaign-submission-total"])}>123</p>
                                            <p>submissions</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["campaign-approve"])}>
                                        <img className={clsx(styles["campaign-approve-img"])} src={require("src/pages/icons/gray/grey/Clothes.png")} alt="" />
                                        <div className={clsx(styles["col"])}>
                                            <p className={clsx(styles["campaign-approve-total"])}>123</p>
                                            <p>approved donations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(styles["campaign-status"])}>
                                    <div className={clsx(styles["campaign-timing"])}>
                                        <img className={clsx(styles["campaign-timming-img"])} src={require("src/pages/icons/gray/grey/pending.png")} alt="" />
                                        <p className={clsx(styles["campaign-left-days"])}>12</p>
                                        <p>days left</p>
                                    </div>
                                    <div className={clsx(styles["campaign-cancel-btn"])}>
                                        <p>Cancel Campaign</p>
                                        <img className={clsx(styles["campaign-cancel-img"])} src={cross2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="model-campaign-container" className={styles["model-campaign-container"]}>
                <form action="#">
                    <label>Tên chiến dịch</label> <br />
                    <input type="text" placeholder="Chiến dịch giải cứu trái đất" />
                    <div className={styles["row-wrap"]}>
                        <div className={styles["col-wrap"]}>
                            <label>Thời gian bắt đầu</label><br />
                            <input type="date" placeholder="MM/DD/YYYY" />
                        </div>
                        <div className={styles["col-wrap"]}>
                            <label>Thời gian kết thúc</label><br />
                            <input type="date" placeholder="MM/DD/YYYY" />
                        </div>
                    </div>
                    <label>Địa điểm</label>
                    <div className={styles["address"]}>
                        <p className={styles["address-holder"]}>Tỉnh/ thành phố</p>
                        <img className={styles["address-picker-img"]} src={require("src/pages/icons/light_gray/light_grey/down_black.png")} alt="" />
                    </div>
                    <div className={styles["address"]}>
                        <p className={styles["address-holder"]}>Tỉnh/ thành phố</p>
                        <img className={styles["address-picker-img"]} src={require("src/pages/icons/light_gray/light_grey/down_black.png")} alt="" />
                    </div>
                    <label> Mô tả</label>
                    <input type="text" placeholder="Chiến dịch giải cứu trái đất" className={styles["desc-input"]} />
                    <div className={styles["model-campaign-footer"]}>
                        <button type="submit" className={styles["create-campaign-btn"]}> Submit </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default DashboardPartner