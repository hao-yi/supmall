import request from 'network/request.js'
export function getDetail(iid){
  return request({
    url:'http://123.207.32.32:8000/api/wh/detail',
    timeout:5000,
    params:{
      iid
    }
  })
}