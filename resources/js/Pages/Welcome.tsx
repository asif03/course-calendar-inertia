import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/Components/ui/button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-[#E66245]">
                <div className="h-16 w-full bg-[#F8A775]"></div>
                {/* <div className="p-6 text-end sm:fixed sm:right-0 sm:top-0">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div> */}

                <div className="mx-auto w-full p-6 lg:p-8">
                    {/* <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        weekends={false}
                        events={[
                            { title: "event 1", date: "2024-08-01" },
                            { title: "event 2", date: "2024-08-02" },
                        ]}
                    /> */}

                    {/* <div className="mt-16 flex justify-center px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm sm:text-start">
                            &nbsp;
                        </div>

                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:ms-0 sm:text-end">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
