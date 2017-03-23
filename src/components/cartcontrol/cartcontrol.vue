<template>
  <div class="cartcontrol">
    <transition name="fadeRotate">
      <div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
        <span class="icon-remove_circle_outline inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
        food: {
          type: Object
        }
    },
    methods: {
        addCart(event) {
            if(!event._constructed) {
                return;
            }
            if(!this.food.count){
                Vue.set(this.food, 'count',1);
            }else {
              this.food.count++;
            }
        },
        decreaseCart(event){
          if(!event._constructed) {
            return;
          }
            if(this.food.count){
              this.food.count--;
            }
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all .4s linear
      .inner
        display inline-block
        line-height: 24px
        font-size: 24px
        color: #6ab7ff
        vertical-align: middle
        transition: all .4s linear
        transform: rotate(0)
      &.fadeRotate-enter-active,&.fadeRotate-leave-active
        transform translate3d(0,0,0)
        .inner
          display inline-block
          transform rotate(0)
      &.fadeRotate-enter,&.fadeRotate-leave-active
        opacity 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
    .cart-count
      display: inline-block
      width: 24px
      line-height: 24px
      vertical-align:middle
      text-align: center
      font-size: 10px
      color: #999
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px;
      vertical-align: top
      color: #6ab7ff

</style>
