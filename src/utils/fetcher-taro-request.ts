import Taro from '@tarojs/taro'

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await Taro.request({
      url: 'http://192.168.68.125:1337/graphql',
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
