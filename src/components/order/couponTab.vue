<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>优惠券</span></div>
    </header>
    <!-- 路由 ordertab-->
    <div class="tab order-tab border-1px">
      <router-link to="couponnot" class="tab-item">未使用</router-link>
      <router-link to="couponalready" class="tab-item">已使用</router-link>
      <router-link to="couponinvalid" class="tab-item">已失效</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
