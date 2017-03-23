<template>
  <div class="content highbg">
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>积分商城</span> </div>
    </header>
    <!-- 轮播 head-->
    <div class="head">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="banner" src="./img/mall_banner.jpg"/>
          </div>
          <div class="swiper-slide">
            <img class="banner" src="./img/mall_banner.jpg"/>
          </div>
          <div class="swiper-slide">
            <img class="banner" src="./img/mall_banner.jpg"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="mall-title">
      <p>晨兴中光笔</p>
      <p class="mall-number"><span class="font-orange">500</span>积分</p>
    </div>
    <div class="division"></div>
    <div class="content1 border-nobt">
      <div class="problem-content">
        <div class="problem-title">有期至：</div>
        <div class="problem-detail">2017-1-01至2017-06-30</div>
      </div>
      <div class="problem-content">
        <div class="problem-title">商品简介：</div>
        <div class="problem-detail">京东看廊坊几看的解放东路快解放了打卡机法律手段快解放看电视剧飞快的设计费</div>
      </div>
      <div class="problem-content">
        <div class="problem-title">注意事项：</div>
        <div class="problem-detail">京东看廊坊几看的解放东路快解放了打卡机法律手段快解放看电视剧飞快的设计费</div>
      </div>
    </div>
    <div class="footer2"></div>
    <div class="detail-footer border-top">
      <a href="javascript:;" class="order-btn order-btn-full mt-2">确认兑换</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from '../../../static/js/swiper.min.js'

  export default {
    mounted:function(){
      this.$nextTick(function(){
        /* 焦点图 */
        var mySwiper = new Swiper ('.swiper-container', {
//          autoplay: 1000,
          autoplayDisableOnInteraction : false,
          pagination: '.swiper-pagination',
          paginationClickable: true
        });
      })
    }
  }
</script>

<style type="text/css">
  @import '../../../static/css/swiper.min.css';
  .swiper-container {
    width: 100%;
  }
  .swiper-slide img.banner {
    width: 100%;
    max-height: 500px;
    vertical-align: bottom;
  }
  .slide1 img {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: -.8rem;
    left: 50%;
    margin-left: -.8rem;
  }
  .swiper-pagination-bullet-active {
    background: #6ab7ff;
  }
</style>

<style lang="stylus" rel="stylesheet/stylus">

</style>
