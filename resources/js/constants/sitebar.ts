import { SidebarMenuItem } from "@/types";
import {
    CalendarCog,
    Home,
    ListChecks,
    CalendarClock,
    UsersRound,
} from "lucide-react";

export const sidebarMenu: SidebarMenuItem[] = [
    {
        title: "Dashboard",
        icon: Home,
        path: "/dashboard",
    },
    {
        title: "Course Settings",
        icon: CalendarCog, // Replace with the appropriate icon
        children: [
            {
                title: "Programs",
                icon: ListChecks,
                path: "/course-calendar/programs",
            }, // Replace with appropriate icons
            {
                title: "Schedule",
                icon: CalendarClock,
                path: "/course-calendar/schedules",
            },
        ],
    },
    {
        title: "Applicants",
        icon: UsersRound, // Replace with the appropriate icon
        path: "/application/applicants",
    },
];
