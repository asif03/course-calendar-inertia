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
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('father_name', 100);
            $table->string('mobile', 11);
            $table->string('email', 100)->unique();
            $table->string('address', 500);
            $table->unsignedBigInteger('designation_id');
            $table->string('designation_other', 100)->nullable();
            $table->unsignedBigInteger('applicant_type_id');
            $table->unsignedBigInteger('subject_id');
            $table->unsignedInteger('bcps_enrollment_id')->nullable();
            $table->year('part1_year')->nullable();
            $table->enum('part1_month', ['January', 'July'])->nullabel()->comment('January, July');
            $table->unsignedInteger('fellow_id')->nullable();
            $table->string('bmdc', 50)->unique();
            $table->year('mbbs_year');
            $table->unsignedBigInteger('mbbs_institute_id');
            $table->string('mbbs_institute_other', 255)->nullable();
            $table->boolean('is_postgraduate')->default(false);
            $table->string('postgraduate_degree_name', 100)->nullable();
            $table->string('postgraduate_institute', 255)->nullable();
            $table->year('postgraduate_year')->nullable();
            $table->year('midterm_year')->nullable();
            $table->enum('midterm_month', ['January', 'July'])->nullabel()->comment('January, July');
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('designation_id')->references('id')->on('designations')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('applicant_type_id')->references('id')->on('applicant_types')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('subject_id')->references('id')->on('subjects')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('mbbs_institute_id')->references('id')->on('mbbs_institutes')
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
        Schema::dropIfExists('applicants');
    }
};
