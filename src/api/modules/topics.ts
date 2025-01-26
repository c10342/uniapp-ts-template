import { request } from "@/utils";
import type {
  BaseRespond,
  GetTopicsListParams,
  TopicsListItem
} from "../types";

// 测试接口
export const getTopicsList = (params: GetTopicsListParams) =>
  request.get<BaseRespond<TopicsListItem[]>>("/topics", params);

export const getTopicDetail = (id: string) => request.get(`/topic/${id}`);
