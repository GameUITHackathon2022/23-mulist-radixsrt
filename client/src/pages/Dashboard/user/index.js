import { Fragment, useEffect, useState, useRef } from "react"
import styles from './index.module.css'
import clsx from 'clsx'
import search from '~/assets/images/Dashboard/search.png'
import plastic from '~/assets/images/Dashboard/Plastic.png'
import close from '~/assets/images/Dashboard/close.png'
import plus from '~/assets/images/Dashboard/plus.png'
import confetti from '~/assets/images/Dashboard/confetti.png'
import wreath from '~/assets/images/Dashboard/wreath.png'
const DashboardUser = () => {
    const API = 'https://6381f08c53081dd5498bea48.mockapi.io/api/v1/campaign'
    const API_SUBMIT_CONTRIBUTE = 'http://localhost:3001/api/contributor/new-bill'
    const [inforCampain, setInforCampain] = useState([])
    const [chooseCampain, setChooseCampain] = useState(null)
    const ref = useRef(null)
    const trashType = ['Rác thải Nhựa', 'Vải thừa', 'Lon nước']

    const handleSelectCampain = async (ev) => {
        const campainId = ev.currentTarget.getAttribute("data-campain")
        if (chooseCampain == null) {
            console.log(inforCampain[campainId]);
            setChooseCampain(inforCampain[campainId])
        }
        const element = document.getElementById('campaign-list')
        element.style.display = 'none'
    }

    const handleRemoveCampain = async (ev) => {
        setChooseCampain(null)
        const element = document.getElementById('campaign-list')
        element.style.display = 'none'
    }

    const handleClickAddTrash = (ev) => {
        const element = document.getElementById('trash-list')
        element.style.display = 'block'
    }

    const HandleAddDonation = (ev) => {
        const element = document.getElementById('campain-form')
        element.style.display = 'flex'
    }

    const handleCloseCampainForm = (ev) => {
        const element = document.getElementById('campain-form')
        element.style.display = 'none'

    }

    const handleSubmitFormCompain = async () => {
        const rubbish = [{ category: 'plastic', weight: document.getElementById("trash-quantity-0").value }, { category: 'paper', weight: document.getElementById("trash-quantity-1").value }, { category: 'cloth', weight: document.getElementById("trash-quantity-2").value }]
        const contribute = {
            campainId: chooseCampain.id,
            rubbish: rubbish
        }

        const response = await fetch(API_SUBMIT_CONTRIBUTE, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(contribute)
        });

        response.json().then((data)=>{
            console.log(data);
        })
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(API, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer'
            })

            return response.json()
        }

        getData().then(data => {
            setInforCampain(data)
        })
    }, [])

    const display = (ev) => {
        console.log(ev);
        const element = document.getElementById('campaign-list')
        element.style.display = 'block'
    }

    return (
        <Fragment>
            <div className={clsx(styles["dashboard"])}>
                <div className={clsx(styles["content"])}>
                    <p className={clsx(styles["content-name"])}>Nguyễn Văn An</p>
                    <div className={clsx(styles["achivement"])}>
                        <img className={clsx(styles["achivement-bg"])} src={confetti} alt='' />
                        <img className={clsx(styles["achivement-main"])} src={wreath} alt='' />
                    </div>
                </div>
                <div className={clsx(styles["details"])}>
                    <div className={clsx(styles["details-header"])}>
                        <div onClick={HandleAddDonation} className={clsx(styles["add-donations"])}>
                            <p className={clsx(styles["add-donations-plus"])}>+</p>
                            <p className={clsx(styles["add-donations-text"])}>Tạo quyên góp mới</p>
                        </div>
                        <div className={clsx(styles["details-filter"])}>
                            <div className={clsx(styles["filter-by"])}>Approved</div>
                            <div className={clsx(styles["filter-by"])}>Pending</div>
                            <div className={clsx(styles["filter-by"])}>Denied</div>
                        </div>
                    </div>
                    <div className={clsx(styles["details-content"])}>
                        <div id="campain-form" className={clsx(styles["campaign-form"])}>
                            <div className={clsx(styles["form-search"])}>
                                <img className={clsx(styles["form-search-icon"])} src={search} alt='' />
                                <input onFocus={display} className={clsx(styles["form-search-input"])} placeholder="Tìm kiếm chiến dịch" />
                            </div>
                            <div onClick={handleCloseCampainForm} id='close-campain-form' className={clsx(styles["wrap-img"], styles["close-form"])}>
                                <img src={close} alt='' />
                            </div>
                            <ul className={clsx(styles["campaign-list"])} id='campaign-list'>
                                {inforCampain.map((item, index) => {
                                    return <li ref={ref} data-campain={item.id} onClick={handleSelectCampain} key={index} className={clsx(styles["campaign-item"])}>
                                        <div className={clsx(styles["campaign-item__location"])}>
                                            <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                            <div className={clsx(styles["campaign-item__text"])}>
                                                <p className={clsx(styles["campaign-item__title"])}>{item.title} </p>
                                                <p className={clsx(styles["campaign-item__title"])}>{item.location} </p>
                                            </div>
                                        </div>
                                        <div className={clsx(styles["campaign-item__date"])}>
                                            <p className={clsx(styles["campaign-item__date-start"])}>{item["Date start"]}</p>
                                            <p className={clsx(styles["campaign-item__date-end"])}>{item["Date end"]}</p>
                                        </div>
                                    </li>;
                                })}
                            </ul>
                            {chooseCampain != null &&
                                <div className={clsx(styles["campaign-item--selected-wrap"])}>

                                    <div ref={ref} onClick={handleSelectCampain} className={clsx(styles["campaign-item"], styles["campaign-item--selected"])}>
                                        <div className={clsx(styles["campaign-item__location"])}>
                                            <img src={plastic} className={clsx(styles["campaign-item__icon"])} alt='' />
                                            <div className={clsx(styles["campaign-item__text"])}>
                                                <p className={clsx(styles["campaign-item__title"])}>{chooseCampain.title} </p>
                                                <p className={clsx(styles["campaign-item__title"])}>{chooseCampain.location} </p>
                                            </div>
                                        </div>
                                        <div className={clsx(styles["campaign-item__date"])}>
                                            <p className={clsx(styles["campaign-item__date-start"])}>{chooseCampain["Date start"]}</p>
                                            <p className={clsx(styles["campaign-item__date-end"])}>{chooseCampain["Date end"]}</p>
                                        </div>
                                    </div>
                                    <div onClick={handleRemoveCampain} className={clsx(styles["wrap-img"])}>
                                        <img src={close} alt='' />
                                    </div>
                                </div>
                            }

                            <div className={clsx(styles["trash-input-wrap"])}>
                                <div className={clsx(styles["trash-input"])}>Thêm loại rác</div>
                                <div onClick={handleClickAddTrash} className={clsx(styles["trash-input-plus"])}>
                                    <img src={plus} alt='' />
                                </div>
                            </div>

                            <div id="trash-list" className={clsx(styles["trash-wrap"])}>
                                {trashType.map((element, index) => {
                                    return (
                                        <div key={Math.random()} data-trash={index} className={clsx(styles["trash-type"])}>
                                            <img src={plastic} alt='' />
                                            <p>{element}</p>
                                            <input id={"trash-quantity-" + index} min="1" placeholder="Khối lượng" type='number'></input>

                                        </div>
                                    )
                                })}
                            </div>

                            <button onClick={handleSubmitFormCompain}>Quyên góp</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardUser