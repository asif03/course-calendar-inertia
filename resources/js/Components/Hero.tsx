import React, { useEffect, useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { LogIn } from "lucide-react";

const Hero = () => {
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
        <div className="h-dvh w-full bg-stone-300 bg-hero bg-cover bg-center bg-no-repeat bg-blend-multiply">
            <header
                className={`${
                    small
                        ? "border-b-2 bg-[#BB8289]"
                        : "bg-pink-50 bg-opacity-50"
                } sticky top-0 py-2`}
            >
                <nav className="container mx-auto flex flex-row items-center justify-between">
                    <ApplicationLogo
                        logoUrl={company.logoDashboard}
                        logoWidth={company.logoWidthDashboard}
                        logoHeight={company.logoHeightDashboard}
                    />
                    <ul className="flex flex-row gap-4 font-bold text-[#FF7E47]">
                        <li>Home</li>
                        <li>Events</li>
                    </ul>
                    <Link
                        href={route("login")}
                        className="flex flex-row items-center justify-center gap-1 text-sm font-bold text-white"
                    >
                        <LogIn />
                        Login
                    </Link>
                </nav>
            </header>
            <div className="container mx-auto flex h-full w-full flex-col items-center justify-center">
                <h3 className="text-center text-5xl font-extrabold">
                    Enroll into Events <br /> As You Desire
                </h3>
                <Link
                    href=""
                    className="my-10 rounded-lg bg-[#FF7E47] px-2 py-2"
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

export default Hero;
