import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { rowFlex } from '../../utils/mixin'
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
    width:12,
    height:12,
    marginRight: 10,
    marginLeft: 10,
  },
  inputText: {
    color:'#fff'
  },
  sweep: {
    width:20,
    height:20
  },
  mes: {
    width:20,
    height:20
  }
})
export class Header extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  componentDidMount() {
    console.log(1111, this.props, fetch)
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
