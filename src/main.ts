import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import i18n from "./locale";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  app.use(pinia);
  app.use(i18n);
  // 全局混入
  // app.mixin({
  //   onLoad() {}
  // });
  return {
    app
  };
}
