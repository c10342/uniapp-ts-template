/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";

  const component: DefineComponent<object, object, any>;
  export default component;
}

// import.meta.env 类型提示
interface ImportMetaEnv {
  readonly VITE_REUQEST_URL: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
