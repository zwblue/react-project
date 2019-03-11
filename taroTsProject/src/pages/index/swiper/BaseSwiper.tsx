import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem} from '@tarojs/components'

import './index.scss'

type PageOwnProps = {}  // 类型是对象

type PageState = {
  swiperList : any
}

interface Index {
  props: PageOwnProps
  state: PageState
}

class Index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      swiperList: [
        {
          imageUrl: require('../../../images/swiper/rw.jpg'),
        },
        {
          imageUrl: require('../../../images/swiper/rw.jpg')
        },
        {
          imageUrl: require('../../../images/swiper/rw.jpg')
        }
      ]
    }
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onChange = (value) => {
    console.log(value)
  }
  render () {
    const { swiperList } = this.state
    return (
      <View className='swiper-box'>
        <Swiper 
          indicatorDots
          indicatorColor='#fff'
          indicatorActiveColor='#ff8800'
        >
          {swiperList.map((item, index) => {
            return (
              <SwiperItem key={index}>
                <View className='img-box' style={{background: `url(${item.imageUrl})`,backgroundSize: '100% 100%'}}></View>
              </SwiperItem>
            )
          })}
        </Swiper>
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
