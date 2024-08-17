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
        Schema::create('applicant_program_schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prog_id');
            $table->unsignedBigInteger('schedule_id');
            $table->unsignedBigInteger('applicant_id');
            $table->decimal('amount', 8, 2);
            $table->string('transaction_id', 500)->nullable();
            $table->dateTime('payment_date', $precision = 0);
            $table->string('payment_status', 100)->nullable();
            $table->string('payment_method', 100)->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('prog_id')->references('id')->on('programs')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('schedule_id')->references('id')->on('program_schedules')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('applicant_id')->references('id')->on('applicants')
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
        Schema::dropIfExists('applicant_payments');
    }
};
