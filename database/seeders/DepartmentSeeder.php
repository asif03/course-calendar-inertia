<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $input = [
            [
                'id'        => 1,
                'dept_name' => 'IT Department',
            ],
            [
                'id'        => 2,
                'dept_name' => 'RTMD Department',
            ],
        ];

        foreach ($input as $data) {
            Department::create($data);
        }
    }
}
