
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bd , mg} from '../../utils/mixin';
import BaseNotice from '../../components/BaseNotice'
const styles = StyleSheet.create({
  notice: {
    borderTopWidth:1,
    marginTop: 15,
    paddingTop: 5,
    ...mg(10),
    ...bd(1,'#ccc','top')
  }
})
export class Notice extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  render() {
    const {data} = this.props 
    console.log(88989, data)
    return (
      <View style={styles.notice}>
        <BaseNotice noticeList = {data}></BaseNotice>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice)
