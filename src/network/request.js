import axios from 'axios'
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
  console.log('config: ', config);

  const instance = axios.create({
    baseURL: 'http://localhost:9999/',
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
    return res.data;
  },error=>{})

  return instance(config);

  //  instance(config).then(
  //    res=>{
  //      console.log('res: ', res);
  //      success(res)
  //    }
  //  ).catch(err=>{
  //    console.log('err: ', err);
  //    failure(err)
  //  })
}