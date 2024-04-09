<template lang="pug">
.layout.default-layout
  img.back-img( :src="`${config.IMG_URL}/back_img.svg`")
  site-header
  .fluid-container
    slot
  site-footer
  
div.inquire(v-if="!isMobileBol")
  .header(@click="buyInquire") 购买咨询
  .content
    el-tooltip(class="box-item" effect="light" placement="left")      
      template(v-slot:content)
        div.hint-box
          span.top 一对一专业企业顾问
          span.bottom 工作日9:00-18:00在线服务
      .use-inquire(@click="nowInquire") 
        img(:src="inquire")
        span 使用咨询
    //- el-tooltip(class="box-item" effect="light" placement="left")      
    //-   template(v-slot:content)
    //-     div.hint-box
    //-       span.top 实时解答使用问题
    //-       span.bottom 工作日9:00-18:00在线服务
    //-   .tel-contact 
    //-     img(:src="phone")
    //-     span 电话联系
    .back-top(@click="backTop") 
      img(:src="back_top")
      span 返回顶部
.inquire_mobile(v-else='isMobileBol')
  .use-inquire(@click="buyInquire") 
    img(:src="inquire_white")
</template>

<script setup lang="ts">
import back_img from "@/assets/overview/back_img.png";
import inquire from "@/assets/icons/inquire.svg";
import inquire_white from "@/assets/icons/inquire_white.svg";
import phone from "@/assets/icons/phone.svg";
import back_top from "@/assets/icons/back_top.svg";

const { public: config } = useRuntimeConfig();
const isMobileBol = ref(false);

onMounted(() => {
  const { isMobile } = useDevice();
  isMobileBol.value = isMobile;
});

//用来判断样式
const backTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const buyInquire = () => {
  let system = navigator.userAgent;
  let isAndroid = system.indexOf("Android") > -1 || system.indexOf("Adr") > -1; // android终端
  let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  // 使用
  if (isAndroid) {
    //android终端
    window.location.href =
      "https://feichuangtech.feishu.cn/share/base/form/shrcnSXNAv6sm7EQhnq7OMuYKld";
  } else if (isiOS) {
    //ios终端
    window.location.href =
      "https://feichuangtech.feishu.cn/share/base/form/shrcnSXNAv6sm7EQhnq7OMuYKld";
  } else {
    window.open(
      "https://feichuangtech.feishu.cn/share/base/form/shrcnSXNAv6sm7EQhnq7OMuYKld"
    );
  }
};

const nowInquire = () => {
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
</script>

<style lang="stylus">
.hint-box
  display: flex
  flex-direction: column
  justify-content: center
  padding: 16px
  background: #fff

  .top
    font-size: 17px
    font-weight: 400
    line-height: 24px
    text-align: center
    color: #3370FF
    margin-bottom: 10px

  .bottom
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: #646A73

.default-layout
  min-height: 500px
  position relative
  overflow: hidden
  background: #ffffff

  .back-img
    height: 660px
    width: 100%
    position: absolute

  .fluid-container
    height: 100%
    min-height: 500px
.inquire_mobile
  position:fixed
  top: 80%
  right: 16px
  z-index: 999999
  width: 52px
  height: 52px
  border-radius: 144.44px
  background-color: #3370FF


  .use-inquire
    width: 100%
    height: 100%
    display:flex
    justify-content: center
    align-items: center


.inquire
  position:fixed
  top 50%
  right: 0
  z-index: 999999

  .header
    width: 50px
    padding: 16px
    background: linear-gradient(340.11deg, #2A59FF 2.32%, #8CB3FF 86.87%, #D5E6FF 99.66%)
    border-radius: 400px
    cursor: pointer
    color: #fff
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 8px

  .content
    margin-top: 24px
    width: 50px
    border-radius: 400px
    padding: 20px 5px
    background-color: #fff
    font-size: 10px
    cursor: pointer
    margin-right: 8px
    box-shadow: 0px 4px 8px 0px rgba(96, 156, 255, 0.10)


    .use-inquire
      display: flex
      justify-content:center
      align-items:center
      flex-direction: column
      margin-bottom: 16px
    .tel-contact
      display: flex
      justify-content:center
      align-items:center
      flex-direction: column
      margin-bottom: 16px
    .back-top
      display: flex
      justify-content:center
      align-items:center
      flex-direction: column

@media (max-width:560px)
  .inquire
    display:none

.el-popper.is-light
  box-shadow: -4px 8px 12px 0px rgba(231, 236, 247, 0.50), -2px 4px 10px 0px rgba(96, 156, 255, 0.10), 0px 2px 5px 0px rgba(96, 156, 255, 0.15);
  border: 0px
  padding: 0
</style>

