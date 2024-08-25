<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Program extends Model
{
    use HasFactory;

    /**
     * Get the department associated with the program.
     */
    public function department(): BelongsTo
    {
        return $this->BelongsTo(Department::class, 'dept_id', 'id');
    }

    /**
     * Get the department associated with the program.
     */
    public function program_schedule(): HasMany
    {
        return $this->hasMany(ProgramSchedule::class, 'prog_id', 'id');
    }

}
