<template>
  <div class="cart-list">
    <cart-item v-for="(item,index) in cartList" :key="index" :itemInfo="item"/>
  </div>
</template>

<script>
import cartItem from './cartItem'

import {mapGetters} from 'vuex'

export default {
  name:'cartList',
  components:{
    cartItem
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
 
</style>