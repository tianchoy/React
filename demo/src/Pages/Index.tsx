import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    render(): ReactNode {
        return(
            <>
                <h1>this is Home</h1>
                <Link to='/tianqi'>天气预报</Link>
            </>
        )
    }
}

export default Home