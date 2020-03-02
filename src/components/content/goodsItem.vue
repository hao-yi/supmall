<template>
  <div class="goods-item">
    <img :src="itemList.show.img" alt="">
    <div class="goods-items">
      <p class="title">{{itemList.title}}</p>
      <span class="price">{{'￥'+ itemList.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'goodsItem',
  props:{
    itemList:{
      type:Object
    }
  }
}
</script>

<style>
  .goods-item{
    width:48%;
    font-size:5px;
    position:relative;
  }
  .goods-item img{
    width:100%;
    border-radius:3%;
  }
  .goods-items .price{
    text-align:center;
    color:#eb4450;
  }
  .goods-items .title{
    white-space:nowrap;/* 规定文本是否折行 */  
    overflow: hidden;/* 规定超出内容宽度的元素隐藏 */
    text-overflow: ellipsis;
  }
</style>