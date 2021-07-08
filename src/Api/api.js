const service = axios.create({
  baseURL:"",
  timeout:100000,
  headers:{
      "Content-Type": "application/json;charset=UTF-8",
  }
});
//请求拦截
service.interceptors.request.use(function(config){
return config;
});
// 响应拦截器
service.interceptors.response.use(function(res){
return res;
});
export function post(url,data){
  return new Promise((resolve, reject) => {
      service.post(url, {data})
      .then(res=>{
          resolve(res.data);
      })
      .catch(err=>{
          reject(err);
      })            
  })
}

// get请求的封装
export function get(url,params){
  let p = params || {}
  return new Promise((resolve, reject) => {
      service.get(url, {params:p})
      .then(res=>{
          resolve(res.data);
      })
      .catch(err=>{
          reject(err);
      })            
  })
}
