import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { IProgram, PageProps } from "@/types";
import { DataTable } from "@/Components/datatable/programs/data-table";
import { columns } from "@/Components/datatable/programs/columns";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";

const Programs = ({
    auth,
    mustVerifyEmail,
    status,
    programs,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    programs: IProgram[];
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: Programs" />
            <div className="flex flex-col gap-4 text-primary dark:text-primary">
                <div className="flex flex-row items-center justify-between">
                    <Breadcrumb className="hidden text-primary dark:text-primary md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Course Calendar</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="#">Programs</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-bold text-primary">
                                    All Programs
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex flex-row gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1"
                        >
                            <FileIcon className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Export
                            </span>
                        </Button>
                        <Button size="sm" className="h-8 gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Program
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="py-4">
                    <DataTable data={programs} columns={columns} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Programs;
