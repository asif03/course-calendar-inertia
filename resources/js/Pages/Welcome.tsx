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
            <div className="relative m-0 box-border p-0 text-black">
                <header className="flex h-screen flex-col bg-green-500">
                    <nav className="sticky z-10 h-10 w-1/2 bg-purple-500">
                        Navbar
                    </nav>
                    <div className="absolute left-0 top-0 z-30 h-80 w-2/3 bg-black"></div>
                </header>
                <main className="h-96 bg-slate-800">Main Content</main>
                <footer className="h-24 w-full bg-[#0B3756]">Footer</footer>
            </div>
        </>
    );
}
