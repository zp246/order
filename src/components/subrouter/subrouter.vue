<template>
  <div>
    <v-header :seller="seller"></v-header>
      <div class="tab border-1px">
        <router-link to="goods" class="tab-item">点菜</router-link>
        <router-link to="ratings" class="tab-item">评价</router-link>
        <router-link to="seller" class="tab-item">商家</router-link>
      </div>
      <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import  header from '../../components/header/header.vue'

  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if(res.errno === ERR_OK) {
          this.seller = res.data;
        }
      })
    },
    components:{
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  #app
    font-family 'Microsoft YaHei', arial, sans-serif, 'Droid Sans Fallback'
  .tab
    display flex
    width 100%
    height 2.6rem
    line-height: 2.6rem
    background: #fff
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      text-align center
    & > a
      display block
      font-size 1rem
      color rgb(77,85,93)
    .router-link-active
      color #6ab7ff

</style>

