<template>
  <div class="detail">
    <title-item/>
  </div>
</template>

<script>
import TitleItem from './childer/TitleItem'

import {getDetail} from 'network/detail.js'
export default {
  name:'Details',
  data(){
    return {
      id:null
    }
  },
  components:{
    TitleItem
  },
  created(){
    this.id = this.$route.query.id
    getDetail(this.id).then(res => {
      console.log(res);
      
    })
  }
}
</script>

<style>

</style>