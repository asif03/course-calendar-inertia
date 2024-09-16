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
            <div className="m-0 box-border p-0 text-black">
                <header className="h-30 fixed left-0 top-0 z-10 w-1/2 bg-purple-500">
                    <nav className="">Navbar</nav>
                </header>
                <div className="relative left-0 top-0 h-screen w-2/3 bg-black">
                    ASif
                </div>
                <main className="h-[1024px] bg-slate-800">Main Content</main>
                <footer className="h-24 w-full bg-[#0B3756]">Footer</footer>
            </div>
        </>
    );
}
