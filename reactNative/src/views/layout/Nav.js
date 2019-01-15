import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

class Nav extends Component {
  // static propTypes = {
    // prop: PropTypes
  // }

  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  // theme : state.config.theme
})
export default Nav
