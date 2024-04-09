export default defineNuxtPlugin(() => {


  addRouteMiddleware('track-pageview', () => {
    try {
    } catch (error) {}
  }, { global: true })
})
