<?php

namespace App\Repositories;

use App\Interfaces\CompanyRepositoryInterface;
use App\Models\Company;

class CompanyRepository implements CompanyRepositoryInterface
{
    public function getActivatedCompany()
    {
        $companyInfo = Company::where('active', true)
            ->first();

        $company['id'] = $companyInfo->id;
        $company['companyName'] = $companyInfo->company_name;
        $company['companyShortName'] = $companyInfo->short_name;
        $company['address'] = $companyInfo->address;
        $company['favicon'] = $companyInfo->favicon;
        $company['logo'] = $companyInfo->logo;
        $company['logoWidth'] = $companyInfo->logo_width;
        $company['logoHeight'] = $companyInfo->logo_height;
        $company['logoDashboard'] = $companyInfo->logo_dashboard;
        $company['logoWidthDashboard'] = $companyInfo->logo_width_dashboard;
        $company['logoHeightDashboard'] = $companyInfo->logo_height_dashboard;

        return $company;
    }
}
