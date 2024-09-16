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
        Schema::create('programs', function (Blueprint $table)
        {
            $table->id();
            $table->unsignedBigInteger('dept_id');
            $table->string('prog_name', 500);
            $table->decimal('prog_fee', 8, 2);
            $table->date('reg_open_date');
            $table->date('reg_close_date');
            $table->string('notice_link', 500)->nullable();
            $table->enum('course_status', ['M', 'O'])->default('O')->comment('M=Mandatory, O=Optional');
            $table->boolean('is_attachment')->default(false);
            $table->string('bgcolor')->nullable();
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('dept_id')->references('id')->on('departments')
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
        Schema::dropIfExists('programs');
    }
};