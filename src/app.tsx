import { Component } from 'react'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import 'taro-ui/dist/style/components/button.scss' // 按需引入

import './app.scss'

const queryClient = new QueryClient()

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        {this.props.children}
      </QueryClientProvider>
    )
  }
}

export default App
