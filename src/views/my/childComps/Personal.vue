<template>
  <div class="personal">
    <div class="pers-img">
      <i class="iconfont icon-touxiang"></i>
    </div>
    <div class="content">
      <div>
        <a href="javascript:;">登录/</a>
        <a href="javascript:;">注册</a>
      </div>
      <div>
        <i class="iconfont icon-shouji"></i>
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="mark">
      <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'Personal'
}
</script>

<style>
  .personal{
    display:flex;
    height:70px;
    background:#eb4450;
    align-items:center;
  }
  .pers-img{
    flex:2;
    text-align:center;
  }
  .icon-touxiang{
    font-size:50px;
    color:#fff;
  }
  .content{
    flex:7;
  }
  .content a{
    color:#fff;
    font-size:15px;
  }
  .icon-shouji{
    color:#fff;
    font-size:18px;
  }
  .content span{
    color:#fff;
    font-size:13px;
  }
  .mark{
    flex:1;
    text-align:center;
  }
  .icon-arrow-right-copy-copy-copy{
    color:#fff;
    font-size:22px;
  }
</style>