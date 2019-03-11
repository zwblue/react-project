import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/meeting/index',
      'pages/user/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#426188',
      color: '#929292',
      backgroundColor: '#1d2833',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'images/tabs/tab_index.png',
          selectedIconPath: 'images/tabs/tab_index_on.png'
        },
        {
          pagePath: 'pages/meeting/index',
          text: '自选',
          iconPath: 'images/tabs/tab_optional.png',
          selectedIconPath: 'images/tabs/tab_optional_on.png'
        },
        {
          pagePath: 'pages/user/index',
          text: '行情',
          iconPath: 'images/tabs/tab_market.png',
          selectedIconPath: 'images/tabs/tab_market_on.png'
        },
        {
          pagePath: 'pages/meeting/index',
          text: '资讯',
          iconPath: 'images/tabs/tab_info.png',
          selectedIconPath: 'images/tabs/tab_info_on.png'
        },
        {
          pagePath: 'pages/index/index',
          text: '我的',
          iconPath: 'images/tabs/tab_user.png',
          selectedIconPath: 'images/tabs/tab_user_on.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
