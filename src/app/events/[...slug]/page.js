'use client'
import { getFilteredEvents } from "@/app/dummy-data";
import { usePathname,useParams } from "next/navigation";
import EventList from "@/components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "@/components/events/result-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
export default function FilteredEventsPage({params}){
    const path = usePathname();
    const filterdata=params.slug;
    console.log(filterdata);
    if(!filterdata)
    {
        return <p className="center">Loading...</p>
    }
    const filteredYear = filterdata[0];
    const filteredMonth = filterdata[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if(isNaN(numYear) || isNaN(numMonth) || numYear>2025 || numYear<2020 || numMonth>12 || numMonth<1)
    {
        return <Fragment><ErrorAlert>Invalid Filter.please adjust your values</ErrorAlert> 
            <center><Button link='/events'>Show all Events</Button></center>
            
        </Fragment>
    }
    const FilteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth,
    });
    if(!FilteredEvents || FilteredEvents.length===0)
    {
        return <Fragment><ErrorAlert>No events found for the choosen filter</ErrorAlert>
            <center></center><Button link='/events'>Show all Events</Button>
        </Fragment>
    }
    const date = new Date(numYear,numMonth-1);
    return (<Fragment>
        <ResultsTitle date={date}/>
        <EventList items={FilteredEvents}/>

        </Fragment>
    );
}
