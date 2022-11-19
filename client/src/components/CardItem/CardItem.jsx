import React from "react";
import { Link } from 'react-router-dom';
import images from "../../constants/images";

import './CardItem.css'

const CardItem = () => {
    return(
        <div className="app__card">
            <div className="app__card-img">
                <img src={images.nhoxanh} alt="nho xanh"></img>
            </div>
            <div className="card-info">
                <div className="p__cuprum card-info__title">NHO XANH</div>
                <div className="p__cuprum card-info__price">
                    <span className="card-info__price-sale">12,000<span>₫</span></span>
                    <span className="card-info__price-original">15,000<span>₫</span></span>
                </div>
                <div className="p__cuprum card-info__detail">
                    <Link to='/detail'>
                        <button type="button" className="custom__button card-info__detail-button">chi tiết</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardItem;