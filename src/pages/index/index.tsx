import React from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
// import { useQuery } from 'react-query'
// import { GraphQLClient, gql } from 'graphql-request'
import { usePullDownRefresh } from '@tarojs/taro'
import { usePostsQuery } from '@/generated/graphql'

import './index.scss'

interface Props {}

const Index: React.FC<Props> = () => {
  const { data, isFetching, error, refetch } = usePostsQuery()
  // const { data, isFetching, error, refetch } = useQuery('posts', async () => {
  //   const graphQLClient = new GraphQLClient(
  //     'http://192.168.68.125:1337/graphql',
  //     {
  //       fetch: (url, options) =>
  //         new Promise(resolve =>
  //           Taro.request({
  //             url,
  //             header: options.headers,
  //             method: options.method,
  //             data: options.body,
  //             success: res =>
  //               resolve({
  //                 headers: {
  //                   ...options.headers,
  //                   get: (key: string) => options.headers[key]
  //                 },
  //                 ok: res.statusCode >= 200 && res.statusCode < 300,
  //                 statusText: () => res.errMsg,
  //                 json: () => Promise.resolve(res.data)
  //               }),
  //             fail: res => {
  //               console.log(`res`, res)
  //             }
  //           })
  //         )
  //     }
  //   )
  //   const result = await graphQLClient.request(
  //     gql`
  //       query {
  //         posts {
  //           id
  //           title
  //           slug
  //           tags {
  //             name
  //           }
  //         }
  //       }
  //     `
  //   )
  //   console.log(`result`, result)
  //   return result
  // })

  console.log(`data`, data)
  console.log(`isFetching`, isFetching)
  console.log(`error`, error)

  usePullDownRefresh(() => {
    console.log('onPullDownRefresh')
    refetch()
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary'>I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type='primary' circle>
        支持
      </AtButton>
      <Text>共建？</Text>
      <AtButton type='secondary' circle>
        来
      </AtButton>
      {data?.posts?.map(i => (
        <Text key={i?.id}>{i?.title}</Text>
      ))}
    </View>
  )
}

export default React.memo(Index)
