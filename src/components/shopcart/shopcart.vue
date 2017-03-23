<template>
  <div class="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'highlight':totalCount>0}">{{totalPrice}}元</div>
        <div class="desc">另需配送费{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" @click.stop.prevent="pay">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
      <div class="ball-container">

      </div>
      <transition name="transHeight">
        <div class="shopcart-list" v-show="listShow" @click.stop.prevent>
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty">清空</span>
          </div>
            <div class="list-content" ref="foodlist">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>${{food.price*food.count}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import cartcontrol from 'components/cartcontrol/cartcontrol.vue'

  export default {
    props: {
      selectFoods: {
        type: Array,
        default: []
      },
      deliveryPrice: {
          type: Number,
          default: 0
      },
      minPrice: {
          type: Number,
          default: 0
      }
    },
    data() {
      return {
        balls: [{
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }],
        fold: true
      }
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.selectFoods.forEach((food) => {
                total += food.price * food.count;
            })
            return total;
        },
        totalCount() {
            let count = 0;
            this.selectFoods.forEach((food) => {
                count += food.count;
            });
            return count;
        },
        payDesc() {
          let diff = this.minPrice - this.totalPrice;
          if (!this.totalPrice) {
            return `￥${this.minPrice}起送`;
          } else if (diff > 0) {
            return `还差￥${diff}元`;
          } else {
            return '去结算';
          }
        },
        payClass() {
            if(this.totalPrice < this.minPrice) {
                return 'not-enough';
            }else {
              return 'enough';
            }
        },
        listShow() {
          if(!this.totalCount) {
              this.fold = true;
              return false;
          }
          let show = !this.fold;
          if(show) {
              this.$nextTick(() => {
                if(!this.scroll) {
                  this.scroll = new BScroll(this.$refs.foodlist, {
                    click: true
                  });
                }else{
                    this.scroll.refresh();
                }
              });
          }
          return show;
        }
    },
    methods: {
      toggleList() {
        if(!this.totalCount) {
            return;
        }
        this.fold = !this.fold;
      },
      pay() {
          window.alert(`支付元`);
      }
    },
    components: {
      cartcontrol
    }
  };
</script>

<style lang="stylus" type="" rel="stylesheet/stylus">
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 33
    width: 100%
    height: 48px
    background: #141d27;
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255,255,255,0.4)
      .content-left
        flex:1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px;
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            font-size: 9px
            font-weight: 400
            color: #fff;
            border-radius: 16px
            background: rgb(240,20,20)
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4)
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: rgb(0,160,220);
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255,255,255,0.1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 80px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          background: #2b333b
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .ball-container
      position: fixed
      left: 32px
      bottom: 22px
      z-index: 200
      &.drop-transition
        transition all 0.4s
        .inner
          width: 16px
          height: 16px
          border-radius 50%
          background: rgb(0,160,220)
    .shopcart-list
      position absolute
      top 0
      left 0
      width 100%
      max-height 232px
      padding-bottom: 22px;
      background white
      transform translate3d(0,-100%,0)
      z-index -1
      &.transHeight-enter-active,&.transHeight-leave-active
        transition all 0.5s
      &.transHeight-enter,&.transHeight-leave-active
        transform translate3d(0,0,0)
      .list-header
        height 40px
        line-height 40px
        background #f3f5f7
        border-bottom 1px solid rgba(7,17,27,0.1)
        .title
          display inline-block
          font-size 14px
          font-weight 200
          color rgb(7,17,27)
          padding-left 18px
        .empty
          position absolute
          right 8px
          font-size 12px
          color rgb(0,160,220)
          padding 0 10px
      .list-content
        max-height 217px
        overflow hidden
        .food
          position relative
          display flex
          height 48px
          margin 0 18px
          border-bottom 1px solid rgba(7,17,27,0.1)
          .name
            flex 1
            font-size 14px
            color rgb(7,17,27)
            line-height 48px
            font-weight 700
          .price
            font-size 14px
            font-weight 700
            color rgb(240,20,20)
            padding 0 12px 0 18px
            line-height 48px
          .cartcontrol-wrapper
            font-size 14px
            margin-top 6px
</style>
