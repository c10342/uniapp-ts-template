import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref(null);

  function setUserInfo(data: any) {
    userInfo.value = data;
  }

  return { userInfo, setUserInfo };
});
