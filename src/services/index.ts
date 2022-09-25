import { http } from "../lib/axios";

export interface ServerResponse<T> {
  data: T[] | T;
}

export const get = async <T>(
  url: string,
  queryParams = {}
): Promise<ServerResponse<T>> => {
  return new Promise((resolve, reject) =>
    http
      .get(url, { params: queryParams })
      .then((response: ServerResponse<T>) => resolve(response))
      .catch((err) => reject(err))
  );
};
