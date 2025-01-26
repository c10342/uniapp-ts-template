import { requestUrl } from "@/config";

interface Config {
  baseUrl?: string;
  timeout?: number;
}

interface RequestConfig
  extends Omit<UniNamespace.RequestOptions, "success" | "fail"> {
  baseUrl?: string;
}

export class Request {
  private config: Config = {};

  constructor(data?: Config) {
    this.config = data || {};
  }

  private buildUrl(config: RequestConfig) {
    let { url, baseUrl = "" } = config;
    if (!url.startsWith("http")) {
      const index = baseUrl.lastIndexOf("/");
      if (index === baseUrl.length - 1) {
        baseUrl = baseUrl.substring(0, index);
      }
      if (!url.startsWith("/")) {
        url = `/${url}`;
      }
      url = `${baseUrl}${url}`;
    }
    return url;
  }

  sendRequest<T = any>(config: RequestConfig) {
    return new Promise<T>((resolve, reject) => {
      const mergeConfig = {
        ...this.config,
        ...config
      };

      uni.request({
        ...mergeConfig,
        url: this.buildUrl(mergeConfig),
        success(result) {
          resolve(result.data as T);
        },
        fail(result) {
          reject(result);
        }
      });
    });
  }

  get<T = any>(url: string, data?: object) {
    return this.sendRequest<T>({
      url,
      data,
      method: "GET"
    });
  }

  post<T = any>(url: string, data?: object) {
    return this.sendRequest<T>({
      url,
      data,
      method: "POST"
    });
  }
}

export const request = new Request({
  timeout: 1000 * 60,
  baseUrl: requestUrl
});
