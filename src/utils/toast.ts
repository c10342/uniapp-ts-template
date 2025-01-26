import { getI18nText } from "@/locale";
import { logError } from "./log";

function showMessage(options: { message: string; icon?: "success" | "error" }) {
  return uni
    .showToast({
      title: options.message,
      icon: options.icon,
      duration: 2000
    })
    .catch(logError);
}

export function showSuccessMessage(message: string) {
  return showMessage({ message, icon: "success" });
}
export function showErrorMessage(message: string) {
  return showMessage({ message, icon: "error" });
}
export function showWarnMessage(message: string) {
  return showMessage({ message, icon: "error" });
}

export function showLoading(options?: { title?: string }) {
  function action(success: boolean, data?: any) {
    return {
      success,
      data,
      close: hideLoading
    };
  }
  return uni
    .showLoading({
      title: options?.title || getI18nText("common.loading")
    })
    .then((data) => action(true, data))
    .catch(() => action(false));
}

export async function hideLoading() {
  return uni.hideLoading();
}
