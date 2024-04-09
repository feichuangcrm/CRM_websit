<template lang="pug">
.overview-hero-v3(
  ref="el"
  :style="{ '--scroll-progress': scrollProgress }"
  class="has-label"
)
  .limit-container
    .pin-wrapper-placeholder
    .hero-cover-wrapper
      video-play-when-visible( :poster="crmVideoPng" :src="`${config.IMG_URL}/video_CRM.mp4`" :isActive="isPlayVideo" )

  .pin-wrapper
    .left-logo(:class="isHover === 'left'?'scale_move':'scale_initMove'" @mouseover="mouseover('left')" @mouseleave="mouseleave")
      img(:src="`${config.IMG_URL}/left_logo.svg`")
    .text-wrapper.flex.flex-col.items-center
      h1.hero-fused-title.animated-in.animate-delay-50ms
        .row.first-row.flex.justify-center.limit-size
          | 大客户解决方案
        .row.second-row.flex.justify-center.items-end.mt-6px.limit-size
          | 营销CRM
      p.hero-desc.mb-0.animated-in.animate-delay-100ms 与飞书深度集成、简单易用的协作型客户管理系统
      button.startUse(@click="download")
        img.feiShuLogo(:src="FeiShuLogo")
        span 安装到飞书
      .cursor(:class="isHover === 'cursor'?'scale_move':'scale_initMove'" @mouseover="mouseover('cursor')" @mouseleave="mouseleave") 
        img(:src="`${config.IMG_URL}/cursor.svg`")
    .right-logo(:class="isHover=== 'right'?'scale_move':'scale_initMove'" @mouseover="mouseover('right')" @mouseleave="mouseleave")
      img(:src="`${config.IMG_URL}/right_logo.svg`")
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { useEventListener } from "@vueuse/core";
import type { Application } from "@splinetool/runtime";
import crmVideoPng from "~/assets/overview/crm_video.png";
import FeiShuLogo from "~/assets/icons/FeiShuLogo.svg";

const { public: config } = useRuntimeConfig();

const { isMobile } = useDevice();

const el = ref();
const canvasRef = ref();
const planCheckboxValue = ref(true);
const isPlayVideo = ref(isMobile);
const scrollProgress = ref(0);
const isHover = ref("");

let app: Application;
let cleanup: () => void;

const mouseover = (type: string) => {
  isHover.value = type;
};

const mouseleave = () => {
  isHover.value = "";
};

