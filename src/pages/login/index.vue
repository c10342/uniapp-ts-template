<template>
  <div class="index">
    <button @click="onBack">返回</button>
    <button @click="onLogin">登录</button>
  </div>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { onDataReady, router } from "@/utils";
import { RouteEnum } from "@/enums";

const onBack = () => {
  router.back();
};

const query = ref<{ jumpTo?: string } | null | undefined>(null);

onLoad((event) => {
  query.value = event;
});

onDataReady(() => {
  console.log("login data ready");
});

const onLogin = () => {
  let jumpTo = query.value?.jumpTo;
  jumpTo = jumpTo || RouteEnum.Home;
  console.log(jumpTo);

  router.replace({ name: jumpTo });
};
</script>
