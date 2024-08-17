<?php

namespace Database\Seeders;

use App\Models\ProgramSchedule;
use Illuminate\Database\Seeder;

class ProgramScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $input = [
            [
                'id'                => 1,
                'prog_id'           => 1,
                'schedule_title'    => 'Batch # 1',
                'date_from'         => date('Y-m-d'),
                'date_to'           => date('Y-m-d', strtotime(' + 3 days')),
                'participant_limit' => 30,
                'training_nature'   => 'Offline',
            ],
            [
                'id'                => 2,
                'prog_id'           => 1,
                'schedule_title'    => 'Batch # 2',
                'date_from'         => date('Y-m-d', strtotime(' + 7 days')),
                'date_to'           => date('Y-m-d', strtotime(' + 10 days')),
                'participant_limit' => 100,
                'training_nature'   => 'Online',
            ],
            [
                'id'                => 3,
                'prog_id'           => 2,
                'schedule_title'    => 'Batch # 1',
                'date_from'         => date('Y-m-d'),
                'date_to'           => date('Y-m-d', strtotime(' + 3 days')),
                'participant_limit' => 30,
                'training_nature'   => 'Offline',
            ],
            [
                'id'                => 4,
                'prog_id'           => 2,
                'schedule_title'    => 'Batch # 2',
                'date_from'         => date('Y-m-d', strtotime(' + 7 days')),
                'date_to'           => date('Y-m-d', strtotime(' + 9 days')),
                'participant_limit' => 100,
                'training_nature'   => 'Online',
            ],

        ];

        foreach ($input as $data) {
            ProgramSchedule::create($data);
        }
    }
}
