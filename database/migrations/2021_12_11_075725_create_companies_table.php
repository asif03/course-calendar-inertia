<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('company_name', 100);
            $table->string('short_name', 25)->nullable();
            $table->string('desc', 255)->nullable();
            $table->string('address', 255)->nullable();
            $table->string('email', 55)->nullable();
            $table->string('phone', 55)->nullable();
            $table->string('web_site', 25)->nullable();
            $table->string('favicon', 255)->nullable();
            $table->string('logo', 255)->nullable();
            $table->tinyInteger('logo_width')->default(50);
            $table->tinyInteger('logo_height')->default(50);
            $table->string('logo_dashboard', 255)->nullable();
            $table->tinyInteger('logo_width_dashboard')->default(50);
            $table->tinyInteger('logo_height_dashboard')->default(50);
            $table->boolean('active')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
};
