<?php

namespace App\Http\Controllers\CourseCalendar;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProgramScheduleRequest;
use App\Http\Requests\UpdateProgramScheduleRequest;
use App\Interfaces\ProgramScheduleRepositoryInterface;
use App\Models\ProgramSchedule;
use Inertia\Inertia;

class ProgramScheduleController extends Controller
{
    private ProgramScheduleRepositoryInterface $programScheduleRepository;

    public function __construct(ProgramScheduleRepositoryInterface $programScheduleRepository)
    {
        $this->programScheduleRepository = $programScheduleRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $schedules = $this->programScheduleRepository->getAllProgramSchedule();

        return Inertia::render('CourseCalendar/Schedule/ScheduleList', [
            'schedules' => $schedules,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProgramScheduleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ProgramSchedule $programSchedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProgramSchedule $programSchedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgramScheduleRequest $request, ProgramSchedule $programSchedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProgramSchedule $programSchedule)
    {
        //
    }
}
