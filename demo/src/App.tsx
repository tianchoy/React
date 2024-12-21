import React, { ReactNode } from "react";
import MyName from './Components/first_com'
import MyButton from "./Components/MyButton";

class App extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
      childVal: '',
      name: 'tianchao',
      hits: '',
      count: 0
    }
  }
  getData = (e: string) => {
    this.setState({ childVal: e })
  }
  clicked = () => {
    this.setState({ count: this.state.count + 2 })
  }
  changeInputValue = (e: any) => {
    this.setState({ inputValue: e.target.value })

  }
  render(): ReactNode {
    return (
      <>
        <h1>hello</h1>
        <hr />
        <MyName
          names={this.state.name}
          hits={this.state.inputValue}
          tofather={this.getData}
        />
        <hr />
        <p>father</p>
        <div className="card">
          <button onClick={this.clicked}>
            count is {this.state.count}
          </button>
          <p>{this.state.inputValue}</p>
          <input onChange={this.changeInputValue} />
          <p>from child value :{this.state.childVal}</p>
        </div>
        <hr />
        <MyButton ButtonClick={this.clicked} ButtoTtitle="appClick" />
      </>
    )
  }
}

export default App