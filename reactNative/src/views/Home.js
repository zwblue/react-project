import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    paddingTop:40,
    backgroundColor:'#fff',
    left:0,
    right:0,
    bottom:0,
  }
})


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navMenusData: []
    }
  }
  componentDidMount() {
    this.getIconList()
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
      console.log(data)
      if (data.Funlist.length === 0) return
      Promise.all(data.Funlist.map(d => getBase64(d.ImageUrl))).then(
        result => {
          const navMenusData = result.map((ImageUrl, i) => ({
            ...data.Funlist[i],
            ImageUrl
          }))
          this.setState({
            navMenusData
          })
          setStore('appindex.IndexMenus', navMenusData)
        },
        err => {
          throw (err)
        }
      )
  } catch (error) {
      throw (error)
  }
  }
  render() {
    return (
        <Provider store={store}>
           <View style={styles.container}>
             <Header></Header>
             <Text>fsfs</Text>
             <Nav></Nav>
            <Section></Section>
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
