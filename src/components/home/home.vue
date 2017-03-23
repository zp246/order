<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <span class="fl eleme-left"><span class="icon-map iconfont">&#xe715;</span>D2816次车</span>
      <span class="iconfont icon-sea fr">&#xe617;</span>
    </header>
    <!-- 轮播 head-->
    <div class="head">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="banner" src="./img/banner1.png"/>
          </div>
          <div class="swiper-slide">
            <img class="banner" src="./img/banner1.png"/>
          </div>
          <div class="swiper-slide">
            <img class="banner" src="./img/banner1.png"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="division"></div>
    <!-- 优惠 home-active -->
    <div class="home-active">
      <div class="home-half">
        <div class="home-content">
          <h3>平台活动</h3>
          <p>平台优惠活动</p>
        </div>
        <div class="home-img">
          <img src="./img/home_active1.png"/>
        </div>
      </div>
      <div class="home-half">
          <div class="home-content">
            <h3>领券中心</h3>
            <p>优惠券免费领</p>
          </div>
          <div class="home-img">
            <img src="./img/home_active1.png"/>
          </div>
      </div>
    </div>
    <div class="division"></div>
    <!-- 餐饮列表 home-list-->
    <div class="home-list">
      <ul>
        <li v-for="(item,$index) in homeLists">
          <div class="list-img">
            <img src="./img/list_img.png"/>
          </div>
          <div class="list-content">
            <h2>{{item.name}}</h2>
            <div class="list-star">
              <star :size="36" :score="item.score"></star><span class="star-score">{{item.score}}</span>
            </div>
            <p class="send"><span>起送￥{{item.send}}</span><span class="line">|</span><span>配送￥{{item.distribution}}</span></p>
            <div class="list-activity">
              <p class="activity-icon" @click="toggleMore(item)"><img class="first-icon" src="./img/activity_fist.jpg"/>{{item.activity_first.desc}}<span class="fr">{{item.activity_count}}个活动*</span></p>
              <div class="activity-more" v-show="item.moreFlag">
                <p class="activity-icon"  v-for="more in item.activity_more"><img class="first-icon" src="./img/activity_fist.jpg"/>{{more.desc}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部 footer1-->
    <div class="footer1"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import swiper from '../../../static/js/swiper.min.js'
  import star from '../../components/star/star.vue'

  export default {
    data() {
        return {
          "homeLists": [
            {
              "src": "./img/list_img.png",
              "name": '肯德基天津南站店',
              "send": 30,
              "score": 5.0,
              "distribution": 8,
              "activity_first": {
                "icon": "./img/list_img.png",
                "desc": "满70减50"
              },
              "activity_count": 2,
              "activity_more": [
                {
                  "icon": "./img/list_img.png",
                  "desc": "全场打七折"
                },
                {
                  "icon": "./img/list_img.png",
                  "desc": "免费送饮料"
                }
              ]
            },
            {
              "src": "./img/list_img.png",
              "name": '肯德基天津南站店',
              "send": 30,
              "score": 4.5,
              "distribution": 8,
              "activity_first": {
                "icon": "./img/list_img.png",
                "desc": "满70减50"
              },
              "activity_count": 1,
              "activity_more": [
                {
                  "icon": "./img/list_img.png",
                  "desc": "免费送饮料"
                }
              ]
            },
          ]
        }
    },
    methods: {
      toggleMore(item) {
        Vue.set(item, 'moreFlag',this.moreFlag = !this.moreFlag);
      }
    },
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
    },
    components: {
      star
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
    max-height: 500px;;
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
