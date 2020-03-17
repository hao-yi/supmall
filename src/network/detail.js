import request from 'network/request.js'
export function getDetail(iid){
  return request({
    url:'http://123.207.32.32:8000/api/wh/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'http://123.207.32.32:8000/api/wh/recommend',
  })
}