import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import ApplicationBreadcrumb from "./ApplicationBreadcrumb";
import { Button } from "@/Components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
const Applicants = ({ auth }: PageProps<{ status?: string }>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Applicants" />
            <div className="flex flex-col gap-4 text-primary dark:text-primary">
                <div className="flex flex-row items-center justify-between">
                    <ApplicationBreadcrumb currentPage="All Programs" />
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
            </div>
        </AuthenticatedLayout>
    );
};

export default Applicants;
