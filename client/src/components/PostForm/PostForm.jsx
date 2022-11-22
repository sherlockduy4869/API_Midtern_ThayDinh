import React, { useState } from "react";
import axios from "axios";
import Heading from "../Heading/Heading";

import './PostForm.css';

const PostForm = () => {
    const url = "http://midternapi.atwebpages.com/public/api/v1/food";
    const [data, setData] = useState({
        name: "",
        unit_price: 0,
        promotion_price: 0,
        food_type: "",
        description: "",
        image_food: ""
    })

    const [showvalidation, setShowvalidation] = useState([])

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            unit_price: data.unit_price,
            promotion_price: data.promotion_price,
            food_type: data.food_type,
            description: data.description,
            image_food: data.image_food
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                setShowvalidation(error['response']['data']['errors']['description'][0])
            });
    }

    console.log(showvalidation);


    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className="app__post flex__center section__wrapper section__padding ">
            <Heading title="Add Product" />
            <form className="app__post-form" onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Name" type="text" ></input>
                <input onChange={(e) => handle(e)} id="unit_price" value={data.unit_price} placeholder="Unit price" type="number" name="unit_price"></input>
                <input onChange={(e) => handle(e)} id="promotion_price" value={data.promotion_price} placeholder="Promotion price" type="number" name="promotion_price"></input>
                <input onChange={(e) => handle(e)} id="food_type" value={data.food_type} placeholder="Food type" type="text" name="food_type"></input>
                <input onChange={(e) => handle(e)} id="description" value={data.description} placeholder="Description" type="text" name="description"></input>
                <div>{showvalidation}</div>
                <input onChange={(e) => handle(e)} id="image_food" value={data.image_food} placeholder="URL img" type="text" name="image"></input>
                <button className="custom__button" type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default PostForm;