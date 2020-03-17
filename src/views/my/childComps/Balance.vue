<template>
  <div class="balance">
    <div class="balance-left">
      <div><span>0.00</span>元</div>
      <div>我的余额</div>
    </div>
    <div class="balance-center">
      <div><span>0</span>个</div>
      <div>我的优惠</div>
    </div>
    <div class="balance-right">
      <div><span>0</span>分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Balance'
}
</script>

<style scoped>
  .balance{
    display:flex;
    text-align:center;
    align-items:baseline;
    border-bottom: 15px solid #ece6e6;
    height:80px;
    align-items: center;
  }
  .balance-left{
    flex:1;
  }
  .balance-center{
    flex:1;
    border-left:1px solid #ece6e6;
    border-right:1px solid #ece6e6;
    padding:15px 0 15px 0;
  }
  .balance-right{
    flex:1;
  }
  .balance span{
    color:#eb4450;
    font-size:22px;
    font-weight:bold;
  }
</style>