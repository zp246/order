<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <div class="center"><span>订单</span> </div>
    </header>
    <!-- 订单列表 order-list-->
    <div class="order-list">
      <div class="order-item">
        <div class="order-head">
          <div class="head-img">
            <img src="./img/list_img.png"/>
          </div>
          <div class="head-content">
            <h2><span class="name">肯德基天津南站店</span><span class="state">等待送达</span></h2>
            <p class="time">今天</p>
          </div>
        </div>
        <div class="order-content clearfix">
          <span class="fl">经典麦辣鸡腿汉堡</span>
          <span class="fr"><span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥28</span>¥30</span>
        </div>
        <div class="order-content clearfix">
          <span class="fl">经典麦辣鸡腿汉堡</span>
          <span class="fr"><span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥28</span>¥30</span>
        </div>
        <div class="order-foot">
          <p>
            <span class="paid fl">实付￥30</span>
            <span class="fr">
              <a href="javascript:;" class="order-btn order-btn-mini order-btn-plain">投诉</a>
              <a href="javascript:;" class="order-btn order-btn-mini">确认到达</a>
            </span>
          </p>
        </div>
      </div>
      <div class="division"></div>
      <div class="order-item">
        <div class="order-head">
          <div class="head-img">
            <img src="./img/list_img.png"/>
          </div>
          <div class="head-content">
            <h2><span class="name">肯德基天津南站店</span><span class="state">等待支付</span></h2>
            <p class="time">今天</p>
          </div>
        </div>
        <div class="order-content clearfix">
          <span class="fl">经典麦辣鸡腿汉堡</span>
          <span class="fr"><span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥28</span>¥30</span>
        </div>
        <div class="order-foot">
          <p>
            <span class="paid fl">实付￥30</span>
            <span class="fr">
              <a href="javascript:;" class="order-btn order-btn-mini order-btn-plain">取消订单</a>
              <a href="javascript:;" class="order-btn order-btn-mini">去支付</a>
            </span>
          </p>
        </div>
      </div>
      <div class="division"></div>
      <div class="order-item">
        <div class="order-head">
          <div class="head-img">
            <img src="./img/list_img.png"/>
          </div>
          <div class="head-content">
            <h2><span class="name">肯德基天津南站店</span><span class="state">订单已完成</span></h2>
            <p class="time">今天</p>
          </div>
        </div>
        <div class="order-content clearfix">
          <span class="fl">经典麦辣鸡腿汉堡</span>
          <span class="fr"><span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥28</span>¥30</span>
        </div>
        <div class="order-foot">
          <p>
            <span class="paid fl">实付￥30</span>
            <span class="fr">
              <a href="javascript:;" class="order-btn order-btn-mini order-btn-plain">去评价</a>
            </span>
          </p>
        </div>
      </div>
      <div class="division"></div>
    </div>
    <!-- 底部 footer1-->
    <div class="footer1"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
//      this.$http.get('http://192.168.1.189:8052/costa/project/projectList').then((res) => {
//        res = res.body;
//        this.list = res.list;
//        console.log(this.list);
//      })
    },
  }
</script>

<style scoped>

</style>
