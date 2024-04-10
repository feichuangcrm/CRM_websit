import { envList } from "./env";
import path from "path";
const env: string = process.env.ENV || "development";

// @ts-ignore
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiToken: "",
    public: {
      ENV: process.env.NODE_ENV,
      UPDATED_DATE: Date.now(),
      IMG_URL: envList[env].NUXT_BASE_URL,
    },
  },

  devServer: {
    host: "0.0.0.0",
  },

  nitro: {
    routeRules: {
      "/": { swr: true },
    },
  },

  ssr: true,

  app: {
    keepalive: true,
    head: {
      titleTemplate: "%s | 飞创CRM",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
        },
        {
          name: "description",
          content: "基于飞书的协作型CRM产品",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://crm.feichuangtech.com" },
        { name: "twitter:title", content: "飞创CRM" },
        {
          name: "twitter:description",
          content: "基于飞书的协作型CRM产品",
        },
        {
          name: "twitter:image",
          content:
            "https://feichuang-www-dev.oss-cn-shenzhen.aliyuncs.com/sys/crm_logo.jpg",
        },

        { name: "og:type", content: "website" },
        { name: "og:site_name", content: "飞创CRM" },
        { name: "og:title", content: "飞创CRM" },
        { name: "og:url", content: "https://crm.feichuangtech.com" },

        {
          name: "og:image",
          content:
            "https://feichuang-www-dev.oss-cn-shenzhen.aliyuncs.com/sys/crm_logo.jpg",
        },
        {
          name: "og:description",
          content: "基于飞书的协作型CRM产品",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      script: [
        {
          id: "check-dark-light",
          children: `
            ;(() => {
              const preference = 'light'
              localStorage.setItem('vueuse-color-scheme', preference)
              const prefersLight = window.matchMedia('(prefers-color-scheme: dark)').matches
              if (!preference || preference === 'auto' ? prefersLight : preference === 'light') {
                document.documentElement.classList.add('light')
              } else {
                document.documentElement.classList.add('dark')
              }
            })()
          `,
        },
        {
          type: "text/javascript",
          children: `
            (function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
            fpr("init", {cid:"daflad6y"});
            fpr("click");
          `,
        },
        {
          src: "https://cdn.firstpromoter.com/fpr.js",
          async: true,
        },
      ],
    },
  },

  imports: {
    dirs: ["stores", "composables"],
  },

  components: {
    dirs: [{ path: "~/components", pathPrefix: false }],
  },

  modules: [
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@element-plus/nuxt",
    "unplugin-icons/nuxt",
    "nuxt-icons",
    "@unocss/nuxt",
    "@pinia/nuxt",
  ],

  build: {
    transpile: ["gsap"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          additionalData: `@require "../styles/ref.styl"`,
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en-US.js" },
      // { code: 'zhHans', iso: 'zh-Hans', name: '简体中文', file: 'zh-Hans.js' }
    ],
    langDir: "locales",
    strategy: "no_prefix",
    defaultLocale: "en",
    compilation: {
      strictMessage: false,
    },
  },

  image: {
    cloudflare: {
      baseURL: "https://feichuang-www-prod.oss-cn-shenzhen.aliyuncs.com/sys",
    },
  },
});

