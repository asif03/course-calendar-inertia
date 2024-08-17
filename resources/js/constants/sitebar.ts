import { SidebarMenuItem } from "@/types";
import { CalendarCog, Home, ListChecks, CalendarClock } from "lucide-react";

export const sidebarMenu: SidebarMenuItem[] = [
    {
        title: "Dashboard",
        icon: Home,
        path: "/dashboard",
    },
    {
        title: "Course Calendar",
        icon: CalendarCog, // Replace with the appropriate icon
        children: [
            {
                title: "Progam",
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
];
