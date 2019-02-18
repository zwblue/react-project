import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdsSwiper from '../../containers/home/AdsSwiper'
import Notice from '../../containers/home/Notice'
import MarketMachine from '../../containers/home/MarketMachine'
import TopicSwiper from '../../containers/home/TopicSwiper'
import LiveFM from '../../containers/home/LiveFM'
import TabHeader from '../../containers/home/TabHeader'
import TabContent from '../../containers/home/TabContent'
export class Section extends Component {
  // static propTypes = {
  //   theme: PropTypes.string
  // }
  constructor(props) {
    super(props)
  
    this.state = {
      adsListData: [],
      noticeListData: [],
      topicListData: [],
      liveFmListData: []
    }
  }
  componentWillReceiveProps(newProps, oldProps) {
    console.log(897978798,newProps)
    if((newProps.homeData !== oldProps.homeData) && newProps.homeData){
     this.handleHomeData(newProps.homeData)
    }
  }
  handleHomeData(homeData) {
    this.setState({
      adsListData:homeData.FirstAppAdsJson || [], //  不加这个莫名的报错
      // homeData.AnnounceJson || 
      noticeListData:[
        {content: '海通证券详情消息推荐，希望大家稍微看一看'},
        {content: '如何有效的投股，永远不要相信别人推荐的传销内容'},
      ],
      topicListData:homeData.TopicPicsJson || [],
      liveFmListData: homeData.FmLivePicsJson || []
     })
  }
  render() {
    const { adsListData, noticeListData, topicListData, liveFmListData } = this.state
    return (
      <View>
        {adsListData.length > 0 && <AdsSwiper data={adsListData}></AdsSwiper>}
        {noticeListData.length > 0 && <Notice data={noticeListData}></Notice>}
        <MarketMachine></MarketMachine>
        {topicListData.length > 0 && <TopicSwiper data={topicListData}></TopicSwiper>}
        {liveFmListData.length > 0 && <LiveFM data={liveFmListData}></LiveFM>}
        <TabHeader></TabHeader>
        <TabContent></TabContent>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Section
