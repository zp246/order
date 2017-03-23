<template>
  <div class="content">
    <!-- 头部 eleme-header-->
    <header class="eleme-header">
      <a href="javascript:" class="iconfont">&#xe603;</a>
      <div class="center"><span>申诉</span> </div>
      <a href="javascript"></a>
    </header>
    <textarea class="textarea-primary" placeholder="请输入申诉理由"></textarea>

    <div v-if="!image" class="order-appeal">
      <span v-for="image in images">
        <img :src="image" />
      </span>
      <input type="file" class="appeal" @change="onFileChange" multiple />
    </div>

    <div class="division"></div>
    <div class="weui-cell weui-bornotop">
      <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="请输入您的联系方式，以方便我们联系您">
      </div>
    </div>
    <div class="appeal-submit">
      <button class="weui-btn weui-btn_primary">提交</button>
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
