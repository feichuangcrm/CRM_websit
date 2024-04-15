<template lang="pug">
.overview-slogan-banner
  img(:src="`${config.IMG_URL}/${isMobileBol?'footer_pure_mobile.png':'footer_1.svg'}`" class="animation1 image-set-of-item")
  .limit-container.flex.flex-col.items-center
    h1.header-title 和你的优秀销售一起，开启高效赢单之旅
    h1.content-title 立即免费试用，或咨询我们，了解飞创CRM如何帮助您的团队 
    .flex.justify-center.gap-4.action-row
      button.free-btn(@click="freeUse") 免费试用
      button.inquire-btn(@click="inquire") {{isMobileBol?"联系我们":"立即咨询"}}
</template>

<script setup lang="ts">
const { public: config } = useRuntimeConfig();

const isMobileBol = ref(false);

onMounted(() => {
  const { isMobile } = useDevice();
  isMobileBol.value = isMobile;
});

const freeUse = () => {
  let system = navigator.userAgent;
  let isAndroid = system.indexOf("Android") > -1 || system.indexOf("Adr") > -1; // android终端
  let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  // 使用
  if (isAndroid) {
    //android终端
    window.open("https://app.feishu.cn/app/cli_a37f3dd4753a1013");
  } else if (isiOS) {
    //ios终端
    window.location.href = "https://app.feishu.cn/app/cli_a37f3dd4753a1013";
  } else {
    window.open("https://app.feishu.cn/app/cli_a37f3dd4753a1013");
  }
};

const inquire = () => {
  let system = navigator.userAgent;
  let isAndroid = system.indexOf("Android") > -1 || system.indexOf("Adr") > -1; // android终端
  let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  // 使用
  if (isAndroid) {
    //android终端
    window.open("https://applink.feishu.cn/T8BMKE4YlvgE");
  } else if (isiOS) {
    //ios终端
    window.location.href = "https://applink.feishu.cn/T8BMKE4YlvgE";
  } else {
    window.open("https://applink.feishu.cn/T8BMKE4YlvgE");
  }
};

// onUnmounted(() => {
//   clearInterval(timer);
// });
</script>

<style lang="stylus">
.overview-slogan-banner
  padding: 40px 0
  background-repeat:no-repeat
  background-size: cover
  position: relative
  overflow hidden
  transition: all 1s linear

  img
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    margin: auto
    width: 100%
    height: 100%
    object-fit: cover
    z-index: -1

  .header-title
    font-size:  fluid-value(30,  36, 390, 1024);
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 8px
    margin-top: 0px

  .content-title
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #8F959E
    margin-bottom: 36px
    margin-top: 0px



  .action-row
    button,
    .free-btn
      height:  fluid-value(46,  54, 390, 1024)
      padding: 10.5px 30px 10.5px 30px
      gap: 12px
      border-radius: 150px
      color:#ffffff
      background-color: #165DFF
      font-size: fluid-value(16, 21, 390, 1024)
      border: 0
      cursor: pointer
    .inquire-btn
      height:  fluid-value(46,  54, 390, 1024)
      padding: 10.5px 30px 10.5px 30px
      gap: 12px
      border-radius: 150px
      color:#165DFF
      background-color: transparent
      border: 1.5px solid #165DFF
      font-size: fluid-value(16, 21, 390, 1024)
      cursor: pointer
</style>

