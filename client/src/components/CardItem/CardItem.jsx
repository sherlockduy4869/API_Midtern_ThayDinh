import React from "react";
import { Link } from 'react-router-dom';

import './CardItem.css'

const CardItem = ({
    id,
    name,
    unit_price,
    promotion_price,
    image_food}) => {
    return(
        <div className="app__card">
            <div className="app__card-img">
                <img src={image_food} alt="nho xanh"></img>
            </div>
            <div className="card-info">
                <div className="p__cuprum card-info__title">{name}</div>
                <div className="p__cuprum card-info__price">
                    <span className="card-info__price-sale">{promotion_price}<span>₫</span></span>
                    <span className="card-info__price-original">{unit_price}<span>₫</span></span>
                </div>
                <div className="p__cuprum card-info__detail">
                    <Link to={`/detail/${id}`}>
                        <button type="button" className="custom__button card-info__detail-button">chi tiết</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardItem;