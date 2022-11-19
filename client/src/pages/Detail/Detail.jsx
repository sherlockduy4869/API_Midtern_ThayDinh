import React from "react";
import images from "../../constants/images";
import { FaPhone } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai'

import './Detail.css';
import { Heading } from "../../components";

const Detail = () => {
    return(
        <div className="app__detail section__padding section__wrapper flex__center">
            <Heading title="Chi tiết sản phẩm" className=""/>
            <div className="app__detail-content ">
                <div className="app__detail-img">
                    <img src={images.nhoxanh} alt=""></img>
                </div>

                <div className="app__detail-info">
                    <div className="detail-info__name">
                        <h1 className="p__cuprum">nho xanh</h1>
                    </div>
                    <div className="p__cuprum detail-info__price">
                        <span className="detail-info__price-sale">12,000<span>₫</span></span>
                        <span className="detail-info__price-original">15,000<span>₫</span></span>
                    </div>
                    <div className="detail-info__desc">
                        <p className="p__cuprum">Rau cải bắp hữu cơ (Brassica oleracea nhóm Capitata) là loại rau chủ lực trong họ Cải (còn gọi là họ Thập tự – Brassicaceae/Cruciferae),có xuất xứ từ vùng Địa Trung Hải. Nó là cây thân thảo, sống hai năm, và là một thực vật có hoa thuộc nhóm hai lá mầm với các lá tạo thành một cụm đặc hình gần như hình cầu.Là một loại rau hữu cơ rất dễ nhận biết,khó có thể nhầm lẫn</p>
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