// api基础响应结构
export interface BaseRespond<T = any> {
  success: boolean;
  data: T;
}
