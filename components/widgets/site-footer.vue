<template lang="pug">
.site-footer
  .left-box
    affine-logo.navbar-logo( name="logo2" style="height:28px;width:28px" )
    h1.crmName(style="width:135px") 飞创CRM
  .right-box
    .tel-info
      img( src="../../assets/icons/github.svg" alt="")
      a(href="https://github.com/feichuangcrm/crm_website" target="_blank") Github
    .tel-info
      img( src="../../assets/icons/AFFiNE.svg" alt="")
      el-popover( placement="right"  :disabled="isMobileBol" trigger="hover" :width="318" :popper-style="{padding:'16px',fontSize:'14px',color:'#8F959E'}" content="本官网基于AFFiNE官网开发，遵循开源协议。感谢AFFiNE团队的贡献和支持。")
        template(v-slot:reference)
          span(style="cursor:pointer" @click="openAffine") AFFiNE
    .tel-info
      img( src="../../assets/icons/email.svg" alt="")
      span lij@feichuangtech.com
    .address-info 
      img( src="../../assets/icons/address-company.svg" alt="")
      span 深圳市南山区粤海街道粤兴三道8号中国地质大学产学研基地B402室
hr(style="max-width: 1144px;background:#EFF0F1;height:1px;border:0")
div.justify Copyright 2024 深圳市飞创互联网技术服务有限公司
</template>

<script setup lang="ts">
const isMobileBol = ref(false);

onMounted(() => {
  const { isMobile } = useDevice();
  isMobileBol.value = isMobile;
});
const openAffine = () => {
  let system = navigator.userAgent;
  let isAndroid = system.indexOf("Android") > -1 || system.indexOf("Adr") > -1; // android终端
  let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  // 使用
  if (isAndroid) {
    //android终端
    window.open("https://affine.pro/");
  } else if (isiOS) {
    //ios终端
    window.location.href = "https://affine.pro/";
  } else {
    window.open("https://affine.pro/");
  }
};
</script>

<style lang="stylus" scoped>
.site-footer
  display: flex
  padding: 40px 32px 24px
  max-width: 1144px;
  margin: auto
  position:relative
  background:#ffffff
  .left-box
    display: flex
    align-items: center
    height: 34px
    flex: 1

  @media (max-width: 520px)
    flex-direction: column

    .right-box
      margin-top: 24px


  .right-box

    .tel-info
      display: flex
      align-items: flex-start
      margin-bottom: 24px

      span
        margin-left: 24px
        color: #8F959E
        word-break:break-all

      a
        margin-left: 24px
        color: #8F959E
        word-break:break-all

    .address-info
      display: flex
      align-items: flex-start

      span
        margin-left: 24px
        color: #8F959E
.justify
  max-width: 1144px;
  margin:0 auto
  font-size: fluid-value(14, 14, 390, 1024)
  font-weight: 400
  line-height: 24px
  text-align: left
  color: #BBBFC4;
  padding:8px 32px 16px
  background: #ffffff
  text-align: center
</style>

