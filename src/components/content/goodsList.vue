<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :itemList="item"/>
  </div>
</template>

<script>
import goodsItem from 'components/content/goodsItem.vue'
export default {
  name:'goodsList',
  props:{
    goods:{
      type:Array
    }
  },
  components:{
    goodsItem
  }
}
</script>

<style>
  .goods{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:2px;
  }
</style>