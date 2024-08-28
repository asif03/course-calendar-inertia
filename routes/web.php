<?php

use App\Http\Controllers\CourseCalendar\ProgramController;
use App\Http\Controllers\CourseCalendar\ProgramScheduleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('course-calendar')->group(function () {
    Route::middleware('auth')->group(function () {
        Route::prefix('programs')->group(function () {
            Route::get('/', [ProgramController::class, 'index'])->name('program.list');
            Route::get('/new-program', [ProgramController::class, 'create'])->name('program.create');
            Route::post('/store', [ProgramController::class, 'store'])->name('program.store');
        });

        Route::prefix('schedules')->group(function () {
            Route::get('/', [ProgramScheduleController::class, 'index'])->name('schedule.list');
            Route::get('/new', [ProgramScheduleController::class, 'create'])->name('schedule.create');
        });
    });
});

Route::get('/artisan-cmd', function () {
    Artisan::call('key:generate');
    Artisan::call('config:cache');
    return 'Command run successfully!';
})->name('artisan-cmd');

require __DIR__ . '/auth.php';
