import request from "./Api.tsx";

import { config } from "./Config.tsx";

 export const getCity = ()=>{
    return request.get(config.position)
}

 export const getWeather = (code:string)=>{
    return request.get(config.getWeather+code)
}

export default {
     getCity,
    getWeather
}