import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

type PageOwnProps = {}  // 类型是对象

type PageState = {}

interface Index {
  props: PageOwnProps;
}

// }))
class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='meeting'>
        <Text>Meeting</Text>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
