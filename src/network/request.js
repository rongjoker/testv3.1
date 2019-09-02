import axios from 'axios'
import vue from 'vue';
import router from '@/router/index.js';
import { resolve } from 'path';
import { rejects } from 'assert';


export function getAjax(url, params){

  return new Promise((resolve,reject)=>{

    req({
      'url':url,
      'method': 'GET',
      'params':params
    }
  
    ).then(res=>{
      resolve(res)
    })

  }

  );


}

export function post(url, params){

  return new Promise((resolve,reject)=>{

    req({
      'url':url,
      'method': 'POST',
      'data':params
    }
  
    ).then(res=>{
      resolve(res)
    },err=>{
      reject(err)
    })

  }

  );


}



export function req(config,success,failure){

  const instance = axios.create({
    baseURL: 'http://localhost:9999/',
    timeout: 5000
  }
  );

  instance.interceptors.request.use(config =>{
    if (undefined != sessionStorage.getItem("userId")) {
      config.headers.userId = sessionStorage.getItem("userId");
    }

    if (config.method === 'get') {
      let timestamp = new Date().getTime();
      config.params['tamp'] = timestamp;
    }


    return config;
  },err=>{
    console.log('err: ', err);
  }
  )

  instance.interceptors.response.use(res=>{
    if (res == undefined) {
      return
    }
    if (res.data.err_code == "00000") {
      return res.data;
    } else if (res.data.err_code == "10003") {
      vue.prototype.$alert(res.data.err_msg, '错误', {
        confirmButtonText: '确定',
        callback: action => {
  
          router.push({
            path: "/login"
          })
  
        }
      })
  
  
    }

  },error=>{})

  console.log('config: ', config);

  return instance(config);

}