import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardItem, Heading } from "../../components";

import './Home.css';

const Home = () => {
    const [carditem, setCardItem] = useState([]);
    const [filter, setFilter] = useState([carditem])

    const filterFood = (cate) => {
        const updatedList = carditem.filter((item) => item.food_type === cate);
        setFilter(updatedList);
    }

    useEffect(() => {
        axios.get(`http://midternapi.atwebpages.com/public/api/v1/food`).then(res => {
            // console.log(res.data.data);
            setCardItem(res.data.data);
            setFilter(res.data.data);
            // console.log(filter)
        })
    },[]);

    // console.log(carditem);

    return(
        <div className="app__home section__padding section__wrapper flex__center">
            <Heading title="Sản phẩm của chúng tôi"/>
            <div className="app__home-tab">
                <button className="p__cuprum">Hoa quả</button>
                <button className="p__cuprum">Thực phẩm khô</button>
                <button className="p__cuprum" onClick={() =>{filterFood('rauhuuco')}}>Rau hữu cơ</button>
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