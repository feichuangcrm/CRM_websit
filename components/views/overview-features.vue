<template lang="pug">
.overview-features( ref="el" )
  mixin writeIntro
    .intro-part
      .content-text
        span
          | 易于推行、零学习成本
        span   
          | 销售无感上手
      p.feature-desc(style="color:#8F959E") 促进团队信息协作、数据一目了然、决策快又准、业务流转轻松顺畅
      //- button.more-btn 了解更多

  mixin drawIntro
    .intro-part
      .content-text
        span
          | 客户融资、产品动态
        span   
          | 自动识别推送
      p.feature-desc(style="color:#8F959E") 客户融资数据、重大新闻自动推送给销售，不错过任何商机
      //- button.more-btn 了解更多

  mixin planIntro
    .intro-part
      .content-text
        span
          | AI教练：规范基本操作
        span   
          | 提高销售技能
      p.feature-desc(style="color:#8F959E") 助力团队快速响应客户需求、销售成交更高效、管理指令一清二楚、推动销售自我驱动
      //- button.more-btn 了解更多
  mixin customerIntro
    .intro-part
      .content-text
        span
          | 对话机器人、快捷信息交互、全新信息入口
      p.feature-desc(style="color:#8F959E") 向对话机器人发送客户简称，就能自动返回所有相关客户
      //- button.more-btn 了解更多
  mixin taskIntro
    .intro-part
      .content-text
        span
          | 为每个销售创建一张销售BI看板
      p.feature-desc(style="color:#8F959E") 数据自动同步飞书多维表格，每个销售都可以灵活分析自己的客户数据，制定销售BI看板
      //- button.more-btn 了解更多
  .feature-section.feature-write
    .limit-container.flex
      +writeIntro
      .video-part
        .video-card.pin-card
          .video-wrapper( :progress="scrollProgress" )
            img.video-write( alt="write cover" :class="{ 'current': currentSection === 'write' }"  :src="`${config.IMG_URL}/video1.gif`" )
            img.video-draw( alt="draw cover" :class="{ 'current': currentSection === 'draw' }" :src="`${config.IMG_URL}/video2.gif`" )
            img.video-plan( alt="plan cover" :class="{ 'current': currentSection === 'plan' }" :src="`${config.IMG_URL}/video3.gif`" )
            img.video-customer( alt="customer cover" :class="{ 'current': currentSection === 'customer' }" :src="`${config.IMG_URL}/video4.gif`" )
            img.video-task( alt="task cover" :class="{ 'current': currentSection === 'task' }" :src="`${config.IMG_URL}/video5.gif`" )

        .video-card.mobile-card
          img.video-write(:src="`${config.IMG_URL}/video1.gif`" :isActive="true")
  .feature-section.feature-draw
    .limit-container.flex
      +drawIntro
      .video-part
        .video-card.mobile-card
          img.video-draw( :src="`${config.IMG_URL}/video2.gif`" :isActive="true")
  .feature-section.feature-plan
    .limit-container.flex
      +planIntro
      .video-part
        .video-card.mobile-card
          img.video-plan(:src="`${config.IMG_URL}/video3.gif`" :isActive="true")
  .feature-section.feature-plan
    .limit-container.flex
      +customerIntro
      .video-part
        .video-card.mobile-card
          img.video-customer(:src="`${config.IMG_URL}/video4.gif`" :isActive="true")

  .feature-section.feature-plan
    .limit-container.flex
      +taskIntro
      .video-part
        .video-card.mobile-card
          img.video-task(:src="`${config.IMG_URL}/video5.gif`" :isActive="true")

  
</template>

<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import { useElementVisibility } from "@vueuse/core";
import { gsap } from "gsap";

const scrollTriggerBreakWidth = 900;

const writeCoverUrl = "/overview/Write.jpg";
const drawCoverUrl = "/overview/Draw.jpg";
const planCoverUrl = "/overview/Plan.jpg";

const { t } = useI18n();

const el = ref();
const needScrollTrigger = ref(false);
const currentSection = ref("write");
const scrollProgress = ref(0);
const planLottie = ref();
const elIsVisible = useElementVisibility(el);
const pinCardScale = 1.1;
const { public: config } = useRuntimeConfig();

