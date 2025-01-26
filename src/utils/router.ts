import qs from "qs";
import pages from "@/pages.json";

interface Params {
  name: string;
  query?: object;
}

function handleUrl(params: Params) {
  let url = decodeURIComponent(params.name);
  if (params.query) {
    const qsStr = qs.stringify(params.query);
    if (qsStr) {
      url += `?${qsStr}`;
    }
  }
  return url;
}

function isTabBarPage(url: string) {
  const tabBarList: Array<{ pagePath: string }> =
    (pages as any).tabBar?.list || [];
  const index = tabBarList.findIndex((item) => item.pagePath === url);
  return index > -1;
}

export const router = {
  push(params: Params) {
    const url = handleUrl(params);
    if (isTabBarPage(url)) {
      return uni.switchTab({ url });
    }

    return uni.navigateTo({ url });
  },
  back(delta = 1) {
    return uni.navigateBack({ delta });
  },
  replace(params: Params) {
    const url = handleUrl(params);
    if (isTabBarPage(url)) {
      return uni.switchTab({ url });
    }
    return uni.redirectTo({ url });
  }
};
