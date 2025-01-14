import React from "react";
import MyButton from "../Components/MyButton.tsx";
import Clock from "../Components/Clock";
import { getCity, getWeather } from "../Api/Index.tsx";
import MyInput from "../Components/MyInput.tsx";
import MyNav from "../Components/MyNav.tsx";
import Counts from "./Counts.tsx";

type Props = {
    province: string,
    city: string,
    info: string,
    temperature: string,
    humidity: string,
    cityInfo: {};
    weatherInfos: {};
};

const Tianqi:React.FC = () => {
    const [cityInfo, setCityInfo] = React.useState({} as Props)
    const [weatherInfos, setWeatherInfos] = React.useState({} as Props)
    React.useEffect(() => {
        getPosition()
    }, [])

    const btClick = () => {
        console.log('aaaa');

    }

    // getTianqi = async () => {
    //     await axios.get('http://v1.yiketianqi.com/free/month?unescape=1&appid=29317256&appsecret=4KJy7rNq')
    //         .then(res => {
    //             this.setState({ tianqiList: res.data, list: res.data.data })
    //         })
    // }

    const getPosition = async () => {
        const res: any = await getCity()
        setCityInfo(res )

        const weatherInfo: any = await getWeather(res.code)
        setWeatherInfos( weatherInfo.data.real.weather )
    }

    const handleChange = (e: any) => {
        console.log(e.target.value)
    }

    return (
        <>
            <h1>weather's Info</h1>
            <MyNav />
            <Counts />
            <h4>当前城市：{cityInfo.province}{cityInfo.city},< Clock /></h4>
            <h5>
                当前天气:{weatherInfos.info},
                当前温度:{weatherInfos.temperature},
                相对湿度:{weatherInfos.humidity},
            </h5>
            <MyInput disabled={false} placeholder={'请输入要查询的城市'} value={''} inputChangeValue={handleChange} />
            <MyButton types={"primary"} BtnClick={btClick} BtnTtitle="天气" />
        </>
    )
}

export default Tianqi