const dynamicStates = reactive({
  titleText: "7777",
  typingIndex: -1,
  isTyping: false,
});

const drawScrollStates = reactive({
  isShowDrawMark: false,
  isShowEaseMark: false,
  isShowCreativityMark: false,
});

const planScrollStates = reactive({
  isPlayPlanLottie: false,
});

useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const width = entry.target.getBoundingClientRect().width;
  needScrollTrigger.value = width >= scrollTriggerBreakWidth;
});

const setupPlanScrollTrigger = () => {
  const timeline = gsap
    .timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
    })
    .to(planScrollStates, {
      isPlayPlanLottie: true,
    });

  gsap.to(planScrollStates, {
    scrollTrigger: {
      trigger: ".feature-section.feature-plan",
      start: "20% center",
      onEnter: () => {
        timeline.play();
      },
    },
  });
};

const setupDrawScrollTrigger = () => {
  const drawingTimeline = gsap.timeline({
    paused: true,
  });

  drawingTimeline
    .to(drawScrollStates, {
      isShowDrawMark: true,
      duration: 1,
    })
    .to(drawScrollStates, {
      isShowEaseMark: true,
      duration: 1,
    })
    .to(drawScrollStates, {
      isShowCreativityMark: true,
      duration: 1,
    });

  gsap.to(drawScrollStates, {
    scrollTrigger: {
      trigger: ".feature-section.feature-draw",
      start: "20% center",
      onEnter: () => {
        drawingTimeline.play();
      },
    },
  });
};

const setupWriteScrollTrigger = () => {
  const drawingTimeline = gsap.timeline({
    paused: true,
  });

  drawingTimeline.to(dynamicStates, {
    isTyping: true,
    textTypingIndex: dynamicStates.titleText.length - 1,
    ease: `steps(${dynamicStates.titleText.length - 1})`,
    duration: 2,
  });

  gsap.to(dynamicStates, {
    scrollTrigger: {
      trigger: ".feature-section.feature-write",
      start: "20% center",
      onEnter: () => {
        drawingTimeline.play();
      },
    },
  });
};

const setupScrollTrigger = () => {
  setupDrawScrollTrigger();
  setupWriteScrollTrigger();
  setupPlanScrollTrigger();

  const pinCard = document.querySelector(".video-card.pin-card");

  if (!pinCard) return;

  gsap.to(scrollProgress, {
    ease: "none",
    value: 1,
    scrollTrigger: {
      pinSpacing: false,
      trigger: ".overview-features",
      scrub: true,
      pin: pinCard,
      markers: false,
      start: "-76px top",
      end: () => {
        const pinHeight = pinCard.getBoundingClientRect().height / pinCardScale;
        const height = el.value?.getBoundingClientRect().height - pinHeight / 2;
        return `${height}px ${pinHeight}px`;
      },
    },
  });
};

watch(
  () => planScrollStates.isPlayPlanLottie,
  (val) => {
    if (val) {
      planLottie.value?.play();
    }
  }
);

watch(scrollProgress, (val) => {
  if (val > 0.8) {
    currentSection.value = "task";
    return;
  }
  if (val > 0.6) {
    currentSection.value = "customer";
    return;
  }

  if (val > 0.4) {
    currentSection.value = "plan";
    return;
  }

  if (val > 0.2) {
    currentSection.value = "draw";
    return;
  }
  currentSection.value = "write";
});

watch(currentSection, (val) => {
  const $videos = [
    ...document.querySelectorAll<HTMLVideoElement>(".pin-card video"),
  ];
  $videos.map(($el) => {
    $el.pause();
  });
  const $video = document.querySelector<HTMLVideoElement>(
    `.pin-card video.video-${val}`
  );
  if ($video) {
    $video.play();
  }
});

watch(elIsVisible, (val) => {
  const $video = document.querySelector<HTMLVideoElement>(
    ".pin-card video.current"
  );
  if ($video) {
    val ? $video.play() : $video.pause();
  }
});

onMounted(() => {
  setupScrollTrigger();
});
</script>

