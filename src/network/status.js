// 查询状态的请求
import  {req} from './request';

export function appStatus(){
  return req({
    url: 'sfa-app/status',
    method: 'GET'
  });
}

