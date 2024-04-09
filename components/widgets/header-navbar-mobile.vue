<template lang="pug">
.header-navbar-mobile(
  :class="{ 'has-scroll': y > 0 }"
)
  .navbar-placeholder
  .navbar-fixed
    .flex.flex-1.justify-between.items-center.fixed-row
      nuxt-link.flex.flex-1.items-center( to="/" )
        affine-logo.navbar-logo( name="logo2" )
        span.crmName
          | 飞创CRM

      .flex.items-center.gap-12px
        stars-on-github-button

        .menu-handler(
          ref="menuHandler"
          @click="() => isOpen = !isOpen"
        )
          nuxt-icon.icon-menu( :name="isOpen ? 'menu-close' : 'hamburg-menu'" )

    div
      .collapsed-menu( :style="{ maxHeight: isOpen ? 'var(--h)' : '0px' }" )
        .menu-list
          //- .nav-item
          //-   nuxt-link( to="/" ) 定价
          .nav-item(@click="aboutUs") 
            span 关于我们

</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
const { locale, setLocaleCookie } = useI18n();

const menuHandler = ref(null);
const ignoreElRef = ref(null);
const ignoreResElRef = ref(null);
const isOpen = ref(false);
const isOpenCommunity = ref(false);
const isOpenResource = ref(false);

const props = defineProps<{
  y: number;
}>();

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

onClickOutside(
  menuHandler,
  (event) => {
    isOpen.value = false;
    isOpenCommunity.value = false;
    isOpenResource.value = false;
  },
  { ignore: [ignoreElRef, ignoreResElRef] }
);

watch(locale, () => {
  // setLocaleCookie(locale.value);
});
</script>

<style lang="stylus">
.header-navbar-mobile

  &.has-scroll
    .navbar-fixed
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.10);
      background: #ffffff

  .navbar-placeholder
    height: var(--navbar-height)

  .community-navbar
    margin: 0 -12px

  .community-item
    .arrow-icon
      transition: 218ms

    &.is-open-community
      .arrow-icon
        transform: rotate(90deg)

  .handler-row
    display: flex !important

  .navbar-fixed
    width: 100%
    top: 0
    position fixed
    z-index: $zIndexHeader
    backdrop-filter: blur(15px)
    border-bottom: 0.5px solid transparent;

    .fixed-row
      height: var(--navbar-height)
      padding: 4px
      padding-right: 8px
      padding: 0 32px

      @media (max-width: 390px)
        padding: 0 20px

    .try-link
      font-size: 14px

    .navbar-logo
      color: var(--logo-color)
      width: 28px
      height: 28px

    .icon-menu
      font-size: 24px
      color: var(--primary-deep)

    &.has-scrolled
      // background: var(--secondary)
      border-bottom-color: rgba(0, 0, 0, 0.10);

    .collapsed-menu
      transition: max-height 0.3s ease-in-out
      // background: var(--secondary)
      overflow-y: scroll
      --h: var(--navbar-height)
      height: var(--h)
      background-color: #FFFFFFE5

      .menu-list
        padding: 0 32px
        height: 100%
        display:flex
        flex-direction: column
        justify-content: center

        .nav-item
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: var(--primary-deep)
          letter-spacing: -0.28px;


          > span
            display: block
            padding: 10px
            font-size: 16px
            color: #1F2329;
            font-weight: 400
            border-radius:6px


            &:active,&:hover
              color: #3370FF
              background: #F2F3F5;

      .lang-list
        border-top: 1px solid var(--divider-color)
        margin-top: -16px

        .nav-item
          color: var(--primary)
</style>

<style scoped>
.crmName {
  font-size: fluid-value(16, 24, 390, 1024);
  font-weight: 600;
  line-height: 34px;
  margin-left: 8px;
}
</style>

