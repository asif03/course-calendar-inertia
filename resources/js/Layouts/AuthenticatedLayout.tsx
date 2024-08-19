import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Head, Link } from "@inertiajs/react";
import { User } from "@/types";
import {
    Calendar,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ToggleSwitch from "@/Components/ToggleSwitch";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <ThemeProvider>
                <Head>
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                </Head>
                <div className="flex min-h-screen w-[100vw] flex-row bg-background dark:bg-background">
                    <aside className="fixed inset-y-0 left-0 z-10 hidden w-0 flex-col justify-center border-r bg-foreground dark:bg-foreground sm:flex sm:w-14 lg:w-72">
                        <nav className="flex flex-col items-center gap-4 px-6 sm:py-5">
                            <Link
                                href="/"
                                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary dark:text-primary md:h-8 md:w-8 md:text-base lg:w-full lg:justify-start"
                            >
                                <ApplicationLogo width={36} height={36} />
                                <span className="hidden lg:block">
                                    Code With Asif
                                </span>
                            </Link>
                            <Sidebar />
                            {/* <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center gap-0 rounded-full bg-background px-0 py-2 text-base font-semibold text-primary dark:bg-[#272B30] dark:text-primary md:h-8 md:w-8 lg:h-11 lg:w-full lg:justify-start lg:gap-2 lg:px-4"
                                        >
                                            <Home className="h-5 w-5" />
                                            <span className="hidden lg:block">
                                                Dashboard
                                            </span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        Dashboard
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center gap-0 rounded-full px-0 py-2 text-base font-semibold text-primary dark:text-primary md:h-8 md:w-8 lg:h-11 lg:w-full lg:justify-start lg:gap-2 lg:px-4"
                                        >
                                            <Calendar className="h-5 w-5" />
                                            <span className="hidden lg:block">
                                                Course Calendar
                                            </span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        Course Calendar
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider> */}
                        </nav>
                        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                            <ToggleSwitch />
                        </nav>
                    </aside>
                    <div className="relative left-0 top-0 flex w-full flex-col bg-background text-[#444444] dark:bg-background dark:text-[#FCFCFC] sm:left-14 sm:w-[calc(100vw-3.5rem)] lg:left-72 lg:w-[calc(100vw-18rem)]">
                        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-foreground px-4 py-4 dark:bg-foreground sm:static sm:h-auto sm:border-0">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="sm:hidden"
                                    >
                                        <PanelLeft className="h-5 w-5" />
                                        <span className="sr-only">
                                            Toggle Menu
                                        </span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="left"
                                    className="sm:max-w-xs"
                                >
                                    <nav className="grid gap-6 text-lg font-medium">
                                        <Link
                                            href="#"
                                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                        >
                                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                            <span className="sr-only">
                                                Acme Inc
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Home className="h-5 w-5" />
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-foreground"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Orders
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Package className="h-5 w-5" />
                                            Products
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Users2 className="h-5 w-5" />
                                            Customers
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <LineChart className="h-5 w-5" />
                                            Settings
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>

                            <div className="relative ml-auto flex-1 md:grow-0">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-full"
                                    >
                                        <img
                                            src="/placeholder-user.jpg"
                                            width={36}
                                            height={36}
                                            alt="Avatar"
                                            className="overflow-hidden rounded-full"
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </header>
                        <main className="w-full px-4 py-4">{children}</main>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}
