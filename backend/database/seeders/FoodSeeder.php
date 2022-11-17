<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        $limit = 10;

        for($i = 0; $i < $limit; $i++){
            DB::table('tbl_food')->insert([
                'name' => $faker->name(),
                'unit_price' =>$faker->numberBetween($min = 12000, $max = 15000),
                'promotion_price' =>$faker->numberBetween($min = 10000, $max = 12000),
                'description' => $faker->realText(),
                'food_type' => $faker->sentence($nbWords = 3, $variableNbWords = true)
            ]);
        }
    }
}
