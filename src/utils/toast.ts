function showMessage(options: { message: string; icon?: "success" | "error" }) {
  return uni.showToast({
    title: options.message,
    icon: options.icon,
    duration: 2000
  });
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
