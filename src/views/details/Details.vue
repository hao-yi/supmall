<template>
  <div id="detail" >
    <title-item class="title-item-item" @titleClick="titleClick" ref="titleItem"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="conScroll" 
    :pullUpLoad="true" @pullingUp="pullingUp">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in topImages" :key="index">
          <img v-lazy="'http:' + item" alt="" @load="imgItem">
        </van-swipe-item>
      </van-swipe>
      <div class="detail-center-title">{{detailcenter.title}}</div>
      <span class="lownowprice">{{detailcenter.lowNowPrice}}</span>
      <span class="oldprice">{{detailcenter.oldPrice}}</span>
      <span class="discountdesc">{{detailcenter.discountDesc}}</span>
      <div class="columns">
        <span>{{columns[0]}}</span>
        <span>{{columns[1]}}</span>
        <span>{{columns[2]}}</span>
      </div>

      <div class="services">
        <div class="services-item" v-for="(item,index) in services" :key="index">
          <img v-lazy="'http:' + item.icon" alt="">
          <span>{{item.name}}</span>
        </div>
      </div>

      <div class="information">
        <dir class="shopLogo">
          <a :href="information.shopUrl">
            <img v-lazy="'http:' + information.shopLogo" alt="">
          </a>
        </dir>
        <div class="information-name">{{information.name}}</div>
      </div>

      <div class="score">
        <div class="score-item">
          <span>{{information.score[0].name}}</span>
          <span class="score-item-a">{{information.score[0].score}}</span>
        </div>
        <div class="score-item">
          <span>{{information.score[1].name}}</span>
          <span class="score-item-a">{{information.score[1].score}}</span>
        </div>
        <div class="score-item">
          <span>{{information.score[2].name}}</span>
          <span class="score-item-a">{{information.score[2].score}}</span>
        </div>
      </div>

      <div class="supmll">
        <a :href="information.shopUrl">进入店铺</a>
      </div>

      <div class="detailImage-content">
        <span>{{detailImages.desc}}</span>
        <span>{{detailImages.key}}</span>
      </div>

      <div class="detailImage" v-for="(item,index) in detailImage" :key="index">
        <img v-lazy="'http:' + item" alt="" @load="imgItem">
      </div>

      <table ref="itemparams">
        <tr v-for="(item,index) in itemParams.rule.tables[0]" :key="index">
          <td>{{item[0]}}</td>
          <td class="itemparams">{{item[1]}}</td>
        </tr>
      </table>

      <table>
        <tr v-for="(item,index) in itemParams.info.set" :key="index">
          <td>{{item.key}}</td>
          <td class="itemparams">{{item.value}}</td>
        </tr>
      </table>

      <div class="comments" ref="comments">
        <div class="comments-item">
          <p>用户评论</p>
          <p>更多</p>
        </div>
        <p>{{rate.rateId}}</p>
        <p>{{rate.content}}</p>
        <p>{{rate.style}}</p>
      </div>

      <div class="recommend" ref="recommend">
        <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
          <img v-lazy="item.image" alt="" @load="imgItem">
          <p>{{item.title}}</p>
          <span class="price">{{'￥'+ item.price}}</span>
        </div>
      </div>
    </scroll>
    <back-top class="back-top" @click.native="topClick" v-show="isShow" />
    <van-goods-action class="van-goods-action">
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon icon="cart-o" text="购物车"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import TitleItem from './childer/TitleItem'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/BackTop'

