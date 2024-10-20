import React, { ReactNode } from "react";
import MyButton from "./Mybutton";
class MyName extends React.Component<{ names: string, hits: string, tofather: Function }, { data: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: "hello,father!",
        }
    }
    sendFather = () => {
        this.props.tofather(this.state.data)
    }
    getInput = (e: any) => {
        this.setState({ data: e.target.value })
    }
    render(): ReactNode {
        return (
            <>
                <h2>this is child</h2>
                <div>{this.props.names}-{this.props.hits}</div>
                <input type="text" onChange={this.getInput} />
                <MyButton ButtonClick={this.sendFather} ButtoTtitle="toFather" />
            </>
        )
    }
}

export default MyName