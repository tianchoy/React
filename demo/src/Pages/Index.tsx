import { Component, ReactNode } from "react";
import MyNav from "../Components/MyNav";
import MyForm from "../Components/MyForm";
import Counts from "./Counts";
import ShopCar from "./ShopCar/ShopCar";

class Home extends Component {
  handleSubmit = (values: any) => {
    console.log("index:", values);
  };
  onFinishFailed = (errorInfo: any) => {
    console.log("index:", errorInfo);
  };
  render(): ReactNode {
    return (
      <>
        <h1>this is Home</h1>
        <MyNav />
        <Counts />
        <hr />
        <ShopCar />
        <MyForm
          onFinish={this.handleSubmit}
          onFinishFailed={this.onFinishFailed}
        />
      </>
    );
  }
}

export default Home;
