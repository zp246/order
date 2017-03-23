<template>
  <div>
    <!-- 餐饮列表 home-list-->
    <div class="home-list">
      <ul>
        <li>
          <label class="rating-label" v-show="!editFlag">
            <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
          </label>
          <div class="list-img">
            <img src="./img/list_img.png"/>
          </div>
          <div class="list-content">
            <h2>经典麻辣鸡腿汉堡</h2>
            <div class="list-star font-gray">
              整块鸡腿五骨肉，搭配美味沙拉
            </div>
            <p class="send font-pink">￥12</p>
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
  export default {
    props: {
      editFlag: Boolean
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
