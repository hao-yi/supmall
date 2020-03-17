<template>
  <div class="check-button" :class="{check:isChecked}">
    <i class="iconfont icon-htmal5icon22"></i>
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .check-button{
    width:12px;
    height:12px;
    border-radius:50%;
    border:2px solid #aaa;
  }
  .iconfont{
    color:#fff;
    font-size:10px;
  }
  .check{
    background: #eb4450;
    border-color:#eb4450;
  }
</style>