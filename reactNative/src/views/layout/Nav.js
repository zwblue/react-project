import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import px2dp, { rowFlex } from '../../utils/mixin'

const styles = StyleSheet.create({
 nav: {
  ...rowFlex('space-between',''),
  marginTop: 8,
  flexWrap: 'wrap',
 },
 iconItem:{
  width:'25%',
  marginBottom: 16,
  display: 'flex',
  ...rowFlex('center','center'),
 },
 icon: {
  width: px2dp(96),
  height: px2dp(96),
  marginBottom: 6
 }
})
class Nav extends Component {
  // static propTypes = {
    // prop: PropTypes
  // }
  constructor(props) {
    super(props)
  
    this.state = {
       filterNavList: []
    }
  }
  componentDidMount() {
  }
  componentWillReceiveProps(newprops, props) {
    this.filterNavListEvent(newprops, props)
  }
  filterNavListEvent(newprops, props) {
    const { navMenusData } =  newprops
    console.log(333, newprops, props)
    if(navMenusData !== props.navMenusData && navMenusData.length) {
      const themeIconType = this.props.theme === 'night' ? '2' : '1'
      const filterNavList = navMenusData.filter(item=>{
        return item.IconType === themeIconType
      })
      this.setState({
        filterNavList
      })
    }
  }
  render() {
    const { filterNavList } = this.state
    return (
      <View style={styles.nav}>
        {
          filterNavList.map((item) => {
            return (
              <View key={item.Funid} style={styles.iconItem}>
                <View>
                  <View style={{...rowFlex('center','center')}}>
                    <Image style={styles.icon} source={{uri:item.ImageUrl}} />
                  </View>
                  <View style={{...rowFlex('center','center')}}>
                    <Text style={styles.text}>{item.Funname}</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  // theme : state.config.theme
})
export default Nav
