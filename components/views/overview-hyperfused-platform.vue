<template lang="pug">
.overview-hyperfused-platform
  .limit-container.flex.flex-col.items-center
    h2.section-title.section-grad-title 深度集成飞书，一站式工作平台

    .cards-row.flex.gap-4
      .card.say-goodbye-card
        physics-blocks.icons-wrapper
        .card-title(style="line-height:60px") 告别切换的麻烦
        .card-desc 厌倦了为了满足业务需要而频繁切换不同工具
      .flex.flex-col.side-part.gap-4
        .card.focused-card(style="padding:0")
          img.introduce1( :src="`${config.IMG_URL}/introduce1.gif`" style="margin-top:16px")
          div(style="padding:18px 16px 36px 16px")
            .card-mini-title 飞创CRM，释放你无限创造力
            .card-desc 轻松实现高效工作、激发团队创造力，推动业务增长
        .privacy-card
          img.introduce2( :src="`${config.IMG_URL}/introduce2.gif`")
          .card-mini-title.margin(style="margin-top:18px") 营销获客 销售管理
          .card-desc.margin 深度集成飞书应用，让业务流与协作流合二为一
</template>

<script setup lang="ts">
const { public: config } = useRuntimeConfig();
</script>

<style lang="stylus">
.overview-hyperfused-platform
  padding-top: fluid-value(60, 120, 744, 1024)
  padding-bottom: fluid-value(60, 120, 744, 1024)
  background: #F0F4FF

  .icon-list
    margin-bottom: 32px
    color: rgba(171, 171, 171, 1)
    gap: fluid-value(12, 20, 390, 560)

    .icon-wrapper
      display: flex
      justify-content: center
      align-items: center
      width: 38px
      height: 38px
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.10);
      background: #FFF
      font-size: 26.5px

      &:nth-child(1),
      &:nth-child(7)
        opacity: 0.3

      &:nth-child(2),
      &:nth-child(6)
        opacity: 0.5

      &:nth-child(3),
      &:nth-child(5)
        opacity: 0.7

  .section-title
    font-size: fluid-value(30, 44, 390, 1024)
    font-weight: 500
    line-height: fluid-value(50, 80, 390, 1024)
    letter-spacing: (-1.92/48em)
    max-width: 880px
    margin-bottom: 38px
    padding: 0 30px
    color: #1F2329

  .cards-row
    width: 100%

    @media (max-width: 1000px)
      flex-direction: column

    .side-part
      flex: 500
      min-width: s('min(528px, 100%)')

    .card
      padding: fluid-value(16, 24, 390, 744);
      padding-bottom: fluid-value(20, 24, 390, 744);
      border-radius: fluid-value(8, 16);
      background: #FFF;

    .card-title
      color: #000
      font-size: fluid-value(24, 32, 390, 560)
      font-weight: 500
      line-height: 125%
      letter-spacing: (-1.28/32em)
      margin-bottom: 8px

    .card-mini-title
      color: #000
      font-size: fluid-value(20, 32, 390, 744)
      font-weight: 500
      line-height: fluid-value(30, 60, 390, 744)
      letter-spacing: (-0.48/24em)
      margin-bottom: 8px

    .card-desc
      font-size: fluid-value(14, 20, 390, 744);
      line-height: 150%
      color: #8F959E

    .focused-card
      flex: 1
      position relative
      overflow hidden
      padding-top: 0
      display: flex
      flex-direction: column
      align-items: center

      .introduce1
        width:100%

      @media(max-width:520px)
        .introduce1
          width:100%
          height: auto




      .stay-focused-flow-placeholder
        height: 210px
        margin-bottom: 24px

      .stay-focused-flow,
      .stay-focused-flow-lottie
        position absolute
        top: 0
        left: 0
        width: 100%
        height: 210px

      .stay-focused-flow-lottie
        min-width: 500px
        transform: translateX(-50%)
        left: 50%

      .card-mini-title
        margin-bottom: 4px

      @media (min-width: 744px)
        .card-mini-title
          margin-bottom: 8px

    .say-goodbye-card
      flex: 564
      padding-top: 0
      min-height: 350px

      @media (min-width: 1025px)
        .card-title
          max-width: 350px


      .icons-wrapper
        position relative
        height: fluid-value(340, 450, 560)
        margin-bottom: fluid-value(24, 18, 744, 1024)

    .privacy-card
      position relative
      display: flex
      flex-direction: column
      justify-content: flex-end
      padding-bottom: fluid-value(20, 36, 390, 744);
      border-radius: fluid-value(8, 16);
      background: #FFF;
      overflow hidden

      .introduce2
        width:100%
      @media(max-width:520px)
        .introduce1
          width:100%
          height: auto

      &::before
        content:''
        display:table

      .margin
        margin-left: fluid-value(16, 24, 390, 744)
        margin-right: fluid-value(16, 24, 390, 744)

      .card-bg
        position absolute
        z-index: 2
        width: 100%
        height: 100%
        background-size: 680px 124px
        background-image: url(/overview/privacy-card-cover.png)
        background-repeat: no-repeat
        background-position: center top

      .card-wave-wrapper
        position absolute
        height: 140px
        left: 0
        top: 0
        width: 100%
        overflow: hidden

        &:before
          content: ''
          display: none
          position absolute
          bottom: 0
          height: 31px
          width: 100%
          z-index: 3
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);

        .card-wave
          position absolute
          width: 100%
          aspect-ratio: 1/1
          min-width: 690px
          height: auto
          left: 50%
          top: 50%
          transform: translate3d(-50%, -50%, 0)

      @media (max-width: 560px)
        .card-wave
          margin-left: 80px

        .card-bg
          background-position-x: -80px

      .card-cover
        height: 124px

      .card-mini-title
        margin-bottom: 4px
</style>

