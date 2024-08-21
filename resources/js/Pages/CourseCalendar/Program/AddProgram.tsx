import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IDepartment, PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import ProgramBreadcrumb from "./ProgramBreadcrumb";
import { ListChecks } from "lucide-react";

const AddProgram = ({
    auth,
    departments,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    departments: IDepartment[];
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: New Program" />
            <div className="flex flex-col gap-4 text-primary dark:text-primary">
                <div className="flex flex-row items-center justify-between">
                    <ProgramBreadcrumb currentPage="New Program" />
                    <div className="flex flex-row gap-2">
                        <Link
                            href={route("program.list")}
                            className="flex h-8 flex-row items-center gap-1 rounded-lg bg-primary p-2 text-sm text-white"
                        >
                            <ListChecks className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Program List
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="py-4"></div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddProgram;
