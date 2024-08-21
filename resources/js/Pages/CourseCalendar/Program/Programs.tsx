import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { IDepartment, IProgram, PageProps } from "@/types";
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
import ProgramBreadcrumb from "./ProgramBreadcrumb";

const Programs = ({
    auth,
    programs,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    departments: IDepartment[];
    programs: IProgram[];
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: Programs" />
            <div className="flex flex-col gap-4 text-primary dark:text-primary">
                <div className="flex flex-row items-center justify-between">
                    <ProgramBreadcrumb currentPage="All Programs" />
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
                        <Link
                            href={route("program.create")}
                            className="flex h-8 flex-row items-center gap-1 rounded-lg bg-primary p-2 text-sm text-white"
                        >
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Program
                            </span>
                        </Link>
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
