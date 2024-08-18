<?php

namespace App\Providers;

use App\Interfaces\ProgramRepositoryInterface;
use App\Repositories\ProgramRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ProgramRepositoryInterface::class, ProgramRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
