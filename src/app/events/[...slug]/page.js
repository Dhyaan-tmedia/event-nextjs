'use client'
import { getFilteredEvents } from "@/app/dummy-data";
import { usePathname,useParams } from "next/navigation";
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
        return <p>Invalid Filter.please adjust your values</p>
    }
    const FilteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth,
    });
    if(!FilteredEvents || FilteredEvents.length===0)
    {
        return <p>No events found for the choosen filter</p>
    }
    return (<div>
        <h1>FilteredEvents</h1>
    </div>
    );
}
