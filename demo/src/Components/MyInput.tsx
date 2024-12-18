import { Component } from "react";
import { Input } from "antd";

interface MyInputProps {
    value: string,
    inputChangeValue: (e: any) => void,
    placeholder: string,
    disabled: boolean,
}

class MyInput extends Component<MyInputProps> {
    render() {
        return (
            <Input
                disabled={this.props.disabled}
                type="text"
                value={this.props.value}
                onChange={this.props.inputChangeValue}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default MyInput;