import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper';
import px2dp from '../../utils/mixin';

const styles = StyleSheet.create({
  wrapper: {
    height: px2dp(200),
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide1: {
    color: '#fff'
  },
  imgBox:{
    height: px2dp(200),
    width: '100%',
  }
})
export class AdsSwiper extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  componentDidMount() {
    console.log(9090,this.props)
  }
  render() {
    const { data:adsList } = this.props
    return (
      <View style={styles.wrapper}>
        <Swiper 
        paginationStyle ={{
          bottom: 3
        }}
        activeDotStyle ={{
          width: 6, height: 6, borderRadius: 3, backgroundColor: '#fff'
        }}
        dotStyle={{width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(0,0,0,.4)'}}>
          {
           adsList.map((item) => {
            return(
              <View style={styles.slide} key={item.Id}>
                <Image style={styles.imgBox} source={{url: item.ImageUrl}}>
              </Image>
              </View>
            ) 
          }) 
          }
        </Swiper>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AdsSwiper)
