import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/Components/ui/button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Hero from "@/Components/Hero";
import CountUp from "react-countup";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen">
                <div id="home">
                    <Hero />
                </div>

                <main className="flex-1 overflow-y-auto p-5 text-[#FF7E47]">
                    <div className="flex w-full flex-row justify-around py-10">
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp
                                end={1000}
                                enableScrollSpy
                                duration={2}
                                scrollSpyOnce
                            />
                            +
                            <br /> Events
                        </span>{" "}
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp end={10} />+<br /> Programs
                        </span>
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp end={10} />+<br /> Schedules
                        </span>
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp end={10} />+<br /> Professonals
                        </span>
                    </div>

                    <div>
                        <h3>ABOUT EVENT</h3>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div>
                        <h3>Our Speaker</h3>
                        <div>Slider</div>
                    </div>

                    <div>
                        <h3>UPCOMMING EVENTS</h3>
                        <div>Tabs</div>
                    </div>
                </main>

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
