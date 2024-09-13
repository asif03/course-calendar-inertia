import { Link } from "@inertiajs/react";
import { CircleChevronRight } from "lucide-react";
import CountUp from "react-countup";

const Hero = ({ eventsCount, programCount, scheduleCount, applicantCount }) => {
    return (
        <div className="absolute left-0 top-0 min-h-[680px] w-full bg-stone-300 bg-hero bg-cover bg-center bg-no-repeat bg-blend-multiply lg:min-h-screen">
            <div className="container mx-auto flex h-full min-h-[680px] w-full flex-col items-center justify-center text-[#0B3756] lg:min-h-screen">
                <div className="flex w-full flex-col justify-between gap-8 py-10 pt-20 lg:flex-row lg:justify-around lg:gap-0 lg:py-16 lg:pt-0">
                    <span className="text-center text-3xl font-extrabold lg:text-5xl">
                        <CountUp
                            end={eventsCount}
                            enableScrollSpy
                            duration={2}
                            scrollSpyOnce
                        />
                        +
                        <br /> Events
                    </span>{" "}
                    <span className="text-center text-3xl font-extrabold lg:text-5xl">
                        <CountUp
                            end={programCount}
                            enableScrollSpy
                            duration={2}
                            scrollSpyOnce
                        />
                        +<br /> Programs
                    </span>
                    <span className="text-center text-3xl font-extrabold lg:text-5xl">
                        <CountUp
                            end={scheduleCount}
                            enableScrollSpy
                            duration={2}
                            scrollSpyOnce
                        />
                        +<br /> Schedules
                    </span>
                    <span className="text-center text-3xl font-extrabold lg:text-5xl">
                        <CountUp
                            end={applicantCount}
                            enableScrollSpy
                            duration={2}
                            scrollSpyOnce
                        />
                        +<br /> Professonals
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h3 className="text-center text-3xl font-extrabold lg:text-5xl">
                        Enroll into Events As You Desire
                    </h3>
                    <Link
                        href=""
                        className="flex w-full flex-row items-center justify-center gap-3 rounded-lg bg-[#0B3756] py-3 font-bold text-white lg:w-48"
                    >
                        <span>Enroll Now</span>
                        <CircleChevronRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
