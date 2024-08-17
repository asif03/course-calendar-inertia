import { sidebarMenu } from "@/constants/sitebar";
import { SidebarMenuItem } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

const Sidebar = () => {
    const { url, component } = usePage();
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleMenuItem = (index: string) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems,
            [index]: !prevOpenItems[index],
        }));
    };

    const renderMenuItems = (items: SidebarMenuItem[], level = 0) => {
        return items.map((item, index) => (
            <div
                key={`${item.title}-${level}-${index}`}
                className="menu-item flex h-auto w-full flex-col items-center justify-center"
            >
                {item.children && (
                    <div
                        className={`flex h-9 w-9 items-center justify-center gap-0 rounded-full px-0 py-2 text-base font-semibold text-primary dark:text-primary md:h-8 md:w-8 lg:h-11 lg:w-full lg:justify-start lg:gap-2 lg:px-4`}
                        onClick={() =>
                            item.children && toggleMenuItem(`${level}-${index}`)
                        }
                    >
                        <div className="hidden w-full flex-col lg:block">
                            <div className="flex w-full flex-row items-center justify-between">
                                <div className="flex flex-row gap-2">
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.title}</span>
                                </div>

                                {item.children &&
                                    (openItems[`${level}-${index}`] ? (
                                        <ChevronDown className="h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4" />
                                    ))}
                            </div>
                        </div>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="block w-full flex-col items-center justify-center lg:hidden">
                                    <div className="block w-full flex-row items-center justify-center lg:hidden lg:justify-between">
                                        <div className="flex flex-row items-center justify-center gap-2">
                                            <item.icon className="h-5 w-5" />
                                            <span className="hidden">
                                                {item.title}
                                            </span>
                                        </div>
                                        {item.children &&
                                            (openItems[`${level}-${index}`] ? (
                                                <ChevronDown className="hidden h-4 w-4 lg:block" />
                                            ) : (
                                                <ChevronRight className="hidden h-4 w-4 lg:block" />
                                            ))}
                                    </div>
                                </div>
                            </HoverCardTrigger>

                            <HoverCardContent className="relative -top-5 left-10 z-50 block h-auto w-14 overflow-hidden lg:hidden">
                                {item.children && (
                                    <div className="flex w-full flex-col items-center justify-start gap-2">
                                        {renderMenuItems(
                                            item.children,
                                            level + 1,
                                        )}
                                    </div>
                                )}
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                )}
                {item.children && openItems[`${level}-${index}`] && (
                    <div className="hidden w-full flex-col items-center justify-start gap-2 pl-6 lg:block">
                        {renderMenuItems(item.children, level + 1)}
                    </div>
                )}

                {!item.children && item.path && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.path}
                                    className={
                                        url === item.path
                                            ? `flex h-9 w-9 items-center justify-center gap-0 rounded-full bg-background px-0 py-2 text-base font-semibold text-primary dark:text-primary md:h-8 md:w-8 lg:h-11 lg:w-full lg:justify-start lg:gap-2 lg:px-4`
                                            : `flex h-9 w-9 items-center justify-center gap-0 rounded-full px-0 py-2 text-base font-semibold text-primary dark:text-primary md:h-8 md:w-8 lg:h-11 lg:w-full lg:justify-start lg:gap-2 lg:px-4`
                                    }
                                >
                                    <div className="hidden w-full lg:block">
                                        <div className="flex w-full flex-row items-center gap-2">
                                            <item.icon className="h-5 w-5" />
                                            <span className="block">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="block lg:hidden">
                                        <item.icon className="h-5 w-5" />
                                        <span className="hidden">
                                            {item.title}
                                        </span>
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <div className="block lg:hidden">
                                <TooltipContent side="right">
                                    {item.title}
                                </TooltipContent>
                            </div>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
        ));
    };

    return (
        <div className="flex w-full flex-col gap-2">
            {renderMenuItems(sidebarMenu)}
        </div>
    );
};

export default Sidebar;
