<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { hideLoading, setDataReady, showLoading } from "@/utils";

function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

async function initData() {
  await getUserInfo();
  // ...
}

onLaunch(() => {
  console.log("App Launch");
  showLoading();
  initData()
    .then(() => {
      setDataReady();
    })
    .finally(() => {
      hideLoading();
    });
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
