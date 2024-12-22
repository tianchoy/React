const config = {
    BASE_URL: process.env.NODE_ENV === 'production' ? 'http://www.nmc.cn/rest/' : 'http://www.nmc.cn/rest/',
    TIMEOUT: 5000,
  };
  
  export default config;
