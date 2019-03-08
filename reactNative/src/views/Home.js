import React, { Component } from 'react'
import {StyleSheet, View, ScrollView } from 'react-native'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './layout/Header'
import Nav from './layout/Nav'
import Section from './layout/Section'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { setStore, getBase64 } from '../utils/common'
import { getIconApi, getHomeApi } from '../api/home'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger() // redux 运行的轨迹
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:0,
    paddingTop:30,
    backgroundColor:'#fff',
    left:0,
    right:0,
    bottom:0,
    zIndex: 9999
  },
  innerContainer:{
    position: 'relative',
    left:0,
    right:0,
    bottom:0,
    zIndex: 0,
  }
})


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navMenusData: [],
      homeData: []
    }
  }
  componentWillMount() {
    this.getIconList()
    this.getHomeList({theme:'day',version: '7.03', platform: 'iPhone'})
  }
  async getHomeList (params) {
    let { theme, platform, version } = params
    const  { data } = await getHomeApi({
      theme,
      version,
      platform
    })
    this.setState({
      homeData: data
    })
  }
  async getIconList () {
  let version = '7.03'
  // let version = urlParamsObject.appversion
  // let platform = urlParamsObject.platform.toLowerCase() === 'android' ? 'android': 'ios'
  let platform = 'ios'
  try {
      const { data } = await getIconApi({
        version, platform
      }) 
      if (data.Funlist.length === 0) return
      this.setState({
        navMenusData: data.Funlist
      })
  } catch (error) {
      console.log(222)
      throw (error)
  }
}
  render() {
    const { navMenusData, homeData } = this.state
    return (
        <Provider store={store}>
           <View style={styles.container}>
             <Header></Header>
             <ScrollView style={styles.innerContainer}>
                <Nav navMenusData={navMenusData}></Nav>
                <Section homeData={homeData}></Section>
             </ScrollView>
          </View>
       </Provider>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Home
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
