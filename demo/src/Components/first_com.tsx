import React, { ReactNode } from "react";
import MyButton from "./MyButton";
interface FirProps {
    names: string,
    hits: string,
    tofather: Function
}
class MyName extends React.Component<FirProps,any> {
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
                <MyButton types="default" BtnClick={this.sendFather} BtnTtitle="toFather" />
            </>
        )
    }
}

export default MyName