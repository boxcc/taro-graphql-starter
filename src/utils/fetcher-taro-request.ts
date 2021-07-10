import Taro from '@tarojs/taro'
import config from '@/config';

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await Taro.request({
      url: config.gqlEndpoint,
      method: 'POST',
      data: { query, variables }
    })

    const json = res.data

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
