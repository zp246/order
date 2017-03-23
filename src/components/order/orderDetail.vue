<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>商品详情</span></div>
    </header>
    <!-- 订单详情头部 detail-head-->
    <div class="detail-head">
      <p>订单号：1120156849581690<span class="font-pink fr">订单已完成</span><span class="font-pink fr" style="display: none;">订单已取消</span></p>
      <p>下单时间：2016.09.15&nbsp;&nbsp;19:30:00</p>
    </div>
    <div class="division"></div>
    <!-- 商品信息 weui-cells-->
    <div class="weui-cells weui-notop">
      <h3 class="shopinfo detail-info"><img src="./img/list_img.png"><b class="font-black">田老师红烧肉（通州物资店）</b></h3>
      <div class="weui-cells weui-notop">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>经典麦辣鸡堡汉堡</p>
          </div>
          <div class="weui-cell__ft">
            <span class="font-gray padding-r20">×5</span><span class="font-gray font-through padding-r8">¥30</span><span>¥28</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>配送费</p>
          </div>
          <div class="weui-cell__ft">
            <span>¥5</span>
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>优惠券</p>
          </div>
          <div class="weui-cell__ft">
            <span class="font-gray">无可用<span class="iconfont">&#xe610;</span></span>
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>总计¥145<span class="font-gray font-l10">优惠¥15</span></p>
          </div>
          <div class="weui-cell__ft">
            应付：<span class="font-pink">¥58</span>
          </div>
        </div>
      </div>
    </div>
    <div class="division"></div>
    <!-- 快递信息 detail-cell-->
    <div class="detail-cell">
      <h3 class="shopinfo detail-info"><b class="font-black">配送信息</b></h3>
      <p>联系人：王晓龙</p>
      <p>联系电话：18311259635</p>
      <p>取餐地址：天津南站&nbsp;&nbsp;D2816&nbsp;&nbsp;08车&nbsp;&nbsp;02座</p>
      <p>用餐时间：10:30-10:40</p>
    </div>
    <div class="division"></div>
    <!-- 订单详情底部 footer1-->
    <div class="footer1"></div>
    <div class="detail-footer" style="display: none;">
      <a href="javascript:;" class="order-btn order-btn-mini order-btn-plain mt-2">去评价</a>
    </div>
    <div class="detail-footer1">
      <p class="detail-text" style="display: none;">超过15分钟未支付，系统取消订单</p>
      <p class="detail-text">系统取消了订单，理由是"商家超时未处理"（￥56将于2个工作日原路返回）</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
