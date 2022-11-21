import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardItem, Heading } from "../../components";

import './Home.css';

const Home = () => {
    const [carditem, setCardItem] = useState([]);

    useEffect(() => {
        axios.get(`http://midternapi.atwebpages.com/public/api/v1/food`).then(res => {
            console.log(res.data.data);
            setCardItem(res.data.data);
        })
    },[]);

    return(
        <div className="app__home section__padding section__wrapper flex__center">
            <Heading title="Sản phẩm của chúng tôi"/>
            <div className="app__home-tab">
                <button className="p__cuprum active">Hoa quả</button>
                <button className="p__cuprum">Thực phẩm khô</button>
                <button className="p__cuprum">Rau hữu cơ</button>
            </div>
            <div className="app__items">
                {carditem.map((info) => (
                    <CardItem 
                    id={info.id_food}
                    name={info.name}
                    promotion_price={info.promotion_price}
                    unit_price={info.unit_price}
                    image_food={info.image_food}
                    />
                ))}     
            </div>
            
        </div>
    );
};

export default Home;