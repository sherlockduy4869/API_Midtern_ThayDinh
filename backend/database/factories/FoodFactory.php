<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Food;

class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Food::class; 

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'unit_price' => $this->faker->numberBetween($min = 15000, $max = 17000),
            'promotion_price' => $this->faker->numberBetween($min = 12000, $max = 15000),
            'description' => $this->faker->text(),
            'food_type' => $this->faker->sentence($nbWords = 3, $variableNbWords = true),
            'image_food' => $this->faker->sentence($nbWords = 3, $variableNbWords = true)
        ];
    }
}
