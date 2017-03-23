<template>
  <div class="content">
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>申请发票</span> </div>
      <span class="rating-edit">开票历史</span>
    </header>
    <div class="invoice-title">发票信息</div>
    <div class="weui-cells weui-notop">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">发票抬头</label></div>
        <div class="weui-cell__bd">
          <label class="invoice-radio">
            <input type="radio" class="checkbox_primary" name="myrating"><i></i>个人
          </label>
          <label class="invoice-radio">
            <input type="radio" class="checkbox_primary" name="myrating"><i></i>公司
          </label>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">公司抬头</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="填写公司抬头">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">发票金额</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" value="116元">
        </div>
      </div>
    </div>
    <div class="invoice-title">收件信息</div>
    <div class="order-head address-head">
      <div class="head-content">
        <div>还没有添加收件信息，去添加</div>
      </div>
      <div class="head-content" style="display: none">
        <h2><span class="name">张三&nbsp;&nbsp;18311690130</span></h2>
        <p class="adress">北京市通州区万达广场</p>
      </div>
      <div>
        <span class="iconfont">&#xe610;</span>
      </div>
    </div>
    <div class="invoice-warn">
      <span class="iconfont">&#xe655;</span>开票金额不足200元需支付邮费
    </div>
    <div class="appeal-submit">
      <button class="weui-btn weui-btn_primary">提交</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
