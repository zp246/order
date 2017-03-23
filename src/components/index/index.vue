<template>
  <div class="content">
    <router-view></router-view>
    <div class="tab1">
      <div class="tab1-item">
        <router-link to="/home">
          <span class="iconfont">&#xe60a;</span>
          首页
        </router-link>
      </div>
      <div class="tab1-item">
        <router-link to="/order">
          <span class="iconfont">&#xe615;</span>
          订单
        </router-link>
      </div>
      <div class="tab1-item">
        <router-link to="/my">
          <span class="iconfont">&#xe640;</span>
          我的
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
