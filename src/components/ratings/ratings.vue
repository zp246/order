<template>
  <div class="content highbg ratings">
    <div class="rating-head">
      <span><span class="star-lg">5.0</span><star :size="36" :score="5"></star></span>
      <span class="font-gray fr">200人评价</span>
    </div>
    <div class="division"></div>
    <div class="order-item">
      <div class="order-head">
        <div class="head-img">
          <img src="./img/list_img.png"/>
        </div>
        <div class="head-content rating-content">
          <h2><span class="name">肯德基天津南站店1</span></h2>
          <p><star :size="24" :score="5"></star><span class="star-score">5.0</span></p>
          <p><span class="iconfont">&#xe638;</span>香辣鸡腿堡、薯条</p>
          <p><span class="iconfont">&#xe600;</span>肉夹馍</p>
          <p><span class="iconfont">&#xe685;</span>分量足，食材好，味道不错，快递送的及时。</p>
          <p class="rating-time"><span class="iconfont">&#xe627;</span>2016-01-12&nbsp;&nbsp;09:30:23</p>
        </div>
      </div>
      <div class="order-head">
        <div class="head-img">
          <img src="./img/list_img.png"/>
        </div>
        <div class="head-content rating-content">
          <h2><span class="name">肯德基天津南站店1</span></h2>
          <p><star :size="24" :score="5"></star><span class="star-score">5.0</span></p>
          <p><span class="iconfont">&#xe638;</span>香辣鸡腿堡、薯条</p>
          <p><span class="iconfont">&#xe600;</span>肉夹馍</p>
          <p><span class="iconfont">&#xe685;</span>分量足，食材好，味道不错，快递送的及时。</p>
          <p class="rating-time"><span class="iconfont">&#xe627;</span>2016-01-12&nbsp;&nbsp;09:30:23</p>
        </div>
      </div>
      <div class="order-head">
        <div class="head-img">
          <img src="./img/list_img.png"/>
        </div>
        <div class="head-content rating-content">
          <h2><span class="name">肯德基天津南站店1</span></h2>
          <p><star :size="24" :score="5"></star><span class="star-score">5.0</span></p>
          <p><span class="iconfont">&#xe638;</span>香辣鸡腿堡、薯条</p>
          <p><span class="iconfont">&#xe600;</span>肉夹馍</p>
          <p><span class="iconfont">&#xe685;</span>分量足，食材好，味道不错，快递送的及时。</p>
          <p class="rating-time"><span class="iconfont">&#xe627;</span>2016-01-12&nbsp;&nbsp;09:30:23</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../../components/star/star.vue'
  export default {
    components: {
      star
    }
  }
</script>

<style scoped>

</style>
