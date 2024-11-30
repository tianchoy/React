import React,{  ReactNode } from "react";

class Clock extends React.Component<any,any>{
    timerID: object | any;
    constructor(props:any){
        super(props);
        this.state={
            date: new Date()
        }

    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.timer(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    timer(){
        this.setState({date: new Date()})
    }
    render(): ReactNode {
        return(
            <>
                <p>现在时间：{this.state.date.toLocaleTimeString()}</p>
            </>
        )
    }
}

export default Clock