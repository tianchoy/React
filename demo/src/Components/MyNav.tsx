import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

class MyNav extends Component{
    render(): ReactNode {
        return(
            <>
                <Link to={'/'} >首页</Link>
                <Link to={'/tianqi'}>天气情况</Link>
            </>
        )
    }
}

export default MyNav