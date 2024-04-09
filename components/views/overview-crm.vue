<template lang="pug">
.crm-header
 .limit-container.flex.flex-col.items-center
    .text
      span.text-style-nor 最快
      span.text-style-nor.text-style-special  1天
      span.text-style-nor 即可迁移至飞创CRM
    
    img(:src="`${config.IMG_URL}/crm_feishu.png`" style="width:100%")

</template>

<script setup lang="ts">
const { public: config } = useRuntimeConfig();
</script>

<style lang="stylus">
.crm-header
  background: linear-gradient(0deg, #F0F4FF 37.45%, #FFF 126.09%);

  padding-top:fluid-value(20, 60, 390, 1024)

  .text
    margin-bottom: fluid-value(20, 50, 390, 1024)
    color: #1F2329

    .text-style-nor
      font-size:  fluid-value(20, 44, 390, 1024)
      font-weight: 600
      line-height: 80px
      letter-spacing: 0.05em
      text-align: center
    .text-style-special
      color: #3370FF
      margin: 0 14px 0  0px
      text-align: center
</style>

