import React from "react";
import { CardItem, Heading } from "../../components";

import './Home.css';

const Home = () => {
    return(
        <div className="app__home section__padding section__wrapper flex__center">
            <Heading title="Sản phẩm của chúng tôi"/>
            <div className="app__home-tab">
                <button className="p__cuprum active">Hoa quả</button>
                <button className="p__cuprum">Thực phẩm khô</button>
                <button className="p__cuprum">Rau hữu cơ</button>
            </div>
            <div className="app__items">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    );
};

export default Home;