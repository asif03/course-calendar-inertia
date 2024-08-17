<?php

namespace Database\Seeders;

use App\Models\ProgramAttachment;
use Illuminate\Database\Seeder;

class ProgramAttachmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $input = [
            [
                'id'                  => 1,
                'prog_id'             => 1,
                'attachment_title'    => 'PP Sized Photo',
                'attachment_type'     => 'png',
                'max_attachment_size' => 300,
            ],
            [
                'id'                  => 2,
                'prog_id'             => 1,
                'attachment_title'    => 'Congratulation Letter',
                'attachment_type'     => 'pdf',
                'max_attachment_size' => 100,
            ],
        ];

        foreach ($input as $data) {
            ProgramAttachment::create($data);
        }
    }
}
