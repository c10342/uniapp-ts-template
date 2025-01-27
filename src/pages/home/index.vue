<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png" /> -->
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <uni-card
      title="基础卡片"
      :is-full="true"
      sub-title="副标题"
      extra="额外信息"
    >
      <text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
    </uni-card>
    {{ system.lang }}--{{ t("common.loading") }}
    <button @click="onLang(LangEnum.zhCN)">中文</button>
    <button @click="onLang(LangEnum.enUS)">英文</button>
    <button :loading="loading" @click="onClick">request</button>
    <button @click="onSuccess">success</button>
    <button @click="onError">error</button>
    <button @click="onWarn">warn</button>
    <button @click="onLoading">loading</button>
    <button @click="onLogin">登录</button>

    <BaseIcon></BaseIcon>
    <text>111</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { useSystemStore } from "@/store";
import { useLocale, useRequest } from "@/hooks";
import { getTopicsList } from "@/api";
import {
  onGlobalDataReady,
  router,
  showErrorMessage,
  showLoading,
  showSuccessMessage,
  showWarnMessage
} from "@/utils";
import { LangEnum, RouteEnum } from "@/enums";

const title = ref("Hello");

const system = useSystemStore();

const { t } = useLocale();

const { sendRequest, loading } = useRequest(async () => {
  const res = await getTopicsList({ limit: 1 });
  console.log(res);
});

const onClick = () => {
  sendRequest();
};

const onSuccess = () => {
  showSuccessMessage("success").then((res) => {
    console.log(res);
  });
};
const onError = () => {
  showErrorMessage("error");
};
const onWarn = () => {
  showWarnMessage("warn");
};

const onLoading = () => {
  showLoading().then((res) => {
    setTimeout(() => {
      res.close();
    }, 2000);
  });
};

const onLang = (lang: LangEnum) => {
  system.setLang(lang);
};

const onLogin = () => {
  router.push({
    name: RouteEnum.Login,
    query: {
      jumpTo: RouteEnum.Home
    }
  });
};

onLoad(() => {
  console.log("onLoad");
});

onGlobalDataReady().then(() => {
  console.log("ready");
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
