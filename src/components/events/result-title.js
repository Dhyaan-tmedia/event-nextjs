import classes from './resutls-title.module.css';
import Button from '../ui/button';
export default function ResultsTitle(props){
    const {date} =props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        month:'long',
        year: 'numeric',
    });
    return(
        <section className={classes.title}>
            <h1>
                Events in {humanReadableDate}
            </h1>
            <Button link='/events'>Show all events</Button>
        </section>
    );
}