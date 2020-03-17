export default{
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      let oldProduct = null
      for(let item of context.state.cartList){
        if(item.id === payload.id){
          oldProduct = item
        }
      }
      if(oldProduct){
        // oldProduct.count += 1
        context.commit('cartAdd',oldProduct)
        resolve('当前商品+1')
      }else{
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('加入购物车')
      }
    })
  }
}