export default {
  cartAdd(state,payload){
    payload.count += 1
  },
  addToCart(state,payload){
    payload.check = true
    state.cartList.push(payload)
  }
 }