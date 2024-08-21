<?php

namespace App\Repositories;

use App\Interfaces\DepartmentRepositoryInterface;
use App\Models\Department;

class DepartmentRepository implements DepartmentRepositoryInterface
{
    public function getAllDepartments()
    {
        $depts = Department::where('status', true)
            ->get();

        foreach ($depts as $dept) {
            $department['id'] = $dept->id;
            $department['department'] = $dept->dept_name;
            $department['status'] = $dept->status ? 'Active' : 'Inactive';

            $departments[] = $department;
        }

        return $departments;
    }
}
