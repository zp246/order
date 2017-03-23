<template>
  <div>
    <!-- 餐饮列表 home-list-->
    <div class="home-list" ref="sellerCollect">
      <ul>
        <li>
          <label class="rating-label" v-show="!editFlag">
            <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
          </label>
          <div class="list-img">
            <img src="./img/list_img.png"/>
          </div>
          <div class="list-content">
            <h2>肯德基天津南站店</h2>
            <div class="list-star">
              <star :size="24" :score="5"></star><span class="star-score">5</span>
            </div>
            <p class="send"><span>起送￥12</span><span class="line">|</span><span>配送￥5</span></p>
            <div class="list-activity">
              <p class="activity-icon"><img class="first-icon" src="./img/activity_fist.jpg"/>123<span class="fr">2个活动*</span></p>
              <div class="activity-more">
                <p class="activity-icon" ><img class="first-icon" src="./img/activity_fist.jpg"/>123</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="myrating-footer" v-show="!editFlag">
      <label class="fl"><input type="checkbox" class="checkbox_primary" name="myrating"><i></i>全选</label>
      <span class="fr"><button class="order-btn order-btn-mini">删除</button></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import star from '../../components/star/star.vue'

  export default {
    props: {
      editFlag: Boolean
    },
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
