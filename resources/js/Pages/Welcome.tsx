import { Link, Head, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Hero from "@/Components/Hero";
import { LogInIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Events from "@/Components/events/Events";
import MobileMenu from "@/Components/MobileMenu";
import Footer from "@/Components/Footer";

export default function Welcome({ events }: PageProps<{ events: [] }>) {
    const [small, setSmall] = useState(false);
    const { company } = usePage().props;

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.scrollY > 50),
            );
        }
    }, []);

    return (
        <>
            <Head>
                <title>{company.companyShortName}</title>
                <link rel="icon" type="image/x-icon" href={company.favicon} />
            </Head>
            <div className="">
                <header
                    id="home"
                    className={`${
                        small
                            ? "border-b-2 border-[#FF7E47] bg-[#0B3756] text-white"
                            : "bg-pink-50 bg-opacity-70 text-[#0B3756]"
                    } fixed left-0 top-0 z-50 w-full py-2`}
                >
                    <nav className="container mx-auto flex flex-row items-center justify-between">
                        <MobileMenu className="block lg:hidden" />
                        <ApplicationLogo
                            logoUrl={company.logoDashboard}
                            logoWidth={company.logoWidthDashboard}
                            logoHeight={company.logoHeightDashboard}
                        />
                        <ul className="hidden flex-row gap-4 font-bold lg:flex">
                            <li>
                                <Link href="#home">Home</Link>
                            </li>
                            <li>
                                <Link href="#events">Events</Link>
                            </li>
                        </ul>
                        <Link
                            href={route("login")}
                            className="flex flex-row items-center justify-center gap-1 text-sm font-bold"
                        >
                            <LogInIcon />
                            Login
                        </Link>
                    </nav>
                </header>

                <Hero
                    eventsCount={10}
                    programCount={10}
                    scheduleCount={100}
                    applicantCount={1000}
                />

                <main className="container z-0 mx-auto flex h-auto w-full flex-col p-5 text-[#FF7E47]">
                    <div id="events" className="pt-10">
                        <Events events={events} />
                    </div>

                    <div className="h-auto">
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
                </main>
                <footer className="w-full bg-[#0B3756]">
                    <Footer />
                </footer>

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

                {/* <div className="mx-auto w-full p-6 lg:p-8">
                    <FullCalendar
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
                    </div> 
                </div>*/}
            </div>
        </>
    );
}
