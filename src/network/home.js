import request from 'network/request.js'
 export function getHomeMultidata(){
   return request ({
     url:'http://123.207.32.32:8000/home/multidata',
   })
 }
 export function getHomeList(type,page){
  return request ({
    url:'http://106.54.54.237:8000/api/wh/home/data',
    timeout:5000,
    params:{
      type,
      page
    }
  })
}