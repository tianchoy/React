import { Component, ReactNode } from "react";
import MyNav from "../Components/MyNav";
import Form from "../Components/Form";

class Home extends Component {
    handleSubmit = (values: any) => {
        console.log(values)
    }
    render(): ReactNode {
        return (
            <>
                <h1>this is Home</h1>
                <MyNav />
                <Form onSubmit={this.handleSubmit}/>
            </>
        )
    }
}

export default Home