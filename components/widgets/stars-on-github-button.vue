<template lang="pug">
div.tabList
  //- span 定价
  span(@click="aboutUs") 关于我们
  button.freeBtn(@click="freeUse") 免费试用
</template>

<script setup lang="ts">
import GithubCircle from "~icons/mdi/github-circle";

const aboutUs = () => {
  let system = navigator.userAgent;
  let isAndroid = system.indexOf("Android") > -1 || system.indexOf("Adr") > -1; // android终端
  let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  // 使用
  if (isAndroid) {
    //android终端
    window.open("https://www.feichuangtech.com/");
  } else if (isiOS) {
    //ios终端
    window.location.href = "https://www.feichuangtech.com/";
  } else {
    window.open("https://www.feichuangtech.com/");
  }
};

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
</script>

<style lang="stylus">
.tabList
  display: flex
  align-items: center
  gap: 40px

  span
    cursor: pointer
    font-size: 14px

  .freeBtn
    padding: 6px 26px 6px 26px
    font-size: fluid-value(14, 16, 390, 1024);
    border-radius: 100px
    background: #165DFF
    border: 0px
    color: #FFFFFF
    text-align: center
    cursor: pointer

@media (max-width: 569px)
  .tabList
    span
      display: none
</style>

