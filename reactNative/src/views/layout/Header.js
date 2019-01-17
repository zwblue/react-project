import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import px2dp, { rowFlex } from '../../utils/mixin'
const styles = StyleSheet.create({
  header: {
   height: 48,
   backgroundColor:'#333',
   ...rowFlex('space-around', 'center')
  },
  service: {
    color:'#fff'
  },
  input: {
    width:'65%',
    backgroundColor:'#ffffff33',
    borderRadius:3,
    height: '65%',
    ...rowFlex('', 'center')
  },
  inputIcon:{
    width:px2dp(24),
    height:px2dp(24),
    marginRight: 10,
    marginLeft: 10,
  },
  inputText: {
    color:'#fff'
  },
  sweep: {
    width:px2dp(40),
    height:px2dp(40)
  },
  mes: {
    width:px2dp(40),
    height:px2dp(40)
  }
})
export class Header extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  componentDidMount() {
  }

  render() {
   return (
      <View style={styles.header}>
        <Text style={styles.service}>客服</Text>
        <View style={styles.input}>
          <Image style={styles.inputIcon} source={require('../../images/header-images/search.png')} />
          <Text style={styles.inputText}>代码/简拼/功能/资讯/数据</Text>
        </View>
        <Image style={styles.sweep} source={require('../../images/header-images/scan.png')} />
        <Image style={styles.mes} source={require('../../images/header-images/message.png')} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
