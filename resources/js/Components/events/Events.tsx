import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Separator } from "@/Components/ui/separator";
import { LayoutGrid, LayoutList } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const Events = (events) => {
    const [calendarView, setCalendarView] = useState("grid");
    return (
        <div className="flex h-auto w-full flex-col items-center justify-center py-10">
            <h3 className="text-center text-5xl font-extrabold">
                UPCOMMING EVENTS
            </h3>
            <Separator className="mt-2 h-1 w-20 bg-[#FF7E47] text-center" />
            <div className="flex w-full flex-row items-center justify-end gap-2 py-2 font-bold">
                View
                <Button
                    variant="outline"
                    className={`${calendarView == "grid" ? "bg-[#FF7E47] text-white" : ""} p-1`}
                    onClick={() => setCalendarView("grid")}
                >
                    <LayoutGrid />
                </Button>
                <Button
                    variant="outline"
                    className={`${calendarView == "list" ? "bg-[#FF7E47] text-white" : ""} p-1`}
                    onClick={() => setCalendarView("list")}
                >
                    <LayoutList />
                </Button>
            </div>
            <div className="w-full rounded-lg border-2 p-1">
                {calendarView == "grid" && (
                    <div>
                        <FullCalendar
                            contentHeight={700}
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            events={events}
                        />
                    </div>
                )}
                {calendarView == "list" && (
                    <div className="w-full">
                        <Tabs
                            defaultValue="account"
                            className="w-full bg-slate-500"
                            orientation="vertical"
                            aria-orientation="vertical"
                        >
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">
                                    Account
                                </TabsTrigger>
                                <TabsTrigger value="password">
                                    Password
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">Account</TabsContent>
                            <TabsContent value="password">Password</TabsContent>
                        </Tabs>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
