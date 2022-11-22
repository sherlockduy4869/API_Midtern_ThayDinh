import React, { useState } from "react";
import axios from "axios";

import './PostForm.css';

const PostForm = () => {
    // const url = "http://midternapi.atwebpages.com/public/api/v1/food";
    // const [name, setName] = useState('')
    // const [unit_price, setUnitPrice] = useState('')
    // const [promotion_price, setPromotionPrice] = useState('')
    // const [food_type, setFoodType] = useState('')
    // const [description, setDescription] = useState('')
    // const [image_food, setImageFood] = useState('')

    // const handleSubmit = async(e) =>{
    //     e.preventDefault();
    //     try {
    //         const resp = await axios.post(url, {name:name, unit_price:unit_price, promotion_price:promotion_price, food_type:food_type, description:description, image_food:image_food})
    //         console.log(resp.data)
    //     } catch (error) {
    //         console.log(error.response)
    //     }
    // }

    const url = "http://midternapi.atwebpages.com/public/api/v1/food";
    const [data, setData] = useState({
        name: "",
        unit_price: 12,
        promotion_price: 12,
        food_type: "",
        description: "",
        image_food: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url,{
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
                <input onChange={(e) => handle(e)} id="image_food" value={data.image_food} placeholder="image_food" type="text" name="image_food"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostForm;