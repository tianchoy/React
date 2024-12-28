import React, { ReactNode } from "react";
import useStore from "../Store/Store";

class Counts extends React.Component<any> {
    state = {
        count: useStore.getState().count,
        increment: useStore.getState().increment,
        decrement: useStore.getState().decrement,
    };

    unsubscribe = null as any;

    componentDidMount() {
       this.unsubscribe =  useStore.subscribe((state) => {
            this.setState({
                count: state.count,
            })
        })
    }
    componentWillUnmount() {
        if(this.unsubscribe){
            this.unsubscribe();
        }
        
    }

    render(): ReactNode {
        return (
            <>
                <h1>this is {this.state.count}</h1>
                <button onClick={this.state.increment}>increment</button>
                <button onClick={this.state.decrement}>decrement</button>
            </>
        )
    }
}

export default Counts