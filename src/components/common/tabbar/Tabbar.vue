<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Tabbar'
}
</script>

<style>
  #tab-bar{
    display:flex;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    height:49px;
    background:#f1f1f1;
    overflow:hidden;
  }
</style>