import BaseIcon from "./baseIcon/index.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseIcon: typeof BaseIcon;
  }
}
