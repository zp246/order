<template>
  <div class="content">
    <div class="my-banner">
      <div class="my-info">
        <span class="iconfont icon-info">&#xe6b6;</span>
      </div>
      <div class="my-head">
        <div class="my-img">
          <img src="./img/my_user.png"/>
        </div>
        <div class="my-content">
          <h2>大马猴Dear</h2>
          <p><span class="iconfont">&#xe604;</span>1831124569</p>
        </div>
      </div>
    </div>
    <div class="user-table">
      <a class="table-half"><span class="iconfont">&#xe704;</span>申请发票</a>
      <a class="table-half"><span class="iconfont">&#xe619;</span>优惠券</a>
    </div>
    <div class="division"></div>
    <section class="user-info">
      <router-link to="/myrating" class="info-cell">
        <div class="info-content">
          我的评价
          <span>20<span class="iconfont">&#xe610;</span></span>
        </div>
      </router-link>
      <router-link to="/collecttab/sellercollect" class="info-cell">
        <div class="info-content">
          我的收藏
          <span>5<span class="iconfont">&#xe610;</span></span>
        </div>
      </router-link>
      <a href="javascript:;" class="info-cell">
        <div class="info-content">
          我的退款
          <span class="iconfont">&#xe610;</span>
        </div>
      </a>
    </section>
    <div class="division"></div>
    <section class="user-info">
      <a href="javascript:;" class="info-cell">
        <div class="info-content">
          分享有礼
          <span class="iconfont">&#xe610;</span>
        </div>
      </a>
      <router-link to="integralmall" class="info-cell">
        <div class="info-content">
          积分商城
          <span>200积分<span class="iconfont">&#xe610;</span></span>
        </div>
      </router-link>
      <a href="javascript:;" class="info-cell">
        <div class="info-content">
          联系客服
          <span>400-2563-9812<span class="iconfont">&#xe610;</span></span>
        </div>
      </a>
    </section>
    <div class="division"></div>
    <section class="user-info">
      <router-link to="setup" class="info-cell">
        <div class="info-content">
          设置
          <span class="iconfont">&#xe610;</span>
        </div>
      </router-link>
    </section>
    <div class="division"></div>
    <!-- 底部 footer1-->
    <div class="footer1"></div>
    <div class="weui-mask" style="display: none"></div>
    <div class="weui-dialog" style="display: none">
      <div class="weui-dialog__hd"><strong class="weui-dialog__title">联系客服</strong></div>
      <div class="weui-dialog__bd">400-8695-1286</div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
