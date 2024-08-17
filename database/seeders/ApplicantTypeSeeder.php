<?php

namespace Database\Seeders;

use App\Models\ApplicantType;
use Illuminate\Database\Seeder;

class ApplicantTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $input = [
            [
                'id'             => 1,
                'applicant_type' => 'Fellow of BCPS',
            ],
            [
                'id'             => 2,
                'applicant_type' => 'FCPS Trainee',
            ],
            [
                'id'             => 3,
                'applicant_type' => 'Others',
            ],
        ];

        foreach ($input as $data) {
            ApplicantType::create($data);
        }
    }
}
