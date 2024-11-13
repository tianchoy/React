import { Component, ReactNode } from "react";
import MyNav from "../Components/MyNav";

class Home extends Component{
    render(): ReactNode {
        return(
            <>
                <h1>this is Home</h1>
                <MyNav/>
            </>
        )
    }
}

export default Home