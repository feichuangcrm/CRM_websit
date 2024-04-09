<template lang="pug">
video( :src="src" ref="el" x5-video-player-type="h5" x5-playsinline webkit-playsinline :controls="isControls"  playsinline autoplay="autoplay" loop muted)
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

const props = defineProps<{
  src: string;
  isActive?: boolean;
}>();

const el = ref();
const isControls = ref(false);

onMounted(() => {
  const { isMobile } = useDevice();
  let system = navigator.userAgent;
  let isAndroid = system.indexOf("Android") > -1 || system.indexOf("Adr") > -1; // android终端
  const nav = navigator.userAgent;

  const isLark = /(?:Lark)/.test(nav);
  isControls.value = isMobile && isAndroid && !isLark;
});

const targetIsVisible = useElementVisibility(el);

watch([targetIsVisible, () => props.isActive], (val) => {
  if (targetIsVisible.value && props.isActive) {
    el.value && el.value.play();
  } else {
    el.value && el.value.pause();
  }
});
</script>

<style lang="stylus" scoped>
video
  width: 100%
  height: 100%
  object-fit: cover
</style>

