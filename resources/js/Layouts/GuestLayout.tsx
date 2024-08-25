import ApplicationLogo from "@/Components/ApplicationLogo";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Head, Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import onboardingImg from "/public/assets/images/onboarding.jpg";

import { useThemeContext } from "@/contexts/ThemeContext";
//import { Moon, Sun } from "lucide-react";

export default function Guest({ children }: PropsWithChildren) {
    const { theme, toggleTheme } = useThemeContext();
    const { company } = usePage().props;

    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" type="image/x-icon" href={company.favicon} />
            </Head>
            <ThemeProvider>
                <div className="h-screen w-full lg:grid lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center bg-background py-4 dark:bg-background">
                        <Link href="/">
                            <ApplicationLogo
                                logoUrl={company.logo}
                                logoWidth={company.logoWidth}
                                logoHeight={company.logoHeight}
                            />
                        </Link>

                        <div className="w-full overflow-hidden px-4 py-4">
                            {children}
                        </div>

                        {/* <div className="h-11 w-12 rounded-[32px] bg-[#F4F4F4] dark:bg-[#111315] sm:flex sm:items-center sm:justify-center">
                        <button
                            onClick={toggleTheme}
                            className="flex h-9 w-10 items-center justify-center rounded-full bg-[#FCFCFC] dark:bg-[#272B30]"
                        >
                            <Sun
                                className="block text-[#444444] dark:hidden"
                                width={20}
                                height={20}
                            />
                            <Moon
                                className="hidden text-white dark:block"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div> */}
                    </div>
                    <div className="hidden bg-muted lg:block">
                        <img
                            src={onboardingImg}
                            alt="Image"
                            width="1920"
                            height="1080"
                            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            style={{
                                aspectRatio: "1920/1080",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}
