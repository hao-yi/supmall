<template>
  <div class="titles">
    <navbar>
      <div slot="left" @click="backClick">
        <i class="iconfont icon-jiantou"></i>
      </div>
      <div slot="center" class="titles-list">
        <div v-for="(item,index) in titles" :key="index" class="titles-item" 
        :class="{active:count===index}" 
        @click="titleClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>

import Navbar from 'components/common/navbar/Navbar.vue'

export default {
  name:'TitleItem',
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      count:0
    }
  },
  components:{
    Navbar
  },
  methods:{
    titleClick(index){
      this.count = index
      this.$emit('titleClick',index)
    },
    backClick(){
      // this.$router.go(-1)
      this.$router.back()
      // console.log(this.$router);
      
    }
  }
}
</script>

<style>
  .active{
    color:#eb4450;
  }
  .titles-list{
    display:flex;
  }
  .titles-list .titles-item{
    flex:1;
    text-align: center;
    font-size:13px;
  }
</style>