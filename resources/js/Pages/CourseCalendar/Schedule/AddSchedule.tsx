import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ScheduleBreadcrumb from "./ScheduleBreadcrumb";
import { PageProps } from "@/types";

const AddSchedule = ({
    auth,
}: PageProps<{
    mustVerifyEmail: boolean;
    status?: string;
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Course Calendar :: Programs" />
            <div className="flex flex-col gap-4 text-primary dark:text-primary">
                <div className="flex flex-row items-center justify-between">
                    <ScheduleBreadcrumb currentPage="Add Schedules" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddSchedule;
