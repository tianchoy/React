import React from "react";
import MyNav from "../Components/MyNav";
import MyForm from "../Components/MyForm";
import Counts from "./Counts";
import ShopCar from "./ShopCar/ShopCar";

const Home: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("index:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("index:", errorInfo);
  };

  const test = <T,>(parms:T)=>{
    console.log(parms)
  }
  const handClick = ()=>{
    test(111)
  }
  return (
    <>
      <h1>this is Home</h1>
      <div className={`aa bb cc`} onClick={handClick}> test</div>
      <MyNav />
      <Counts />
      <hr />
      <ShopCar />
      <MyForm
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      />
    </>
  )
}

export default Home;
