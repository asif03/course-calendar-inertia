import ApplicationLogo from "@/Components/ApplicationLogo";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

import { useThemeContext } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Guest({ children }: PropsWithChildren) {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <ThemeProvider>
            <div className="flex min-h-screen flex-col items-center bg-background pt-6 dark:bg-background sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>

                <div className="h-11 w-12 rounded-[32px] bg-[#F4F4F4] dark:bg-[#111315] sm:flex sm:items-center sm:justify-center">
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
                </div>
            </div>
        </ThemeProvider>
    );
}
