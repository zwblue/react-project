import React, { Component } from 'react'
import { Text, View , Animated, Image, StyleSheet} from 'react-native'
import px2dp, { rowFlex } from '../utils/mixin';
const styles = StyleSheet.create({
  noticePage:{
    ...rowFlex('space-between', 'center'),
    height: 20,
    marginTop: 8,
    overflow: 'hidden',
    marginBottom: 8,
    
  },
  noticeIcon: {
    width: px2dp(48),
    height: px2dp(40),
  },
  rightIcon: {
    width: px2dp(15),
    height: px2dp(26),
  },
  content:{
    width: '90%',
    height: 20,
    overflow: 'hidden',
  },
  itemContent: {
    height: 20,
    overflow: 'hidden',
  },
  contentText:{
    fontSize: 16,
    overflow: 'hidden',
    marginLeft: 5,
  }
})
export default class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      animateVaule: new Animated.Value(0),
    };
  }
  componentDidMount() {
    const noticeList = this.props.noticeList
    const list = noticeList.length !== 1 ? noticeList.map(item => item) : [...noticeList, ...noticeList]
    this.setState({ list },()=>{
      setTimeout(()=>{
        this.handleNoticeList()
      }, 1800) 
    })
  }
  handleNoticeList() {
    // 0、将动画样式与动画值绑定 <Animated.View style={{marginTop:animateVaule}}>
    // 1、开启动画向上移动20px 有动画效果
    // 2、动画后，将数组前一个移除到数组最后一个，同时将向上的动画置为0 this.setState({animateVaule:new Animated.Value(0)})
    // 3、反复循环调用该函数
    this.setState({isAnimate: true})
    Animated.timing(                  // 随时间变化而执行动画
      this.state.animateVaule,            // 动画中的变量值
      {
        toValue: -20,                   // 透明度最终变为1，即完全不透明
        duration: 500,              // 让动画持续一段时间
      }
    ).start();
    let newList = this.state.list.map(item=>item)
    if( newList.length>0 ){
      setTimeout(() => {
        newList.push(newList.shift())
        this.setState({
          list: newList
        })
        this.setState({animateVaule:new Animated.Value(0)})
        setTimeout(()=>{
          this.handleNoticeList()
        }, 1800) 
      }, 500)
    }
  }
  render() {
    const iconUrl = require('../images/notice-images/sound_red.png')
    const rightIcon = require('../images/notice-images/right-icon-black.png')
    const { list, animateVaule } = this.state
    return (
      <View style={styles.noticePage}>
        <Image  style={styles.noticeIcon}
        source={iconUrl}></Image>
          <View style={styles.content}>
            <Animated.View style={{marginTop:animateVaule}}>
            { 
              list.map(
                (item, index) => 
                  (<View key={index} style={styles.itemContent}> 
                    <Text style={styles.contentText}> {item.content} </Text>
                  </View>) 
              )
            }
           </Animated.View>
          </View>
          <View>
            <Image  style={styles.rightIcon}
            source={rightIcon}></Image>
          </View>
      </View>
    )
  }
}
