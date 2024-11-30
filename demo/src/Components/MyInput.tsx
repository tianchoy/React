import {Component} from "react";

class MyInput extends Component<any, any>{
    render() {
        return (
            <input
            type="text"
            value={this.props.value}
            onChange={this.props.inputChangeValue}
            placeholder={this.props.placeholder}
            />
        );
    }
}

export default MyInput;