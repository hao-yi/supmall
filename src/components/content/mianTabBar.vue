<template>
  <TabBar>
      <TabBaritem path="/home">
        <img slot="item-iocn" src="~assets/img/tarbar/home.png" alt="">
        <img slot="item-active" src="~assets/img/tarbar/home-o.png" alt="">
        <div slot="item-text">首页</div>
      </TabBaritem>
      <!-- <TabBaritem path="/category">
        <img slot="item-iocn" src="~assets/img/tarbar/category.png" alt="">
        <img slot="item-active" src="~assets/img/tarbar/category-o.png" alt="">
        <div slot="item-text">分类</div>
      </TabBaritem> -->
      <TabBaritem path="/cart">
        <img slot="item-iocn" src="~assets/img/tarbar/cart.png" alt="">
        <img slot="item-active" src="~assets/img/tarbar/cart-o.png" alt="">
        <div slot="item-text">购物车</div>
      </TabBaritem>
      <TabBaritem path="/my">
        <img slot="item-iocn" src="~assets/img/tarbar/my.png" alt="">
        <img slot="item-active" src="~assets/img/tarbar/my-o.png" alt="">
        <div slot="item-text">我的</div>
      </TabBaritem>
    </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar.vue'
import TabBaritem from 'components/common/tabbar/Tabbar-item'
export default {
  name:'mianTabBar',
  components:{
    TabBar,
    TabBaritem
  }
}
</script>

<style>

</style>