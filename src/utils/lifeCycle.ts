// 全局数据是否准备完毕，比如用户信息等，app的初始化跟页面的初始化是异步的，可能用户信息还没获取完成，页面就已经完成渲染了，所以需要等待数据准备完毕
let isDataReady = false;

// 数据准备完成之后的回调
let dataReadyCallback: Array<(...args: any) => any> = [];

// 给app.vue调用，全局数据
export function setGlobalDataReady() {
  isDataReady = true;
  const callbacks = dataReadyCallback.slice();
  callbacks.forEach((cb) => cb());
  dataReadyCallback = [];
}

// 全局数据准备完成，如用户数据
export function onGlobalDataReady(): Promise<void> {
  return new Promise((resolve) => {
    if (isDataReady) {
      resolve();
      return;
    }
    dataReadyCallback.push(resolve);
  });
}
