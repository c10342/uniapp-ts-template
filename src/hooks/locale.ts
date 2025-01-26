import { useI18n } from "vue-i18n";
import { messages } from "@/locale";

export function useLocale() {
  //   const { t } = useI18n<typeof enUS>();
  // 实例化
  const i18n = useI18n<
    { message: typeof messages.en },
    keyof typeof messages
  >();

  const t = i18n.t;

  return { t };
}
