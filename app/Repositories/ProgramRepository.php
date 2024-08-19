<?php

namespace App\Repositories;

use App\Interfaces\ProgramRepositoryInterface;
use App\Models\Program;

class ProgramRepository implements ProgramRepositoryInterface
{
    public function getAllPrograms()
    {
        $programs = array();
        $programList = Program::select('id', 'dept_id', 'prog_name', 'prog_fee', 'notice_link', 'course_status',
            'is_attachment', 'status')
            ->with([
                'department' => function ($q) {
                    $q->select('id', 'dept_name');
                }])
            ->get();

        foreach ($programList as $prog) {
            $program['id'] = $prog->id;
            $program['department'] = $prog['department']->dept_name;
            $program['title'] = $prog->prog_name;
            $program['fee'] = $prog->prog_fee;
            $program['notice'] = $prog->notice_link;
            $program['courseStatus'] = $prog->course_status == 'M' ? 'Mandatory' : 'Optional';
            $program['attachment'] = $prog->is_attachment ? 'Yes' : 'No';
            $program['status'] = $prog->status ? 'Active' : 'Inactive';

            $programs[] = $program;
        }

        return $programs;
    }
}
