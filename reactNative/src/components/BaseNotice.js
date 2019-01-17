import React, { Component } from 'react'
import { Text, View , Image, StyleSheet} from 'react-native'
import px2dp from '../utils/mixin';
const styles = StyleSheet.create({
  noticeIcon: {
    width: px2dp(48),
    height: px2dp(40),
  },
  content:{

  }
})
export default class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isAnimate: false
    };
  }
  componentDidMount() {
    const noticeList = this.props.noticeList
    const list = noticeList.length !== 1 ? noticeList.map(item => item) : [...noticeList, ...noticeList]
    this.setState({ list },()=>{
      console.log(89899090, this.state.list)
      setTimeout(()=>{
        this.handleNoticeList()
      }, 4800) 
    })
  }
  handleNoticeList() {
    this.setState({isAnimate: true})
    let newList = this.state.list.map(item=>item)
    if( newList.length>0 ){
      setTimeout(() => {
        newList.push(newList[0])
        newList.shift()
        this.setState({
          list: newList
        })
        this.setState({isAnimate: false})
        setTimeout(()=>{
          this.handleNoticeList()
        }, 4800) 
      }, 500)
    }
  }
  render() {
    const iconUrl = require('../images/notice-images/sound_red.png')
    return (
      <View>
         <Image  style={styles.noticeIcon}
        source={iconUrl}></Image>
        <View style={styles.content}>
          <View style={this.state.animate? styles.anim: {}}></View>
        </View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
