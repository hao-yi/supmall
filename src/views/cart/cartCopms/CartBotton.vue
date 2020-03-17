<template>
  <div class="cart-botton">
    <div class="check-content">
      <check-button class="check-button" :isChecked="selected" @click.native="chenkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calClick">
      结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkbutton/CheckButton' 
export default {
  name:'CartBotton',
  components:{
    CheckButton
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.check
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => {
        return item.check
      }).length
    },
    selected(){
      if(this.$store.state.cartList.length === 0){
        return false
      }
      return !(this.$store.state.cartList.find(item => !item.check))
    }
  },
  methods:{
    chenkClick(){
      if(this.selected){
        this.$store.state.cartList.forEach(item => item.check = false)
      }else{
        this.$store.state.cartList.forEach(item => item.check = true)
      }
    },
    calClick(){
      if(this.$store.state.cartList.length === 0){
        this.$toast.show('请添加商品')
      }
    }
  }
}
</script>

<style>
  .cart-botton{
    display:flex;
    height:40px;
    background:#fff;
    position: relative;
    line-height:40px;
  }
  .check-content{
    display:flex;
    align-items: center;
    margin-left:10px;
  }
  .check-button{
    width:20px;
    height:20px;
    line-height:10px;
    margin-right:5px;
    width:60px;
  }
  .price{
    margin-left:30px;
    flex:1;
  }
  .calculate{
    width:90px;
    text-align:center;
    background:#eb4450;
  }
</style>