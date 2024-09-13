import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import ApplicationLogo from "./ApplicationLogo";
import { usePage } from "@inertiajs/react";
import ResponsiveNavLink from "./ResponsiveNavLink";

const MobileMenu = ({ className }) => {
    const { company } = usePage().props;
    return (
        <div className={cn(className)}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={null} className="m-0 p-0">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>
                            <ApplicationLogo
                                logoUrl={company.logoDashboard}
                                logoWidth={company.logoWidthDashboard}
                                logoHeight={company.logoHeightDashboard}
                            />
                            {company.name}
                        </SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <ul className="flex flex-col gap-4 font-bold">
                            <li>
                                <ResponsiveNavLink href="/">
                                    Home
                                </ResponsiveNavLink>
                            </li>
                            <li>
                                <ResponsiveNavLink href="/">
                                    Events
                                </ResponsiveNavLink>
                            </li>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileMenu;