import {getDetail,getRecommend} from 'network/detail.js'
export default {
  name:'Details',
  data(){
    return {
      id:null,
      topImages:[],
      detailcenter:[],
      columns:[],
      services:{},
      information:[],
      detailImage:[],
      detailImages:[],
      itemParams:[],
      rate:[],
      recommend:[],
      isShow:false,
      comsetTop:[0,1000,1500,50000],
      condebounce:null,
      nndex:0,
    }
  },
  components:{
    TitleItem,
    Scroll,
    BackTop,
  },
  created(){
    this.id = this.$route.query.id
    getDetail(this.id).then(res => {
      this.topImages = res.data.result.itemInfo.topImages
      this.detailcenter = res.data.result.itemInfo
      this.columns = res.data.result.columns
      this.services = res.data.result.shopInfo.services
      this.information = res.data.result.shopInfo
      this.detailImage = res.data.result.detailInfo.detailImage[0].list
      this.detailImages = res.data.result.detailInfo.detailImage[0]
      this.itemParams = res.data.result.itemParams
      this.rate = res.data.result.rate.list[0]
      // console.log(res.data.result.itemInfo);
      
    }),
    getRecommend().then(res => {
      this.recommend = res.data.data.list
    })
  },
  methods:{
    pullingUp(){
    },
    imgItem(){
      this.comsetTop = []
      this.comsetTop.push(0)
      this.comsetTop.push(this.$refs.itemparams.offsetTop)
      this.comsetTop.push(this.$refs.comments.offsetTop)
      this.comsetTop.push(this.$refs.recommend.offsetTop)
      this.comsetTop.push(Number.MAX_VALUE)
      this.$refs.scroll.refresh()
    },
    conScroll(position){
      if(-(position.y) > 1000){
        this.isShow = true
      }else{
        this.isShow = false
      }
      let positionY = -position.y
      for (let i = 0; i < this.comsetTop.length-1; i++) {
        if(this.nndex !== i && (positionY >= this.comsetTop[i] && positionY < this.comsetTop[i+1])){
          this.nndex = i
          this.$refs.titleItem.count = this.nndex
        }
      }
    },
    topClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    onClickButton(){
      const obj = {}
      obj.image = 'http:' + this.topImages[0]
      obj.title = this.detailcenter.title
      obj.price = this.detailcenter.lowNowPrice
      obj.desc = this.detailcenter.desc
      obj.id = this.id
      this.$store.dispatch('addCart',obj).then(res => {
        this.$toast.show(res)
      })
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-(this.comsetTop[index]))
    }
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index:9;
    height:100vh;
    background:#fff;
  }
  .content{
    height:calc(100% - 44px);
    overflow:hidden;
  }
  .title-item-item{
    position: relative;
    z-index:9;
    background:#fff;
  }
  .my-swipe{
    height:280px;
  }
  .my-swipe .van-swipe-item img{
    width:100%;
    height:100%;
    overflow:hidden;
  }
  .detail-center-title{
    padding:10px;
    font-size:15px;
    font-weight:bold;
  }
  .lownowprice{
    color:#eb4450;
    padding:10px;
  }
  .oldprice{
    font-size:10px;
    text-decoration: line-through;
  }
  .discountdesc{
    padding:3px;
    font-size:12px;
    color:#fff;
    background:#eb4450;
    margin-top:5px;
    border-radius:7px;
  }
  .columns{
    display:flex;
    padding:15px 0 3px 10px;
    font-size:10px;
    color:#3a3636;
    border-bottom:2px solid #efe4e4;
    text-align:center;
  }
  .columns span{
    flex:1;
  }
  .services{
    display:flex;
    padding:10px;
    border-bottom:2px solid #efe4e4;
    text-align:center;
  }
  .services .services-item{
    flex:1;
  }
  .services .services-item img{
    width:12px;
    height:12px;
  }
  .services .services-item span{
    font-size:12px;
  }
  .information{
    display:flex;
  }
  .information .shopLogo{
    padding:10px;
  }
  .information .shopLogo img{
    width:100px;
    height:100px;
  }
  .information-name{
    margin-top:17%;
  }
  .score{
    padding:0 0 0 20px ;
  }
  .score .score-item .score-item-a{
    color:#eb4450;
  }
  .supmll{
    width:100px;
    height:30px;
    line-height:30px;
    background:#e2e2e2;
    text-align:center;
    border:1px solid #ccc;
    font-size:15px;
    margin: 0 auto;
    border-radius:10px;
    margin-top:10px;
  }
  .supmll a{
    color:#fff;
  }
  .detailImage img{
    width:100%;
  }
  table{
    width:100%;
    padding:10px 10px 0 10px;
    font-size:15px;
    border:2px solid #efe4e4;
  }
  .itemparams{
    padding-left:60px;
    color:#eb4450;
  }
  .comments{
    padding:10px;
    border:2px solid #efe4e4;
  }
  .comments p{
    font-size:12px;
  }
  .comments-item{
    display:flex;
    font-size:15px;
    border-bottom:2px solid #efe4e4;
  }
  .comments-item p:nth-child(1){
    flex:5;
  }
  .comments-item p:nth-child(2){
    flex:1;
  }
  .recommend{
    display:flex;
    flex-wrap: wrap;
    padding:2px;
    justify-content: space-around;
  }
  .recommend-item{
    font-size:5px;
    width:48%;
  }
  .recommend-item img{
    width:100%;
    border-radius:3%;
  }
  .recommend-item p{
    white-space:nowrap;/* 规定文本是否折行 */  
    overflow: hidden;/* 规定超出内容宽度的元素隐藏 */
    text-overflow: ellipsis;
  }
  .recommend-item .price{
    text-align:center;
    color:#eb4450;
  }
  .van-goods-action{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
  }
  .back-top{
    position: fixed;
    bottom:50px;
    right:5px;
    z-index:9;
  }
</style>