import React from "react";
import axios from "axios";
import Style from '../assets/tianqi.module.css'
import MyButton from "./Mybutton";
import Clock from "./Clock";

interface wea {
    date: string,
    tem_day: string,
    tem_night: string,
    wea: string,
    wea_day: string,
    wea_night: string,
    win: string
}

class Tianqi extends React.Component<any,any> {

    constructor(props: any) {
        super(props)
        this.state = {
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
        await axios.get('http://www.nmc.cn/rest/position')
        .then((res:any) =>{
            console.log(res.data);
            this.setState({tianqiList: res.data})
             return axios.get('http://www.nmc.cn/rest/weather?stationid='+res.data.code)
            
        })
        .then((res:any)=>{
            console.log(res.data.data);
            this.setState({list: res.data.data.air })
        })
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
                {/* <div>
                    {this.state.list.map((item :wea,index:number) => (
                        <ul className={Style.tqUl} key={index}>
                            <li className={Style.tqLi}>日期：{item.date}</li>
                            <li className={Style.tqLi}>白天温度：{item.tem_day}</li>
                            <li className={Style.tqLi}>晚上温度：{item.tem_night}</li>
                            <li className={Style.tqLi}>总体天气：{item.wea}</li>
                            <li className={Style.tqLi}>白天天气：{item.wea_day}</li>
                            <li className={Style.tqLi}>晚上天气：{item.wea_night}</li>
                            <li className={Style.tqLi}>风力：{item.win}</li>
                        </ul>
                    ))}
                </div> */}
                <MyButton ButtonClick = { this.btClick} ButtoTtitle="tqClick"/>
            </>
        )
    }
}

export default Tianqi