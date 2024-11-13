import process from "process";

const devBaseURL = 'http://www.nmc.cn/rest/';
const proBaseURL = 'http://www.nmc.cn/rest/';


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;


