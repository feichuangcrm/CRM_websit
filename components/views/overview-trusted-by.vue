<template lang="pug">
.overview-trusted-by
  .limit-container.flex.flex-col.items-center
    //- h3.ma-0.section-grad-title.headline-2 {{ $t('overviewPage.trustedByTitle') }}
    //- .logo-wall-wrapper
    //-   .desktop-wall
    //-     .wall-item(
    //-       v-for="logo in logos"
    //-     )
    //-       .item-logo.item-neutral(
    //-         :style="{ backgroundImage: `url(${config.IMG_URL}/off/${logo}.svg)` }"
    //-       )
    //-       .item-logo.item-colorful(
    //-         :style="{ backgroundImage: `url(${config.IMG_URL}/on/${logo}.svg)` }"
    //-       )
  .mobile-wall
    //- client-only
    //-   vue-marquee-slider(
    //-     id="marquee-slider"
    //-     :speed="40000"
    //-     :width="120"
    //-     :space="24"
    //-   )
    //-     img(
    //-       v-for="(logo, index) in logos"
    //-       :key="logo"
    //-       :src="`${getIconLink(logo)}`"
    //-     )
</template>

<script setup lang="ts">
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/node_modules/vue3-marquee-slider/dist/style.css";
import DST_ON from "~/assets/icons/DST_ON.svg";
import DST_OFF from "~/assets/icons/DST_OFF.svg";
import ZZCR_ON from "~/assets/icons/ZZCR_ON.svg";
import ZZCR_OFF from "~/assets/icons/ZZCR_OFF.svg";
import LBTP_ON from "~/assets/icons/LBTP_ON.svg";
import LBTP_OFF from "~/assets/icons/LBTP_OFF.svg";
import NJZT_ON from "~/assets/icons/NJZT_ON.svg";
import NJZT_OFF from "~/assets/icons/NJZT_OFF.svg";

const logos = ref(["dst", "zzcr", "lbtp", "njzt"]);
const { public: config } = useRuntimeConfig();

const getIconLink = (name: string) => {
  switch (name) {
    case "dst":
      return DST_ON;
      break;
    case "zzcr":
      return ZZCR_ON;
      break;
    case "lbtp":
      return LBTP_ON;
      break;
    case "njzt":
      return NJZT_ON;
      break;
    default:
      return "";
      break;
  }
};
</script>

<style lang="stylus">
.overview-trusted-by
  position: relative
  padding-bottom: fluid-value(20, 120)
  background-color: #ffffff

  .section-grad-title
    max-width: 480px
    text-align: center

    @media (max-width: 390px)
      width: 315px
      font-size: 18px

  .logo-wall-wrapper
    margin: 0 auto
    margin-top: fluid-value(24, 64)

  .mobile-wall
    $scrollMaskSize = 10%
    width: 100%
    position: relative
    display: none
    -webkit-mask-image: s('linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))')
    -webkit-mask-size: 100% 100%

    @media (max-width: 1023px)
      display: block

    #marquee-slider
      img
        height: 100%

  .desktop-wall
    display: flex
    flex-wrap: wrap
    justify-content center
    gap: 84px 100px

    @media (max-width: 1023px)
      display: none

    .wall-item
      position: relative
      height: 70px
      aspect-ratio: 120/40

      .item-logo
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

      .item-colorful
        opacity: 0

      > *
        position: absolute
        inset: 0
        background-size: contain
        background-position: center center
        transition: 150ms cubic-bezier(.42, 0, .58, 1)

      &:hover
        .item-neutral
          opacity: 0

        .item-colorful
          opacity: 1
</style>

