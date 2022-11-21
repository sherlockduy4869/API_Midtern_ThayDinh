import React, { useState } from "react";
import axios from "axios";

import './PostForm.css';

const PostForm = () => {
    const url = "http://midternapi.atwebpages.com/public/api/v1/food";
    const [data, setData] = useState({
        name: "",
        unit_price: "",
        promotion_price: "",
        food_type: "",
        description: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            unit_price: data.unit_price,
            promotion_price: data.promotion_price,
            food_type: data.food_type,
            description: data.description 
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return(
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text" ></input>
                <input onChange={(e) => handle(e)} id="unit_price" value={data.unit_price} placeholder="unit_price" type="text" name="unit_price"></input>
                <input onChange={(e) => handle(e)} id="promotion_price" value={data.promotion_price} placeholder="promotion_price" type="text" name="promotion_price"></input>
                <input onChange={(e) => handle(e)} id="food_type" value={data.food_type} placeholder="food_type" type="text" name="food_type"></input>
                <input onChange={(e) => handle(e)} id="description" value={data.description} placeholder="desc" type="text" name="description"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm;