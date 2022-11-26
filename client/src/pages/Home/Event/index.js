import React from "react";
import ReactDOM from "react-dom";
import styles from './index.module.css'
import clsx from 'clsx';
import Slider from 'react-slick';
import event1 from '~/assets/images/Home/Event/event1.jpg'
import location from '~/assets/images/Home/Event/location.png'
import people from '~/assets/images/Home/Event/people.png'
import trash from '~/assets/images/Home/Event/trash.png'
import { Fragment, useRef } from 'react';

const Event = () => {
    const setting = {   
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const slideRef = useRef();

    const gotoNext = () =>{
        slideRef.current.slickNext();
    }

    return (
        <Fragment>
        <Slider {...setting} ref={slideRef}>
            <div key={1} className={clsx(styles["event"])}>
                <img src={event1} className={clsx(styles["event-img"])} alt='event' />
                <div className={clsx(styles["event-infor"])}>
                    <h1 className={clsx(styles["event-infor__title"])}>ABCCCCCC</h1>
                    <div className={clsx(styles["event-infor__stat"])}>
                        <div className={clsx(styles["event-infor__stat-element"])}>
                            <img src={people} alt='logo' />
                            <span>123 Người tham gia</span>
                        </div>
                        <div className={clsx(styles["event-infor__stat-element"])}>
                            <img src={trash} alt='logo' />
                            <span>123Kg rác</span>
                        </div>
                        <div className={clsx(styles["event-infor__stat-element"])}>
                            <img src={location} alt='logo' />
                            <span>227 NVC</span>
                        </div>
                    </div>
                    <div className={clsx(styles["event-summary"])}>
                        <p className={clsx(styles["event-summary__title"])}>Tóm tắt</p>
                        <p className={clsx(styles["event-summary__des"])}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            
        </Slider>

        </Fragment>
    );
}

export default Event;