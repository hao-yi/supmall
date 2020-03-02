<template>
  <div class="tabbar-item" @click="itemclick">
    <div v-if="!isShow"><slot name="item-iocn"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :class="{active:isShow}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'Tabbar-item',
  data(){
    return {
      // isShow:true
    }
  },
  props:{
    path:{
      type:String
    }
  },
  methods:{
    itemclick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isShow(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style>
  .active{
    color:#eb4450;
  }
  .tabbar-item{
    flex:1;
    font-size:14px;
    text-align:center;
  }
  .tabbar-item img{
    width:24px;
    height:24px;
    margin-top:3px;
    vertical-align: middle;
  }
</style>