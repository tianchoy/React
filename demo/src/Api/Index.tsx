import instance from "./Api.tsx";

 export const getCity = ()=>{
    return instance({
        url:'position'
    })
}

 export const getWeather = (code:string)=>{
    return instance({
        url:'weather?stationid='+ code
    })
}

export default {
     getCity,
    getWeather
}