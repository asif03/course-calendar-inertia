<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('program_schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prog_id');
            $table->string('schedule_title', 100)->nullable();
            $table->date('date_from');
            $table->date('date_to');
            $table->integer('participant_limit')->comment('Number of participants');
            $table->enum('training_nature', ['Offline', 'Online'])->nullable()->comment('Offline, Online');
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('prog_id')->references('id')->on('programs')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('created_by')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('program_schedules');
    }
};
