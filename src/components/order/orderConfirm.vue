<template>
  <div class="padding-bt">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>订单确认</span> </div>
      <a href="javascript"></a>
    </header>
    <div class="weui-cells weui-notop">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">车次座位</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" value="D2876 02车 02号">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">取餐地址</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" value="天津南站">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">取餐地址</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" value="天津南站">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">取餐时间</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text"  value="09:30-09:35">
        </div>
      </div>
    </div>
    <div class="division"></div>
    <div class="weui-cells weui-notop">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">联系人</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请输入联系人姓名">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">联系方式</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text"  value="18699356932">
        </div>
      </div>
    </div>
    <div class="division"></div>
    <div class="weui-cells weui-notop">
      <h3 class="shopinfo"><img src="./img/list_img.png">田老师红烧肉（通州物资店</h3>
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
            <p>满70减15(限在线支付)</p>
          </div>
          <div class="weui-cell__ft">
            <span class="font-pink">-¥15</span>
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
    <div class="weui-cells weui-notop">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label font-black">订单备注</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text"  placeholder="口味、偏好">
        </div>
      </div>
    </div>
    <div class="division"></div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from '../../components/footer/footer.vue'

  export default {
    components: {
      'v-footer': footer
    }
  }
</script>

<style scoped>

</style>
