<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
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
    {{ system.lang }}

    <button :loading="loading" @click="onClick">request</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSystemStore } from "@/store";
import { useRequest } from "@/hooks";
import { getTopicsList } from "@/api";

const title = ref("Hello");

const system = useSystemStore();

const { sendRequest, loading } = useRequest(async () => {
  const res = await getTopicsList({ limit: 1 });
  console.log(res);
});

const onClick = () => {
  sendRequest();
};
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
