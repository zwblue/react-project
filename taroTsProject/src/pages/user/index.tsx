import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

type PageOwnProps = {}  // 类型是对象

type PageState = {}

type IProps = PageOwnProps  // 继续其中的东西

interface Index {
  props: IProps;
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '页面1'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='page'>
        <Text>User</Text>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState> // 对Index 的进行类型检查
