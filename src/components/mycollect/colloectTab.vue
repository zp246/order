<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <div class="eleme-header">
      <router-link to="/my" class="iconfont">&#xe603;</router-link>
      <div class="center"><span>我的收藏</span></div>
      <span class="rating-edit" @click="edit" v-show="editFlag">编辑</span>
      <span class="rating-edit" @click="complete" v-show="completeFlag">完成</span>
    </div>
    <!-- 路由 ordertab-->
    <div class="tab order-tab border-1px">
      <router-link to="sellercollect" class="tab-item">商家</router-link>
      <router-link to="goodcollect" class="tab-item">商品</router-link>
    </div>
    <router-view :editFlag="editFlag"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
       return {
         editFlag: true,
         completeFlag: false
       }
    },
    methods: {
      edit() {
        this.editFlag = false;
        this.completeFlag = true;
      },
      complete() {
        this.editFlag = true;
        this.completeFlag = false;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
