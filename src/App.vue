<template>
  <div id="app">
    <router-view/>
    <mian-tab-bar/>
  </div>
</template>

<script>
import mianTabBar from 'components/content/mianTabBar'
export default {
  name:'App',
  components:{
    mianTabBar
  }
}
</script>

<style>
  
</style>
