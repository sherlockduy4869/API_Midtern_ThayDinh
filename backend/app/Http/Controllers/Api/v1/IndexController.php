<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Food;
use App\Http\Resources\v1\IndexCollection;
use App\Http\Resources\v1\IndexResource;

class IndexController extends Controller
{
    public function getFoodByType($type){
        $food_by_type = Food::where('food_type', $type) -> get();
        return new IndexResource($food_by_type);
    }
}
