import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> HOME 主页 </Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Home
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
