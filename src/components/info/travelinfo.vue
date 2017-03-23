<template>
  <div class="content">
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>乘车信息</span> </div>
      <a href="javascript"></a>
    </header>
    <div class="weui-cells weui-notop">
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">出发日期</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请选择出发日期">
        </div>
      </div>
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">乘车车次</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="乘车车次">
        </div>
      </div>
    </div>
    <div class="division"></div>
    <div class="weui-cells weui-notop">
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">始发站</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" value="北京西站">
        </div>
      </div>
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">终点站</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text"  value="上海虹桥南站">
        </div>
      </div>
    </div>
    <div class="division"></div>
    <div class="weui-cells weui-notop">
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">车号座位</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请选择车厢及座位号">
        </div>
      </div>
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">用餐车站</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text"  placeholder="请选择用餐车站">
        </div>
      </div>
      <div class="weui-cell weui-noleft">
        <div class="weui-cell__hd"><label class="weui-label">停靠时间</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text"  value="09:30-09:35">
        </div>
      </div>
    </div>
    <div class="agree">
      <label>
        <input type="checkbox">我已阅读并同意
      </label>
      <a href="javascript:;">《订餐须知》</a>
    </div>
    <div class="weui-margin">
      <a href="javascript:;" class="weui-btn weui-btn_primary">开始预订</a>
    </div>
    <div class="weui-margin">
      <a href="javascript:;" class="weui-go">先去逛逛</a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
