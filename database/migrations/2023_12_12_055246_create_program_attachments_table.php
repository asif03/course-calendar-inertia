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
        Schema::create('program_attachments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prog_id');
            $table->string('attachment_title');
            $table->enum('attachment_type', ['pdf', 'jpeg', 'jpg', 'png', 'gif'])->nullable();
            $table->integer('max_attachment_size')->nullable();
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
        Schema::dropIfExists('program_attachments');
    }
};
