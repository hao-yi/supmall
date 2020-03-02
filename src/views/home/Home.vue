<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" width="100%" height="150px">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
    </van-swipe>

    <div class="recom">
      <ul>
        <li v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
        </li>
      </ul>
    </div>

    <div class="features">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg" alt="">
      </a>
    </div>
    
    <van-sticky :offset-top="44">
      <tab-control :titles="['流行','精选','新款']" @controlClick="controlClick"/>
    </van-sticky>

    <goods-list :goods="goods[counter].list"/>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import TabControl from 'components/content/TabControl.vue'
import goodsList from 'components/content/goodsList.vue'

import {getHomeMultidata,getHomeList} from 'network/home.js'
export default {
  name:'Home',
  components:{
    Navbar,
    TabControl,
    goodsList
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      counter:'pop'
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    }),
    this.getHomeList('pop')
    this.getHomeList('new')
    this.getHomeList('sell')
  },
  methods:{
    controlClick(index){
      switch(index){
        case 0:
          this.counter = 'pop';
          break;
        case 1:
          this.counter = 'new';
          break;
        case 2:
          this.counter = 'sell';
          break;
      }
    },
    getHomeList(type){
      const page = this.goods[type].page + 1
      getHomeList(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style>
  .home-nav{
    background:#eb4450;
    color:#fff;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:9;
  }

  .my-swipe{
    padding-top:44px;
  }
  .my-swipe .van-swipe-item img{
    width:100%;
    height:100%;
  }

  .recom{
    width:100%;
    border-bottom:8px solid #eee;
  }
  .recom ul{
    display:flex;
    text-align:center;
    font-size:12px;
  }
  .recom ul li{
    flex:1;
    padding:10px 0 15px 0;
  }
  .recom ul li a{
    color:#2f2d2d;
  }
  .recom ul li img{
    padding-bottom:5px;
    width:65px;
    height:65px;
  }

  .features img{
    width:100%;
    height:100%;
  }
</style>