// 全局数据是否准备完毕，比如用户信息等，app的初始化跟页面的初始化是异步的，可能用户信息还没获取完成，页面就已经完成渲染了，所以需要等待数据准备完毕
let isDataReady = false;

// 数据准备完成之后的回调
let dataReadyCallback: Array<(...args: any) => any> = [];

// 个给app.vue调用
export function setDataReady() {
  isDataReady = true;
  const callbacks = dataReadyCallback.slice();
  callbacks.forEach((cb) => cb());
  dataReadyCallback = [];
}

// export function onDataReady(): Promise<void> {
//   return new Promise((resolve) => {
//     if (isDataReady) {
//       resolve();
//       return;
//     }
//     const action = () => {
//       resolve();
//     };
//     dataReadyCallback.push(action);
//   });
// }

export function onDataReady(action: (...args: any) => any) {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  // 拦截，重写onload方法
  const oldOnLoad = currentPage.onLoad;
  currentPage.onLoad = function onLoad(...args: any) {
    oldOnLoad?.(...args);
    if (isDataReady) {
      action();
    } else {
      const index = dataReadyCallback.findIndex((fn) => fn === action);
      if (index === -1) {
        dataReadyCallback.push(action);
      }
    }
  };
}
