import React from "react";
import MyButton from "../Components/Mybutton";
import Clock from "../Components/Clock";
import {getCity,getWeather} from "../Api/Index"

class Tianqi extends React.Component<any,any> {

    constructor(props: any) {
        super(props)
        this.state = {
            cityCode:'',
            tianqiList: [],
            list: [],
            detail:[]
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
        console.log(res)
        this.setState({cityCode:res.code})

        const weatherInfo:any = await getWeather(res.code)
        console.log(weatherInfo)
    }



    componentDidMount(): void {
        // this.getTianqi()
        this.getPosition()
    }
    render(): React.ReactNode {
        return (
            <>
                <h3>天气情况</h3>
                <h4>当前城市：{this.state.tianqiList.province}{this.state.tianqiList.city},< Clock/>,更新时间：{this.state.list.forecasttime}</h4>
                <MyButton ButtonClick = { this.btClick} ButtoTtitle="tqClick"/>
            </>
        )
    }
}

export default Tianqi