<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
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
