<?php

namespace Database\Seeders;

use App\Models\Program;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $input = [
            [
                'id'             => 1,
                'dept_id'        => 1,
                'prog_name'      => 'ICT Training',
                'prog_fee'       => 2000,
                'reg_open_date'  => date('Y-m-d'),
                'reg_close_date' => date('Y-m-d', strtotime(' + 1 months')),
                'notice_link'    => null,
                'course_status'  => 'M',
            ],
            [
                'id'             => 2,
                'dept_id'        => 2,
                'prog_name'      => 'RTMD Training',
                'prog_fee'       => 2000,
                'reg_open_date'  => date('Y-m-d'),
                'reg_close_date' => date('Y-m-d', strtotime(' + 2 months')),
                'notice_link'    => null,
                'course_status'  => 'M',
            ],

        ];

        foreach ($input as $data) {
            Program::create($data);
        }
    }
}
