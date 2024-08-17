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
        Schema::create('applicant_attachments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prog_id');
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedBigInteger('attachment_id');
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('prog_id')->references('id')->on('programs')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('applicant_id')->references('id')->on('applicants')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('attachment_id')->references('id')->on('program_attachments')
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
        Schema::dropIfExists('applicant_attachments');
    }
};
