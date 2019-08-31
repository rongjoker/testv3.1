import axios from 'axios'


export function req(config){

  const instance = axios.create({
    baseURL: 'https://apimarket-dev.shinho.net.cn/',
    timeout: 5000


  }
  );

  instance.interceptors.request.use(config =>{
    return config;
  },err=>{
    console.log('err: ', err);
  }
  )

  instance.interceptors.response.use(res=>{
    console.log('res: ', res.status);
    return res.data;
  },error=>{})


}