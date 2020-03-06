<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
     <tab-control :titles="['流行','精选','新款']" @controlClick="controlClick" class="tab-control" 
     ref="controla" v-show="isFixed"/>
      <scroll class="content" ref="scroll" :probeType="3" @scroll="conScroll" :pull-up-load="true" 
      @pullingUp="pullingup">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" width="100%" height="150px">
          <van-swipe-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="" @load="loadImg">
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
        
        <tab-control :titles="['流行','精选','新款']" @controlClick="controlClick" ref="controlb"/>
    
        <goods-list :goods="goods[counter].list"/>
      </scroll>
      <back-top @click.native="topClick" v-show="isShow"/>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import TabControl from 'components/content/TabControl.vue'
import goodsList from 'components/content/goodsList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/BackTop.vue'

import {getHomeMultidata,getHomeList} from 'network/home.js'

export default {
  name:'Home',
  components:{
    Navbar,
    TabControl,
    goodsList,
    Scroll,
    BackTop
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
      counter:'pop',
      isShow:false,
      isFixed:false,
      tabSetTop:0,
      scrollY:0
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.scrollY = this.$refs.scroll.scrollY()
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
  mounted(){
    const refresh = this.debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('imgLoad',() => {
    // this.$refs.scroll.refresh()
      refresh()
    })
  },
  methods:{
    loadImg(){
      this.tabSetTop = this.$refs.controlb.$el.offsetTop
    },
    debounce(func,delay){
      let timer = null
      return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    },
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
      this.$refs.controla.crunt = index
      this.$refs.controlb.crunt = index
    },
    getHomeList(type){
      const page = this.goods[type].page + 1
      getHomeList(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    topClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    conScroll(position){
      // this.isShow = -(position.y) > 1000
      if(-(position.y) > 1000){
        this.isShow = true
      }else{
        this.isShow = false
      }

      if(-(position.y) > this.tabSetTop){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    },
    pullingup(){
      this.getHomeList(this.counter)
    }
  }
}
</script>

<style scoped>
  #home{
    position: relative;
    height:100vh;
  }

  .home-nav{
    background:#eb4450;
    color:#fff;
    /* position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:9; */
  }

  /* .my-swipe{
    padding-top:44px;
  } */
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

  .content{
    position:absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
    overflow:hidden;
  }

  .tab-control{
    position: relative;
    z-index:9;
  }

</style>