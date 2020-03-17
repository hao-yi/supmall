<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,timer=2000){
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      },timer)
    }
  }
}
</script>

<style>
  .toast{
    position:fixed;
    top:50%;
    left:50%;
    padding:8px 10px;
    background:rgba(0,0,0,.8);
    transform: translate(-50%,-50%);
    border-radius:10px;
    color:#fff;
    font-size:12px;
    z-index: 999;
  }
</style>