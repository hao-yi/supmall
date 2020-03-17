<template>
  <div class="my">
    <navbar class="my-navbar">
      <div slot="center">我的档案</div>
    </navbar>
    <personal/>
    <balance/>
    <themain/>
  </div>
</template>

<script>

import Personal from './childComps/Personal'
import Balance from './childComps/Balance'
import Themain from './childComps/Themain'

import Navbar from 'components/common/navbar/Navbar'
export default {
  name:'My',
  components:{
    Navbar,
    Personal,
    Balance,
    Themain
  }
}
</script>

<style scoped>
  .my-navbar{
    background:#eb4450;
    color:#fff;
  }
</style>