import { ref } from "vue";
import { logError } from "@/utils";

export function useRequest<Params extends Array<any>, Respond = any>(
  action: (...args: Params) => Promise<Respond>
) {
  const loading = ref(false);

  async function sendRequest(...args: Params) {
    try {
      loading.value = true;
      const res = await action(...args);
      return res;
    } catch (error) {
      logError(error);
    } finally {
      loading.value = false;
    }
  }

  return { sendRequest, loading };
}
