<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" :class="{active:index === crunt}" @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array
    }
  },
  data(){
    return {
      crunt:0
    }
  },
  methods:{
    itemclick(index){
      this.crunt = index
      this.$emit('controlClick',index)
    }
  }
}
</script>

<style>
  .active{
    color:#eb4450;
  }
  .active span{
    border-bottom:2px solid #eb4450;
    padding:5px;
  }
  .tab-control{
    display:flex;
    text-align:center;
    height:40px;
    line-height:40px;
    font-size:15px;
    background:#fff;
  }
  .tab-control div{
    flex:1;
  }
</style>