import { paramsSerializer } from '@/utils';

import { FetchRequest } from './model';

export class FetchError extends Error {
  constructor(
    response: Response,
  ) {
    super();
    this.response = response;
  }

  response?: Response;
}

const getUrl = (url: string, isBFF = false) => {
  if (isBFF) {
    return `/api${url}`;
  }

  return `${process.env.NEXT_PUBLIC_API_HOST}${url}`;
};

async function api<T, K>({
  url, params, config = {}, isBFF, method = 'GET',
}: FetchRequest<K>): Promise<T> {
  const response = await fetch(`${getUrl(url, isBFF)}?${paramsSerializer({
    ...params,
  })}`, {
    ...config,
    method,
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new FetchError(response);
  }

  const data = await response.json() as Promise<T>;

  return data;
}

export default api;
