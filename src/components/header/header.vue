<template>
  <div class="header">
    <!-- 头部 eleme-header-->
    <header class="eleme-header head">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <span @click="collectToggle">
        <span class="iconfont head-right font-pink" v-show="!collectShow">&#xe614;</span>
        <span class="iconfont head-right" v-show="collectShow">&#xe62b;</span>
      </span>
    </header>
    <div class="background1">
      <img src="./img/header_banner.png" width="100%" height="100%"/>
    </div>
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar"/>
      </div>
      <div class="avatar-content">
        <div class="title">
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          起送￥38|配送￥29
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        collectShow: true
      }
    },
    methods: {
      collectToggle() {
         this.collectShow = !this.collectShow;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star
    }
  };

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position: relative
    color: #fff
    overflow: hidden
    .eleme-header.head
      z-index: 1
      background: none
      .head-right
        padding: 0 15px
        font-size: 1.3rem
    .background1
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      filter: blur(1px)
    .content-wrapper
      position: relative
      padding: 1.3rem 20px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          width: 5rem
          height: 5rem
          border-radius: 2px
      .avatar-content
        display: inline-block
        margin-left: 1rem
        font-size: 1rem
        .title
          margin: .1rem 0 .5rem 0
          .name
            font-size: 1.1rem
            line-height: 1.6rem
            font-weight bold
        .description
           margin-bottom: .8rem
           line-height: .9rem
           font-size: .9rem
        .support
           .icon
              display: inline-block
              vertical-align: top
              width: 12px
              height: 12px
              margin-right: 5px
              background-size: 12px 12px
              background-repeat: no-repeat
              &.decrease
                bg-image('decrease_1')
              &.discount
                bg-image('discount_1')
              &.guarantee
                bg-image('guarantee_1')
              &.invoice
                bg-image('invoice_1')
              &.special
                bg-image('special_1')
           .text
              lin-height: 12px
              font-size: 10px

      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        line-height: 24px
        border-radius: 14px
        background: rgba(0,0,0,0.2)
        text-align: center
        .count
          font-size: .9rem
    .bulletin-wrapper
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7,17,27,0.2)
      .bulletin-title
        display inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px;
        font-size: 10px
</style>
