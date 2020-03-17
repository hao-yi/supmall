<template>
  <div>
    <div class="head">
      <div><i class="iconfont icon-xinxi"></i><span>我的信息</span></div>
      <div><i class="iconfont icon-jifen"></i><span>积分商城</span></div>
      <div><i class="iconfont icon-huiyuan"></i><span>会员卡</span></div>
    </div>
    <div class="foot">
      <div><i class="iconfont icon-gouwuchekong"></i><span>我的购物车</span></div>
      <div><i class="iconfont icon-xinbaniconshangchuan-"></i><span>下载购物APP</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Themain'
}
</script>

<style scoped>
  .iconfont{
    color:#eb4450;
    font-size:18px;
    margin-right:5px;
  }
  .head{
    border-bottom: 15px solid #ece6e6;
  }
  .head div:nth-child(1){
    padding:10px;
    border-bottom: 1px solid #ece6e6;
  }
  .head div:nth-child(2){
    padding:10px;
  }
  .head div:nth-child(3){
    padding:10px;
    border-top: 1px solid #ece6e6;
  }
   .foot div:nth-child(1){
    padding:10px;
    border-bottom: 1px solid #ece6e6;
  }
  .foot div:nth-child(2){
    padding:10px 0 0px 10px;
  }
</style>