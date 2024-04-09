export const envList: Record<string, Record<string, string>> = {
  development: {
    NODE_ENV: "development",
    NUXT_BASE_URL: "https://feichuang-www-dev.oss-cn-shenzhen.aliyuncs.com/sys",
  },
  test: {
    NODE_ENV: "test",
    NUXT_BASE_URL: "https://feichuang-www-dev.oss-cn-shenzhen.aliyuncs.com/sys",
  },
  prod: {
    NODE_ENV: "prod",
    NUXT_BASE_URL:
      "https://feichuang-www-prod.oss-cn-shenzhen.aliyuncs.com/sys",
  },
};

