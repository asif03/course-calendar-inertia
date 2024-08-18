import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import ProgramDataTable from "@/Components/datatable/tasks/ProgramDataTable";

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
];

interface IProgram {
    id: bigint;
    dept_name: string;
    prog_name: string;
    prog_fee: number;
    notice_link: string;
    course_status: string;
    is_attachment: string;
    status: string;
}

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
    console.log(programs);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: Programs" />
            <div className="text-primary dark:text-primary">
                <h2 className="text-4xl font-semibold text-gray-900">
                    Program List
                </h2>
                <div>
                    <ProgramDataTable />
                </div>
                <div>
                    {programs.map((item) => (
                        <div key={item.id}>
                            <h2>{item.prog_name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Programs;
