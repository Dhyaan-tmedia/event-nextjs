import EventItem from "./event-Item";
import classes from './event-list.module.css';
export default function EventList(props){
    const {items} = props;
    //we can also directly use props.items in return
    return(<ul className={classes.list}>
        {items.map(event=><EventItem 
        key={event.id}
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}/>)}
    </ul>);
}