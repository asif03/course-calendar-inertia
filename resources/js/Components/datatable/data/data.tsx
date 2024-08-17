import { CircleIcon } from "lucide-react";

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
];

export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: CircleIcon,
    },
    {
        value: "todo",
        label: "Todo",
        icon: CircleIcon,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: CircleIcon,
    },
    {
        value: "done",
        label: "Done",
        icon: CircleIcon,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: CircleIcon,
    },
];

export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: CircleIcon,
    },
    {
        label: "Medium",
        value: "medium",
        icon: CircleIcon,
    },
    {
        label: "High",
        value: "high",
        icon: CircleIcon,
    },
];
