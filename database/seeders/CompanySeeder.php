<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $input = [
            [
                'id'                    => 1,
                'company_name'          => 'Bangladesh College of Physicians & Surgeons',
                'short_name'            => 'BCPS',
                'desc'                  => '',
                'address'               => 'MOHAKHALI, DHAKA-1212',
                'email'                 => '',
                'phone'                 => '',
                'web_site'              => 'https://bcps.edu.bd/',
                'favicon'               => 'favicon-bcps.ico',
                'logo'                  => 'logo-bcps.png',
                'logo_width'            => 80,
                'logo_height'           => 80,
                'logo_dashboard'        => 'logo-bcps-dashboard.png',
                'logo_width_dashboard'  => 50,
                'logo_height_dashboard' => 50,
                'active'                => true,
            ],
            [
                'id'                    => 2,
                'company_name'          => 'Code With Asif',
                'short_name'            => 'CWA',
                'desc'                  => '',
                'address'               => 'Uttara, Dhaka-1212. Bangladesh.',
                'email'                 => 'info',
                'phone'                 => '+880 1724-296191',
                'web_site'              => 'https://codewithasif.com/',
                'favicon'               => 'favicon-cwa.ico',
                'logo'                  => 'logo-cwa.png',
                'logo_width'            => 120,
                'logo_height'           => 80,
                'logo_dashboard'        => 'logo-cwa-dashboard.png',
                'logo_width_dashboard'  => 50,
                'logo_height_dashboard' => 50,
                'active'                => false,
            ],
        ];

        foreach ($input as $data) {
            Company::create($data);
        }
    }
}
