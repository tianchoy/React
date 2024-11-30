import React from "react";
import MyButton from "../Components/Mybutton";
import Clock from "../Components/Clock";
import {getCity,getWeather} from '../Api/Index'
import MyInput from "../Components/MyInput.tsx";

class Tianqi extends React.Component<any,any> {

    constructor(props: any) {
        super(props)
        this.state = {
            cityInfo:'',
            weatherInfos:'',
        }
    }

    btClick=()=>{
        console.log('aaaa');
        
    }

    // getTianqi = async () => {
    //     await axios.get('http://v1.yiketianqi.com/free/month?unescape=1&appid=29317256&appsecret=4KJy7rNq')
    //         .then(res => {
    //             this.setState({ tianqiList: res.data, list: res.data.data })
    //         })
    // }

    getPosition = async ()=>{
        const  res:any = await getCity()
        this.setState({cityInfo:res})

        const weatherInfo:any = await getWeather(res.code)
        console.log(weatherInfo.data)
        this.setState({weatherInfos:weatherInfo.data.real.weather})
    }

    handleChange=(e:any)=>{
        console.log(e.target.value)
    }



    componentDidMount(): void {
        // this.getTianqi()
        this.getPosition()
    }
    render(): React.ReactNode {
        return (
            <>
                <h3>天气情况</h3>
                <h4>当前城市：{this.state.cityInfo.province}{this.state.cityInfo.city},< Clock/></h4>
                <h5>
                    当前天气:{this.state.weatherInfos.info},
                    当前温度:{this.state.weatherInfos.temperature},
                    相对湿度:{this.state.weatherInfos.humidity},
                </h5>
                <MyInput placeholder={'请输入要查询的城市'} inputChangeValue={this.handleChange} />
                <MyButton ButtonClick = { this.btClick} ButtoTtitle="天气"/>
            </>
        )
    }
}

export default Tianqi