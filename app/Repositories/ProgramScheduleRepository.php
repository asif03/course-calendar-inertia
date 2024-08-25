<?php

namespace App\Repositories;

use App\Interfaces\ProgramScheduleRepositoryInterface;
use App\Models\ProgramSchedule;

class ProgramScheduleRepository implements ProgramScheduleRepositoryInterface
{
    public function getAllProgramSchedule()
    {
        $schedules = array();
        $scheduleList = ProgramSchedule::select('prog_id', 'id', 'schedule_title', 'date_from', 'date_to', 'participant_limit', 'training_nature', 'status')
            ->with([
                'program' => function ($q) {
                    $q->select('id', 'dept_id', 'prog_name', 'prog_fee', 'notice_link', 'course_status',
                        'is_attachment', 'status');
                }])
            ->get();

        foreach ($scheduleList as $sched) {
            $schedule['id'] = $sched->id;
            $schedule['progName'] = $sched['program']->prog_name;
            $schedule['title'] = $sched->schedule_title;
            $schedule['dateFrom'] = $sched->date_from;
            $schedule['dateTo'] = $sched->date_to;
            $schedule['trainingNature'] = $sched->training_nature;
            $schedule['participantLimit'] = $sched->participant_limit;
            $schedule['status'] = $sched->status ? 'Active' : 'Inactive';

            $schedules[] = $schedule;
        }

        return $schedules;
    }
}
