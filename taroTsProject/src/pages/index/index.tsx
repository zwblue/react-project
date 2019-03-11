import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input, Button} from '@tarojs/components'
import BaseSwiper from './swiper/BaseSwiper'

import './index.scss'

// #region 书写注意
// 
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion


type PageOwnProps = {}  // 类型是对象

type PageState = {}


interface Index {
  props: PageOwnProps;
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '长江研究',
    navigationBarBackgroundColor: '#e31400',
    navigationBarTextStyle: 'white'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onChange = (value: any): void => {
    console.log(value)
  }
  openPdfEvent = (): void => {
    Taro.downloadFile({
      url: 'https://rdfile.gw.com.cn/new/dzh/tb_gg/2019/3/9/E05F4B3B68FCA97D88C89119520C1732_5073116.pdf',
      success: (res) => {
        console.log(res)
        var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
        // that.webview=Path
        Taro.openDocument({
          filePath: Path,
          fileType: 'pdf'
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
         throw new Error(err)
        })
      },
      fail: function(res) {
          console.log(res)
      }
  })
  }
  render () {
    return (
      <View className='research'>
        <View className='search-box'>
          <View className='input-box'>
            <View className='search-icon'></View>
            <Input placeholder='请输入关键字搜索' className='search-input' onInput={this.onChange}/>
          </View>
        </View>
        <BaseSwiper></BaseSwiper>
        <Button onClick={this.openPdfEvent}>打开pdf</Button>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
