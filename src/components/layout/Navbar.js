import { Fragment } from "react";
import MainHeader from "./main-header";

export default function Navbar(props){
    return <Fragment>
        <header><MainHeader/></header>
        <main>
            {props.children} 
        </main>
    </Fragment>
}