import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { IDepartment, IProgram, IProgramSchedule, PageProps } from "@/types";
import { DataTable } from "@/Components/datatable/schedules/data-table";
import { columns } from "@/Components/datatable/schedules/columns";
import { Button } from "@/Components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import ScheduleBreadcrumb from "./ScheduleBreadcrumb";

const Programs = ({
    auth,
    programSchedules,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
    departments: IDepartment[];
    programSchedules: IProgramSchedule[];
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: Programs" />
            <div className="flex flex-col gap-4 text-primary dark:text-primary">
                <div className="flex flex-row items-center justify-between">
                    <ScheduleBreadcrumb currentPage="All Schedules" />
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
                            href={route("schedule.create")}
                            className="flex h-8 flex-row items-center gap-1 rounded-lg bg-primary p-2 text-sm text-white"
                        >
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Schedule
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="py-4">
                    {/* <ul>{programSchedules.map((item) => item.title)}</ul> */}
                    <DataTable data={programSchedules} columns={columns} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Programs;
