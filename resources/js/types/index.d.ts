import type { LucideIcon } from "lucide-react";

export interface SidebarMenuItem {
    title: string;
    icon: LucideIcon;
    path?: string;
    children?: SidebarMenuItem[];
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface IProgram {
    id: bigint;
    department: string;
    title: string;
    fee: number;
    notice: string;
    courseStatus: string;
    attachment: string;
    status: string;
}
