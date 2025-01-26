import { ref } from "vue";
import { defineStore } from "pinia";
import { LangEnum } from "@/enums";

export const useSystemStore = defineStore("system", () => {
  const lang = ref<LangEnum>(LangEnum.zhCN);
  function setLang(data: LangEnum) {
    lang.value = data;
  }

  return { lang, setLang };
});