<style lang="stylus">
.overview-features
  position relative
  $scrollTriggerMaxWidth = s('(max-width: 900px)')
  background: #f0f4ff;

  @media (max-width: 560px)
    padding-bottom: 30px

  @media $mediaInXS
    padding-left: 12px
    padding-right: 12px

  @keyframes blinking
    from,
    49.8%{
      opacity: 1;
    }
    49.9%,
    99.9% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }

  cursor()
    animation: blinking 1s linear infinite

  .write-label
    font-style: italic;
    font-weight: 700;
    font-size: fluid-value(32, 40)
    line-height: 1
    color #000
    margin-left: -0.1em

    .char
      opacity: 0
      position relative

      &:last-child
        margin-right: 0.15em

      &.is-typed
        opacity: 1

    &:after
      content: ''
      display: inline-block
      background: #1e96eb
      width: 5px
      height: 1em
      border-radius: 4px
      position: relative
      top: 0.15em
      cursor()

  .feature-section
    padding-top: fluid-value(30, 100, 560, 1024)
    padding-bottom: fluid-value(30, 100, 560, 1024)
    // min-height: 100vh
    display flex
    align-items: center
    background: #F0F4FF

    @media $scrollTriggerMaxWidth
      min-height: 0

    .limit-container
      align-items: center
      justify-content: space-between
      column-gap: 35px
      row-gap: 32px

      @media $scrollTriggerMaxWidth
        align-items: flex-start
        flex-direction: column

    .intro-part
      display: flex
      flex-direction: column
      gap: fluid-value(12, 24, 560, 744)
      flex: 470
      max-width: 500px

      .header-text
        background: #E1EAFF;
        padding: 5px 8px
        border-radius: 2px
        color: #3370FF
        width: 160px
        font-size: 18px

      .content-text
        font-size: fluid-value(30, 44, 390, 1024);
        font-weight: 600;
        line-height: 60px;
        letter-spacing: 0.05em;
        text-align: left;
        display: flex
        flex-direction: column

      .more-btn
        background: #165DFF
        padding: 10.5px 30px
        border-radius: 150px
        color: #ffffff
        font-size: 21px
        border: 0
        width: 144px


      @media $scrollTriggerMaxWidth
        max-width: 100%

    .feature-label
      color: var(--brand)
      font-size: 14px
      font-weight: 600
      line-height: 142.857%
      letter-spacing: 1.4px
      text-transform: uppercase

    .feature-title
      color: var(--primary-deep)
      font-size: fluid-value(24, 36, 390, 760)
      font-weight: 500
      line-height: 119.444%
      letter-spacing: -(1.44/36em)
      margin: 0

      em
        font-size: 1.11em
        font-family: Kalam, sans-serif
        font-weight: 400
        font-style: normal
        letter-spacing: -(0.8/40em)

    .feature-desc
      font-size: 20px
      line-height: 150%
      margin: 0

      @media $mediaInXS
        font-size: 14px

    .video-part
      flex: 620
      max-width: 720px
      width: 100%
      aspect-ratio: 720/500

    .video-card
      border-radius: fluid-value(8, 16);
      border: 1px solid var(--black-quinary, #F4F4F5);
      background: var(--white-white, #FFF);
      overflow: hidden
      aspect-ratio: 720/500

      img
        width: 100%
        height: 100%
        object-fit: cover

    .pin-card
      display: block

      @media (min-width: 1280px)
        transform: scale(1.1)
        transform-origin: left center

      .video-wrapper
        position relative
        width: 100%
        height: 100%

        video,
        img
          position absolute
          inset: 0
          opacity: 0
          transition: 318ms

          &.current
            opacity: 1

      @media $scrollTriggerMaxWidth
        display: none

    .mobile-card
      display: none
      background-color: transparent



      @media $scrollTriggerMaxWidth
        display: block

  .feature-draw
    .feature-title

      @media (min-width: 1024px)
        width: 9em

    .underline-wrapper
      position: relative

  .svg-icon-drawing
    position: absolute

    &.draw-mark
      left: 0em
      top: -0.05em
      font-size: 2.32em

    &.ease-mark
      left: -0.1em
      top: -0.25em
      font-size: 2.38em

    &.creativity-mark
      left: -0.02em
      top: -0.25em
      font-size: (156/36em)

  .plan-lottie
    width: 70px
    margin: 0
    margin-bottom: -11px
    margin-left: 1px

    svg
      // transform: scale(1.2) !important
@media(min-width: 1024px)
  .limit-container
    padding:0
</style>
