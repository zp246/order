<template>
  <transition name="move">
    <div class="foodDetail" v-show="showFlag" ref="food">
      <!-- 头部 eleme-header-->
      <div class="eleme-header">
        <a class="iconfont" @click="hide">&#xe603;</a>
        <div class="center"><span>商品详情</span></div>
        <span @click="commodToggle">
          <span class="iconfont head-right font-pink" v-show="!foodShow">&#xe614;</span>
          <span class="iconfont head-right" v-show="foodShow">&#xe62b;</span>
        </span>
      </div>
      <div class="image-header">
        <img :src="food.image"/>
      </div>
      <div class="food-content">
        <h1 class="food-title">{{food.name}}</h1>
        <div class="food-desc">
          整块乌骨鸡腿肉，搭配蔬菜1
        </div>
        <div class="food-price">
          <span class="food-now">￥<span class="food-now-price">{{food.price}}</span></span><span class="food-old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrap">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div @click="addFirst" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import BScroll from 'better-scroll';
  import cartcontrol from '../../components/cartcontrol/cartcontrol.vue';

  export default {
      data() {
        return {
          showFlag: false,
          foodShow: true
        }
      },
      props: {
         food: {
             type: Object
         }
      },
      methods: {
        commodToggle() {
          this.foodShow = !this.foodShow;
        },
        show() {
          this.showFlag = true;
          this.$nextTick(() => {
            if(!this.scroll) {
              this.scroll = new BScroll(this.$refs.food, {
                click: true
              });
            }else{
              this.scroll.refresh();
            }
          });
        },
        hide() {
          this.showFlag = false;
        },
        addFirst(event) {
          if (!event._constructed) {
            return
          }
          this.$set(this.food, 'count', 1)
        }
      },
      components: {
        cartcontrol,
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foodDetail
    position:fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transition: all .2s linear
    &.move-enter-avtive,&.move-leave-active
      transform translate3d(0,0,0)
    &.move-enter,&.move-leave-active
      transform translate3d(100%,0,0)
    .image-header
      position relative
      width: 100%
      height: 0
      padding-top: 80%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .food-content
      position: relative
      padding: .7rem 15px
      .food-title
        margin-bottom: .7rem
      .food-desc
        font-size: .9rem
        margin-bottom: 1.2rem
        color: #aeaeae
      .food-price
        .food-now
          color: #ff6868
          margin-right: 1rem
          .food-now-price
            font-size: 1.4rem
        .food-old
          color: #a7a7a7
          text-decoration: line-through
    .cartcontrol-wrap
      position: absolute
      right: 15px
      bottom: .1rem
    .buy
      position:absolute
      right: 15px
      bottom: 0.5rem
      z-index: 10
      height: 24px
      line-height: 24px
      padding: 0 12px
      box-sizing: border-box
      border-radius: 12px
      font-size: .9rem
      color: #fff
      background: #6ab7ff
      transition: all .2s linear
</style>
