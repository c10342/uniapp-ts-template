import { createI18n } from "vue-i18n";
import { LangEnum } from "@/enums";
import * as enUS from "./en-us";
import * as zhCN from "./zh-cn";
import * as zhTW from "./zh-tw";
import { storage } from "@/utils";

export const messages = {
  [LangEnum.enUS]: enUS,
  [LangEnum.zhCN]: zhCN,
  [LangEnum.zhTW]: zhTW
};

export const defaultLocale = LangEnum.zhCN;

function isLang(lang?: string) {
  if (!lang) {
    return false;
  }
  return Object.keys(LangEnum).includes(lang);
}

// 获取默认语言
export function getLocale(): LangEnum {
  // 获取缓存语言
  let lang = storage.getLang();
  if (isLang(lang)) {
    return lang;
  }
  // 获取系统的语言
  lang = uni.getLocale();
  if (isLang(lang)) {
    return lang;
  }
  return defaultLocale;
}

const i18nConfig = {
  locale: getLocale(), // 获取已设置的语言
  messages
};

const i18n = createI18n(i18nConfig);

// 获取国际化文本
export const getI18nText = i18n.global.t;

export default i18n;
