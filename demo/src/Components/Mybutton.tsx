// import { Component, ReactNode } from "react";

// class MyButton extends Component<any>{
//     render(): ReactNode {
//         return(
//             <>
//                 <button onClick={this.props.ButtonClick}> {this.props.ButtoTtitle}</button>
//             </>
//         )
//     }
// }

// export default MyButton

const MyButton = (props:any) => {
    return (
        <>
            <button onClick={props.ButtonClick}> {props.ButtoTtitle}</button>
        </>
    )
}

export default MyButton