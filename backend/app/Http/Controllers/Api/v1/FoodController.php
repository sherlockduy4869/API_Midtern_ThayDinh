<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Food;
use App\Http\Resources\v1\FoodResource;
use App\Http\Resources\v1\FoodCollection;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new FoodCollection(Food::paginate(2));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'unit_price' => 'required',
            'promotion_price' => 'required',
            'description' => 'required',
            'food_type' => 'required',
            'image_food' => 'required'
        ],
        [
            'name.required' => 'Name can not be empty',
            'unit_price.required' => 'Unit price can not be empty',
            'promotion_price.required' => 'Promotion price can not be empty',
            'description.required' => 'Description can not be empty',
            'food_type.required' => 'Food type can not be empty',
            'image_food.required' => 'Image food can not be empty'
        ]);

        $new_food = Food::create($request->all());

        //return new FoodResource($new_food);

        if($new_food){
            return json_encode(["status" => true]);
        }
        else{
            return json_encode(["status" => false]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Food $food)
    {
        return new FoodResource($food);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

