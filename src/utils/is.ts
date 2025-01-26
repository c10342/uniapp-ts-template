import { isNull, isUndefined } from "lodash-es";

export function isUndef(data: any): data is null | undefined {
  return isNull(data) || isUndefined(data);
}
