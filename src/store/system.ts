import { ref } from "vue";
import { defineStore } from "pinia";
import { LangEnum } from "@/enums";
import i18n, { getLocale } from "@/locale";
import { storage } from "@/utils";

export const useSystemStore = defineStore("system", () => {
  const lang = ref<LangEnum>(getLocale());
  function setLang(data: LangEnum) {
    // 响应式
    lang.value = data;
    // 框架国际化
    uni.setLocale(data);
    // vue-i18n
    i18n.global.locale = data;
    // 获取设置的语言
    storage.setLang(data);
  }

  return { lang, setLang };
});
