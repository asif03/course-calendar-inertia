<?php

namespace Database\Seeders;

use App\Models\Designation;
use Illuminate\Database\Seeder;

class DesignationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $input = [
            [
                'id'          => 1,
                'designation' => 'Major General',
            ],
            [
                'id'          => 2,
                'designation' => 'Brigadier General',
            ],
            [
                'id'          => 3,
                'designation' => 'Colonel',
            ],
            [
                'id'          => 4,
                'designation' => 'Lieutenant Colonel',
            ],
            [
                'id'          => 5,
                'designation' => 'Major',
            ],
            [
                'id'          => 6,
                'designation' => 'Training Officer',
            ],
            [
                'id'          => 7,
                'designation' => 'Professor',
            ],
            [
                'id'          => 8,
                'designation' => 'Assistant Professor',
            ],
            [
                'id'          => 9,
                'designation' => 'Associate Professor',
            ],
            [
                'id'          => 10,
                'designation' => 'Consultant',
            ],
            [
                'id'          => 11,
                'designation' => 'Senior Consultant',
            ],
            [
                'id'          => 12,
                'designation' => 'Junior Consultant',
            ],
            [
                'id'          => 13,
                'designation' => 'Medical Officer (MO)',
            ],
            [
                'id'          => 14,
                'designation' => 'Emergency Medical Officer (EMO)',
            ],
            [
                'id'          => 15,
                'designation' => 'Indoor Medical Officer (IMO)',
            ],
            [
                'id'          => 16,
                'designation' => 'Registrar',
            ],
            [
                'id'          => 17,
                'designation' => 'Assistant Registrar',
            ],
            [
                'id'          => 18,
                'designation' => 'Resident Physician (RP)',
            ],
            [
                'id'          => 19,
                'designation' => 'Resident Medical Officer (RMO)',
            ],
            [
                'id'          => 20,
                'designation' => 'Honorary Medical Officer (HMO)',
            ],
            [
                'id'          => 21,
                'designation' => 'Resident Surgeon (RS)',
            ],
            [
                'id'          => 22,
                'designation' => 'Assistant Surgeon',
            ],
            [
                'id'          => 23,
                'designation' => 'Others...',
            ],
        ];

        foreach ($input as $data) {
            Designation::create($data);
        }
    }
}
