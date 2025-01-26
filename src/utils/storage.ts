import type { LangEnum } from "@/enums";
import { isUndef } from "./is";

export const storage = {
  get(key: string, defaultValue?: any) {
    return uni
      .getStorage({ key })
      .then((res) => (isUndef(res) ? defaultValue : res));
  },
  set(key: string, value: any) {
    return uni.setStorage({ key, data: value });
  },

  getSync(key: string, defaultValue?: any) {
    const value = uni.getStorageSync(key);
    if (isUndef(value)) {
      return defaultValue;
    }
    return isUndef(value) ? defaultValue : value;
  },
  setSync(key: string, value: any) {
    return uni.setStorageSync(key, value);
  },

  getLang(defaultValue?: LangEnum) {
    return this.getSync("lang", defaultValue);
  },
  setLang(value: LangEnum) {
    return this.setSync("lang", value);
  }
};
