import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/Components/ui/button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Hero from "@/Components/Hero";
import CountUp from "react-countup";
import { Separator } from "@/Components/ui/separator";
import { LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [calendarView, setCalendarView] = useState("grid");
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen">
                <div id="home">
                    <Hero />
                </div>

                <main className="container mx-auto flex h-auto w-full flex-col p-5 text-[#FF7E47]">
                    <div className="flex w-full flex-row justify-around py-10">
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp
                                end={10}
                                enableScrollSpy
                                duration={2}
                                scrollSpyOnce
                            />
                            +
                            <br /> Events
                        </span>{" "}
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp
                                end={10}
                                enableScrollSpy
                                duration={2}
                                scrollSpyOnce
                            />
                            +<br /> Programs
                        </span>
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp
                                end={100}
                                enableScrollSpy
                                duration={2}
                                scrollSpyOnce
                            />
                            +<br /> Schedules
                        </span>
                        <span className="text-center text-5xl font-extrabold">
                            <CountUp
                                end={10}
                                enableScrollSpy
                                duration={2}
                                scrollSpyOnce
                            />
                            +<br /> Professonals
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

                    <div className="flex h-auto w-full flex-col items-center justify-center py-10">
                        <h3 className="text-center text-5xl font-extrabold">
                            UPCOMMING EVENTS
                        </h3>
                        <Separator className="mt-2 h-1 w-20 bg-[#FF7E47] text-center" />
                        <div className="flex w-full flex-row items-center justify-end gap-2 py-2 font-bold">
                            View
                            <Button
                                variant="outline"
                                className={`${calendarView == "grid" ? "bg-[#FF7E47] text-white" : ""} p-1`}
                                onClick={() => setCalendarView("grid")}
                            >
                                <LayoutGrid />
                            </Button>
                            <Button
                                variant="outline"
                                className={`${calendarView == "list" ? "bg-[#FF7E47] text-white" : ""} p-1`}
                                onClick={() => setCalendarView("list")}
                            >
                                <LayoutList />
                            </Button>
                        </div>
                        <div className="w-full rounded-lg border-2 p-1">
                            {calendarView == "grid" && (
                                <div>
                                    <FullCalendar
                                        contentHeight={700}
                                        plugins={[dayGridPlugin]}
                                        initialView="dayGridMonth"
                                        events={[
                                            {
                                                title: "event 1",
                                                date: "2024-08-01",
                                            },
                                            {
                                                title: "event 2",
                                                date: "2024-08-02",
                                            },
                                        ]}
                                    />
                                </div>
                            )}
                            {calendarView == "list" && <div>List View</div>}
                        </div>
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
