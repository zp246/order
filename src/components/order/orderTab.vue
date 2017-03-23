<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>我的退款</span> </div>
    </header>
    <!-- 路由 ordertab-->
    <div class="tab order-tab border-1px">
      <router-link to="orderpending" class="tab-item">待处理</router-link>
      <router-link to="orderrefund" class="tab-item">已退款</router-link>
      <router-link to="orderreject" class="tab-item">已驳回</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
