import EventItem from "./event-Item";
export default function EventList(props){
    const {items} = props;
    //we can also directly use props.items in return
    return(<ul>
        {items.map(event=><EventItem 
        key={event.id}
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}/>)}
    </ul>);
}