const download = () => {
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

const setupScrollTrigger = async () => {
  gsap.to(scrollProgress, {
    ease: "none",
    scrollTrigger: {
      markers: false,
      scrub: 0.5,
      trigger: ".overview-hero-v3 .pin-wrapper-placeholder",
      start: "top top",
      end: "bottom 20%",
      onUpdate(self) {
        if (isMobile) return;
        isPlayVideo.value = self.progress > 0.5;
      },
    },
    value: 1,
  });
};

onActivated(() => {
  const config = useRuntimeConfig();
  setupScrollTrigger();
});

onDeactivated(() => {
  app?.dispose();
  cleanup && cleanup();
});
</script>

<style lang="stylus">
.overview-hero-v3
  min-height: 600px
  position relative

  .product-hunt-button,
  .black-friday-button
    position relative
    top: -52px

    @media $mediaInMobile
      top: -32px

  .black-friday-button
    display: flex
    align-items: center
    font-size: 13px
    color: black
    font-weight: 700
    line-height: 19px
    border-radius: 54px;
    border: 1.5px solid var(--black-black, #000);
    background: #F8F8F7;
    box-shadow: 0px 4px 0px 0px #000;
    padding: 5px 16px;
    gap: 4px;
    transition 218ms

    &:hover
      box-shadow: 0px 2px 0px 0px #000;
      transform: translateY(1px)

    &:active
      box-shadow: 0px 0px 0px 0px #000;
      transform: translateY(2px)

  .pin-wrapper
    position fixed
    width: s('min(1920px, 100vw)')
    left: 50%
    transform: translate(-50%)
    top: var(--navbar-height)
    display: flex
    justify-content: center
    transition: all 2s linear

    .left-logo
      align-self: center;
      margin-bottom: 80px


    .right-logo
      width: 305px
      align-self: center;
      margin-left:16px

    @media (max-width: 1280px)
      .left-logo
      .right-logo
        display: none

    &,
    &-placeholder
      height: fluid-value(358, 640, 390, 1024)

    @media $mediaInXS
      position absolute
      top: 0

  &.has-label
    .pin-wrapper,
    .pin-wrapper-placeholder
      height: fluid-value(340, 640, 390, 1024)

  .spline-container
    width: 1600px
    aspect-ratio: 1920/1100
    position absolute
    top: -110px
    left: 50%
    transform: translateX(-50%)
    // z-index: 4
    z-index: -1
    pointer-events: none
    opacity: 0
    transition: 118ms linear 1s

    @media (max-width: 1023px)
      display: none

    &.is-inited
      opacity: 1

    canvas
      width: 100%
      height: 100%

  .bottom-gap
    width: 100%
    height: fluid-value(44, 88, 390, 1024)
    background: var(--bg)
    position relative
    z-index: 3

  .text-wrapper
    padding: 0 32px
    padding-top: fluid-value(44, 130, 390, 1024)
    pointer-events: none

    .limit-size
      font-size: fluid-value(30,  70, 390, 1024)


    .cursor
      align-self:flex-start
      margin-left: 70px
      width: 70px
      height: 70px

    @media (max-width: 1280px)
      .cursor
        display: none

    @keyframes animatedIn
      from
        opacity 0
        transform: translateY(-50px)
      to
        opacity 1
        transform: translateY(0)

    .animated-in
      animation animatedIn 800ms both
      animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

    .animate-delay-50ms
      animation-delay: 50ms

    .animate-delay-100ms
      animation-delay: 100ms

    .animate-delay-150ms
      animation-delay: 100ms

    > *
      position relative
      z-index: 3
      pointer-events: initial

    .hero-fused-title
      color: var(--primary-deep)
      font-size: fluid-value(40, 70, 390, 1024)
      font-weight: 500
      line-height: fluid-value(50, 80, 390, 1024)
      margin: 0


      .small-text
        font-size: 0.77em
        line-height: 1.15
        letter-spacing: -0.07em

      .symbol-cursor
        position relative
        left: (1/90em)
        margin-top: (7/90em)
        width: (7/90em)
        height: (71/90em)
        border-radius: (3/90em)
        background-color: var(--brand)

      .draw-word
        position relative
        top: (7/90em)
        font-family: Kalam, sans-serif
        font-weight: 400
        font-size: (107/90em)
        font-weight: 400
        line-height: 84.112%
        letter-spacing: (-7.49/107em)
        margin-left: (6/90em)

      .draw-plan
        position relative
        top: (7/90em)
        margin-left: (17/90em)
        gap: (8.39/90em)

        .big-checkbox
          position relative
          top: (13/90em)
          font-size: inherit
          width: (65/90em)
          height: (65/90em)
          // border: (4/90em) solid var(--brand)
          border-radius: (12/90em)
          cursor pointer

          .checked-icon
          .unchecked-icon
            position absolute
            left: 0
            top:0
            font-size: (65/90em)
            opacity: 0
            transition: 118ms
            transform: scale(0.9)

          .unchecked-icon
            opacity: 1
            transform: scale(1)

          &.is-checked
            .checked-icon
              opacity: 1
              transform: scale(1)

            .unchecked-icon
              opacity: 0
              transform: scale(0.95)

    .hero-desc
      white-space: pre-line
      text-align: center
      margin-top: 24px
      font-size: 20px
      font-weight: 500
      line-height: 135%
      letter-spacing: (-0.4/20em)
      margin-left: 4px
      margin-right: 4px
      color: #8F959E

      @media (max-width: 560px)
        max-width:210px

      @media $mediaInXS
        font-size: 16px

    .app-entry-button
      width: 179px
      margin-top: 36px

      @media $mediaInXS
        margin-top: 24px

  .hero-cover-wrapper
    max-width: 1040px
    margin: 0 auto
    overflow: hidden
    border-radius: fluid-value(8, 16)
    background: var(--white-white, #FFF)
    box-shadow: 0px 32px 54px -12px #1019282E;
    position relative
    z-index: 999999

    @media (max-width: 560px)
      z-index: 4

    @media (min-width: 1024px) and (min-height: 800px)
      transform: scale(calc(1 + 0.1 * var(--scroll-progress)))

    video
      display: flex
      width: 100%
      aspect-ratio: 721.15/500.8
.startUse
  background: #165DFF;
  padding: 10.5px 30px
  border-radius: 150px
  border: 0
  color: #ffffff
  display: flex
  align-items: center
  margin-top: 24px
  box-shadow: 0px 19px 45px -10px #548DE196;
  font-size:fluid-value(16, 21, 390, 1024)
  line-height: 33px
  cursor: pointer

  .feiShuLogo
    width: 30px
    height: 30px
    margin-right: 12px

.scale_move
  transition: all 0.5s linear;
  transform:  scale(1.4)
.scale_initMove
  transition: all 0.5s linear;
  transform:  scale(1)
</style>

<style>
img {
  font-size: 44px;
}
</style>

