import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { DataTable } from "@/Components/datatable/programs/data-table";
import { columns } from "@/Components/datatable/programs/columns";
/*import { DataTable } from "@/Components/datatable/tasks/data-table";
import { columns } from "@/Components/datatable/tasks/columns";

const tasks = [
    {
        id: "TASK-8782",
        title: "You can't compress the program without quantifying the open-source SSD pixel!",
        status: "in progress",
        label: "documentation",
        priority: "medium",
    },
    {
        id: "TASK-7878",
        title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
        status: "backlog",
        label: "documentation",
        priority: "medium",
    },
    {
        id: "TASK-7839",
        title: "We need to bypass the neural TCP card!",
        status: "todo",
        label: "bug",
        priority: "high",
    },
];*/

const programs = [
    {
        id: 1,
        department: "IT Department",
        status: "in progress",
        label: "documentation",
        priority: "medium",
    },
    {
        id: 2,
        department: "RTMD Department",
        status: "backlog",
        label: "documentation",
        priority: "medium",
    },
    {
        id: 3,
        department: "Admin Department",
        status: "todo",
        label: "bug",
        priority: "high",
    },
];

const Programs = ({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
}>) => {
    console.log(programs);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: Programs" />
            <div className="text-primary dark:text-primary">
                <h2 className="text-4xl font-semibold text-gray-900">
                    Program List
                </h2>

                <div>
                    Programs
                    <DataTable data={programs} columns={columns} />
                </div>

                <div> {/* <DataTable data={tasks} columns={columns} /> */}</div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Programs;
