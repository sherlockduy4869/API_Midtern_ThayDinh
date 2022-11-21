import React, { useEffect, useState } from "react";
import { Heading } from "../../components";
import { useParams } from "react-router-dom";
import { FaPhone } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

import './Detail.css';

import axios from "axios";

const Detail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios.get(`http://midternapi.atwebpages.com/public/api/v1/food/${id}`).then(res => {
            setDetail(res.data.data)
            // console.log(res.data.data)
        })      
    },[])

    return(
        <div className="app__detail section__padding section__wrapper flex__center">
            <Heading title="Chi tiết sản phẩm" className=""/>
            <div className="app__detail-content ">
                <div className="app__detail-img">
                    <img src={detail.image_food} alt=""></img>
                </div>

                <div className="app__detail-info">
                    <div className="detail-info__name">
                        <h1 className="p__cuprum">{detail.name}</h1>
                    </div>
                    <div className="p__cuprum detail-info__price">
                        <span className="detail-info__price-sale">{detail.promotion_price}<span>₫</span></span>
                        <span className="detail-info__price-original">{detail.unit_price}<span>₫</span></span>
                    </div>
                    <div className="detail-info__desc">
                        <p className="p__cuprum">{detail.description}</p>
                    </div>
                    <div className="detail-info__hotline"> 
                        <p className="p__cuprum"><FaPhone /> Hotline hỗ trợ 24/7: <a href="a">0123.456.789</a><span>|</span></p>
                        <div className="detail-info__hotline-button">
                            <button>
                                <div className="hotline-button__icon">
                                <AiFillLike/>
                                </div>
                                Thích
                            </button>
                            <button>
                                Chia sẻ
                            </button>
                        </div>
                    </div>
                    <div className="detail-info__code">
                        <p className="p__cuprum">Mã: MSP-08</p>
                    </div>
                    <div className="detail-info__category">
                        <p className="p__cuprum">Danh mục: <span>Hoa quả</span>, <span>Rau hữu cơ</span>, <span>Thực phẩm khô</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;