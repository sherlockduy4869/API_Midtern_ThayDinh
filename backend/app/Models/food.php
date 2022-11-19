<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $fillable = [
        'name', 'unit_price', 'promotion_price', 'description', 'food_type' 
    ];
    protected $primaryKey = 'id_food';
    protected $table = 'tbl_food';

    use HasFactory;
}
