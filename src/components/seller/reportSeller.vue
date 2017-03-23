<template>
  <div class="content highbg">
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>举报商家</span> </div>
      <span class="rating-edit">提交</span>
    </header>
    <div class="report-title">
      <span class="iconfont font-blue">&#xe67a;</span>肯德基天津南站店
    </div>
    <div class="content1">
      <label class="report-label">
        <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
        资质作假
      </label>
      <label class="report-label">
        <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
        商品照片和实物不符
      </label>
      <label class="report-label">
        <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
        商家虚假广告
      </label>
      <label class="report-label">
        <input type="checkbox" class="checkbox_primary" name="myrating"><i></i>
        商品信息错误，电话位置
      </label>
    </div>
    <div class="division"></div>
    <textarea class="textarea-primary" placeholder="描述详细情况"></textarea>

    <div v-if="!image" class="order-appeal">
      <span v-for="image in images">
        <img :src="image" />
      </span>
      <input type="file" class="appeal" @change="onFileChange" multiple />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        image: '',
        images: []
      }
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files);
      },
      createImage(file) {
        var image = new Image();
        var vm = this;
        var leng = file.length;

        for(var i=0;i<leng;i++){
          var reader = new FileReader();
          reader.onload = (e) => {
            vm.images.push(e.target.result);
          };
          reader.readAsDataURL(file[i]);
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
