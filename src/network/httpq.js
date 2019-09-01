// 查询状态的请求
import  {getAjax,post}  from './request';

export function appStatus(){
  return getAjax('sfa-app/status');
}

export function login(param){
  return post('login',param)
}


