import { createPinia } from "pinia"
import { createSSRApp } from "vue"
import App from "./App.vue"
// import uViewPro from "uview-pro"

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.use(pinia)
  // app.use(uViewPro)
  return {
    app
  }
}
