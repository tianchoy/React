import React, { ReactNode } from "react";
import { Button } from "antd";

interface myBtnProps {
    BtnClick?: () => void;
    BtnTtitle: string;
    btnDisabled?: boolean;
    types: "link" | "text" | "default" | "primary" | "dashed";
    htmlType?: "button" | "submit" | "reset";
}

class MyButton extends React.Component<myBtnProps> {
    render(): ReactNode {
        return (
            <>
                <Button
                    disabled={this.props.btnDisabled}
                    onClick={this.props.BtnClick}
                    type={this.props.types}
                    htmlType={this.props.htmlType}
                >
                    {this.props.BtnTtitle}
                </Button>
            </>
        )
    }
}
export default MyButton