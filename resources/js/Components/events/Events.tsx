import { useState } from "react";
import { Button } from "@/Components/ui/button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
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
                    <div className="w-full">
                        <FullCalendar
                            contentHeight={700}
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            events={events}
                            weekends={true}
                        />
                    </div>
                )}
                {calendarView == "list" && (
                    <div className="w-full">
                        <FullCalendar
                            plugins={[multiMonthPlugin]}
                            initialView="multiMonthYear"
                            events={events}
                            /*weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
