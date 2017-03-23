<template>
  <div class="content padding-bt3">
    <header class="eleme-header">
      <router-link to="/my" class="iconfont">&#xe603;</router-link>
      <div class="center"><span>我的评价</span> </div>
      <span class="rating-edit" @click="ratingEdit" v-show="ratingEditShow">编辑</span>
      <span class="rating-edit" @click="ratingComplete" v-show="ratingCompleteShow">完成</span>
    </header>
    <div class="order-item">
      <div class="order-head">
        <label class="rating-label" v-show="ratingShow">
          <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
        </label>
        <div class="head-img">
          <img src="./img/list_img.png"/>
        </div>
        <div class="head-content rating-content">
          <h2><span class="name">肯德基天津南站店</span></h2>
          <p class="time">天津南站&nbsp;&nbsp;G2684次</p>
          <div class="rating-star">
            <star :size="24" :score="5"></star><span class="star-score">5.0</span>
          </div>
          <p><span class="iconfont">&#xe638;</span>香辣鸡腿堡、薯条</p>
          <p><span class="iconfont">&#xe600;</span>肉夹馍</p>
          <p><span class="iconfont">&#xe685;</span>分量足，食材好，味道不错，快递送的及时。</p>
          <p class="rating-time"><span class="iconfont">&#xe627;</span>2016-01-12&nbsp;&nbsp;09:30:23</p>
        </div>
      </div>
      <div class="division"></div>
      <div class="order-head">
        <label class="rating-label" v-show="ratingShow">
          <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
        </label>
        <div class="head-img">
          <img src="./img/list_img.png"/>
        </div>
        <div class="head-content rating-content">
          <h2><span class="name">肯德基天津南站店</span></h2>
          <p class="time">天津南站&nbsp;&nbsp;G2684次</p>
          <div class="rating-star">
            <star :size="24" :score="5"></star><span class="star-score">5.0</span>
          </div>
          <p><span class="iconfont">&#xe638;</span>香辣鸡腿堡、薯条</p>
          <p><span class="iconfont">&#xe600;</span>肉夹馍</p>
          <p><span class="iconfont">&#xe685;</span>分量足，食材好，味道不错，快递送的及时。</p>
          <p class="rating-time"><span class="iconfont">&#xe627;</span>2016-01-12&nbsp;&nbsp;09:30:23</p>
        </div>
      </div>
      <div class="division"></div>
    </div>
    <div class="myrating-footer" v-show="ratingShow">
      <label class="fl"><input type="checkbox" class="checkbox_primary" name="myrating"><i></i>全选</label>
      <span class="fr"><button class="order-btn order-btn-mini">删除</button></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../../components/star/star.vue'

  export default {
    data() {
      return {
        ratingShow: false,
        ratingEditShow: true,
        ratingCompleteShow: false
      }
    },
    methods: {
      ratingEdit() {
        this.ratingShow = true;
        this.ratingEditShow = false;
        this.ratingCompleteShow = true;
      },
      ratingComplete() {
        this.ratingShow = false;
        this.ratingEditShow = true;
        this.ratingCompleteShow = false;
      }
    },
    components: {
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
