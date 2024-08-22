<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class CreateSuperAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name'     => 'Super Admin',
            'email'    => 'sa@bcps.edu.bd',
            'password' => app('hash')->make('admin123'),
        ]);
    }
}
