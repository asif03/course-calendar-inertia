<?php

namespace App\Http\Controllers\CourseCalendar;

use App\Http\Controllers\Controller;
use App\Interfaces\DepartmentRepositoryInterface;
use App\Interfaces\ProgramRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramController extends Controller
{
    private DepartmentRepositoryInterface $departmentRepository;
    private ProgramRepositoryInterface $programRepository;

    public function __construct(DepartmentRepositoryInterface $departmentRepository, ProgramRepositoryInterface $programRepository)
    {
        $this->departmentRepository = $departmentRepository;
        $this->programRepository = $programRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $programs = $this->programRepository->getAllPrograms();

        return Inertia::render('CourseCalendar/Program/Programs', [
            'programs' => $programs,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = $this->departmentRepository->getAllDepartments();
        return Inertia::render('CourseCalendar/Program/AddProgram', [
            'departments' => $departments,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
