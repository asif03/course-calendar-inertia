<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
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
                'id'           => 1,
                'subject_name' => 'Anaesthesiology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '11',
            ],
            [
                'id'           => 2,
                'subject_name' => 'Biochemistry',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '12',
            ],
            [
                'id'           => 3,
                'subject_name' => 'Cardiology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '13',
            ],
            [
                'id'           => 4,
                'subject_name' => 'Cardiovascular Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '14',
            ],
            [
                'id'           => 5,
                'subject_name' => 'Conservative Dentistry & Endodontics',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '15',
            ],
            [
                'id'           => 6,
                'subject_name' => 'Dermatology & Venereology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '16',
            ],
            [
                'id'           => 7,
                'subject_name' => 'Endocrinology & Metabolism',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '17',
            ],
            [
                'id'           => 8,
                'subject_name' => 'Family Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '18',
            ],
            [
                'id'           => 9,
                'subject_name' => 'Feto-Maternal Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '55',
            ],
            [
                'id'           => 10,
                'subject_name' => 'Gastroenterology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '19',
            ],
            [
                'id'           => 11,
                'subject_name' => 'Gynaecological Oncology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '56',
            ],
            [
                'id'           => 12,
                'subject_name' => 'Haematology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '20',
            ],
            [
                'id'           => 13,
                'subject_name' => 'Histopathology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '22',
            ],
            [
                'id'           => 14,
                'subject_name' => 'Infectious Disease & Tropical Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '23',
            ],
            [
                'id'           => 15,
                'subject_name' => 'Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '24',
            ],
            [
                'id'           => 16,
                'subject_name' => 'Microbiology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '25',
            ],
            [
                'id'           => 17,
                'subject_name' => 'Neonatology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '26',
            ],
            [
                'id'           => 18,
                'subject_name' => 'Nephrology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '27',
            ],
            [
                'id'           => 19,
                'subject_name' => 'Neurology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '28',
            ],
            [
                'id'           => 20,
                'subject_name' => 'Neuro-surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '29',
            ],
            [
                'id'           => 21,
                'subject_name' => 'Obstetrics & Gynaecology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '30',
            ],
            [
                'id'           => 22,
                'subject_name' => 'Ophthalmology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '31',
            ],
            [
                'id'           => 23,
                'subject_name' => 'Oral and Maxillofacial Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '32',
            ],
            [
                'id'           => 24,
                'subject_name' => 'Orthodontics & Dentofacial Orthopaedics',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '33',
            ],
            [
                'id'           => 25,
                'subject_name' => 'Orthopaedic Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '34',
            ],
            [
                'id'           => 26,
                'subject_name' => 'Otolaryngology-Head and Neck Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '35',
            ],
            [
                'id'           => 27,
                'subject_name' => 'Paediatric Cardiology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '58',
            ],
            [
                'id'           => 28,
                'subject_name' => 'Paediatric Gastroenterology & Nutrition',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '52',
            ],
            [
                'id'           => 29,
                'subject_name' => 'Paediatric Haematology & Oncology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '36',
            ],
            [
                'id'           => 30,
                'subject_name' => 'Paediatric Nephrology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '37',
            ],
            [
                'id'           => 31,
                'subject_name' => 'Paediatric Neurology & Development',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '54',
            ],
            [
                'id'           => 32,
                'subject_name' => 'Paediatric Pulmonology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '53',
            ],
            [
                'id'           => 33,
                'subject_name' => 'Paediatric Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '38',
            ],
            [
                'id'           => 34,
                'subject_name' => 'Paediatrics',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '39',
            ],
            [
                'id'           => 35,
                'subject_name' => 'Physical Medicine & Rehabilitation',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '40',
            ],
            [
                'id'           => 36,
                'subject_name' => 'Plastic and Reconstructive Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '41',
            ],
            [
                'id'           => 37,
                'subject_name' => 'Hepatology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '21',
            ],
            [
                'id'           => 38,
                'subject_name' => 'Prosthodontics',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '42',
            ],
            [
                'id'           => 39,
                'subject_name' => 'Psychiatry',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '43',
            ],
            [
                'id'           => 40,
                'subject_name' => 'Pulmonology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '44',
            ],
            [
                'id'           => 41,
                'subject_name' => 'Radiology & Imaging',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '45',
            ],
            [
                'id'           => 42,
                'subject_name' => 'Radiotherapy',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '46',
            ],
            [
                'id'           => 43,
                'subject_name' => 'Reproductive Endocrinology & Infertility',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '57',
            ],
            [
                'id'           => 44,
                'subject_name' => 'Rheumatology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '47',
            ],
            [
                'id'           => 45,
                'subject_name' => 'Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '48',
            ],
            [
                'id'           => 46,
                'subject_name' => 'Thoracic Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '49',
            ],
            [
                'id'           => 47,
                'subject_name' => 'Transfusion Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '51',
            ],
            [
                'id'           => 48,
                'subject_name' => 'Urology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '50',
            ],
            [
                'id'           => 49,
                'subject_name' => 'Paediatric Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => null,
            ],
            [
                'id'           => 50,
                'subject_name' => 'Hepatobiliary Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '60',
            ],
            [
                'id'           => 51,
                'subject_name' => 'Colorectal Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '61',
            ],
            [
                'id'           => 52,
                'subject_name' => 'Surgical Oncology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '62',
            ],
            [
                'id'           => 53,
                'subject_name' => 'Paediatric Ophthalmology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '64',
            ],
            [
                'id'           => 54,
                'subject_name' => 'Vitreo Retina',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '65',
            ],
            [
                'id'           => 55,
                'subject_name' => 'Paediatric Critical Care Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '69',
            ],
            [
                'id'           => 56,
                'subject_name' => 'Casualty & Emergency Surgery',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '63',
            ],
            [
                'id'           => 57,
                'subject_name' => 'Medical Oncology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '66',
            ],
            [
                'id'           => 58,
                'subject_name' => 'Palliative Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '67',
            ],
            [
                'id'           => 59,
                'subject_name' => 'Paediatric Endocrinology & Metabolism',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => '68',
            ],
            [
                'id'           => 60,
                'subject_name' => 'Laboratory Medicine',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'Y',
                'sp_code'      => '91',
            ],
            [
                'id'           => 61,
                'subject_name' => 'Anatomy',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => null,
            ],
            [
                'id'           => 62,
                'subject_name' => 'Dental Surgery',
                'fcps_flg'     => 'N',
                'mcps_flg'     => 'Y',
                'sp_code'      => '93',
            ],
            [
                'id'           => 63,
                'subject_name' => 'Forensic Medicine',
                'fcps_flg'     => 'N',
                'mcps_flg'     => 'Y',
                'sp_code'      => '92',
            ],
            [
                'id'           => 64,
                'subject_name' => 'Virology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => null,
            ],
            [
                'id'           => 65,
                'subject_name' => 'Physiology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => null,
            ],
            [
                'id'           => 66,
                'subject_name' => 'Clinical Pathology',
                'fcps_flg'     => 'N',
                'mcps_flg'     => 'Y',
                'sp_code'      => null,
            ],
            [
                'id'           => 67,
                'subject_name' => 'Pharmacology',
                'fcps_flg'     => 'Y',
                'mcps_flg'     => 'N',
                'sp_code'      => null,
            ],
            [
                'id'           => 68,
                'subject_name' => 'Child & Adolescent Psychiatry',
                'fcps_flg'     => 'N',
                'mcps_flg'     => 'N',
                'sp_code'      => null,
            ],

        ];

        foreach ($input as $data) {
            Subject::create($data);
        }

    }

}