<?php

namespace App\Http\Controllers;

use App\Interfaces\ProgramScheduleRepositoryInterface;
use Inertia\Inertia;

class HomeController extends Controller
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

        //dd($schedules);

        $events = array();
        foreach ($schedules as $schedule)
        {
            $event['id'] = $schedule['id'];
            $event['progId'] = $schedule['id'];
            $event['title'] = $schedule['title'];
            $event['start'] = $schedule['dateFrom'];
            $event['end'] = $schedule['dateTo'];
            $event['allDay'] = true;
            $event['backgroundColor'] = $schedule['eventColor'];
            //progId: $(this).attr('prog_id'),
            $events[] = $event;
        }

        //dd($events);

        return Inertia::render('Welcome', [
            'events' => $events,
        ]);

    }
}