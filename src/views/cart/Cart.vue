<template>
  <div id="cart">
    <navbar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <scroll class="content" :pullUpLoad="true" @pullingUp="pullingUp" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-botton/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import Navbar from 'components/common/navbar/Navbar.vue'
import cartList from './cartCopms/cartList'
import CartBotton from './cartCopms/CartBotton'

import {mapGetters} from 'vuex'

export default {
  name:'Cart',
  components:{
    Navbar,
    cartList,
    Scroll,
    CartBotton
  },
  computed:{
    ...mapGetters(['cartLength'])
  },
  methods:{
    pullingUp(){
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  #cart{
    height:100vh;
  }
  .cart-nav{
    background:#eb4450;
    color:#fff;
  }
  .content{
    height:calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>