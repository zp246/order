<template>
  <div class="content" :class="highbg">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>退款进度</span></div>
    </header>
    <div class="order-item">
      <div class="order-head">
        <div class="head-img">
          <img src="./img/list_img.png"/>
        </div>
        <div class="head-content">
          <h2><span class="name">肯德基天津南站店</span><span class="state font-pink">已驳回</span></h2>
          <p class="time">今天</p>
        </div>
      </div>
      <div class="order-content clearfix">
        <span class="fl">经典麦辣鸡腿汉堡</span>
        <span class="fr"><span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥28</span>¥30</span>
      </div>
      <div class="order-content clearfix">
        <span class="fl">经典麦辣鸡腿汉堡</span>
        <span class="fr"><span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥28</span>¥30</span>
      </div>
      <div class="order-foot">
        <p>
          <span class="paid fl">实付￥30</span>
        </p>
      </div>
    </div>
    <div class="division"></div>
    <!-- 退款进度 order-track-->
    <div class="order_track padding-15">
      <ul>
        <li>
          <p>待审核</p>
          <p class="time">2016-7-12&nbsp;&nbsp;08:22:36</p>
        </li>
        <li>
          <p>发起退款申请</p>
          <p class="time">2016-7-12&nbsp;&nbsp;08:22:36</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
      data() {
          return {
            highbg: "highbg"
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
