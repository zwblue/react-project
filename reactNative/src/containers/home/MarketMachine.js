import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import px2dp, { rowFlex } from '../../utils/mixin';
import { $warning } from '../../utils/theme';
console.log(123123123, $warning)
const styles = StyleSheet.create({
	key:{

	},
  marketmachine:{
  },
  marketBox:{
    ...rowFlex('space-between','center')
  },
  riniIcon:{
		width: px2dp(105),
		height: px2dp(122)
	},
	zaiyongIcon:{
		width: px2dp(96),
		height: px2dp(113)
	},
	yidongIcon: {
		width: px2dp(89),
		height: px2dp(127)
	},
	zhangTingIcon: {
		width: px2dp(87),
		height: px2dp(130)
	}
	
})
export class MarketMachine extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  constructor(props) {
    super(); //可以不给props
    this.state = {
      todayDateObj: {},
      xunGunObj: {},
      zhangTingObj: {
        count: '',
        copanyName: ''
      },
    }
  }
  componentDidMount() {
		this.getMarketMachineData()
  }
  componentWillReceiveProps(nextProps){
    // const isRefreshHomeApi = nextProps.isRefreshHomeApi!==this.props.isRefreshHomeApi
		// if((isRefreshHomeApi)) {
    //   this.getMarketMachineData()
    // } 
	}
  async	getMarketMachineData() {
		if (window.quote && window.quote.requestShortTermElves) {
			window.quote.requestShortTermElves()
		} else {
			sendIOSMessage('requestShortTermElves', {})
		}
		try {
			// 日历
			const {
				data: riNiData
			} = await getDateData()
			this.dealTodayDate(riNiData)
			// 选股 加密
			const { // 先要进行加密操作
				data: mdData
			} = await getMd5Data()
			if (!mdData || !mdData.dateStatus) return
			let param = encryptByDES(JSON.stringify({
				dateStatus: mdData.dateStatus
			}), 'e9facf+2$2d81&4243^b16a=2f45e639e53d')
			//  选股 接口
			const {
				data: xunGunData
			} = await getSelectStockData({ param })
			this.dealXunGun(xunGunData)
      // 涨停
			const {
				data: zhangTingData
			} = await getHardenData()
			this.dealZhangTing(zhangTingData)
		} catch (error) {
			console.log(error)
		}
  }
  // 处理涨停
  dealZhangTing (zhangTingData) {
		if (zhangTingData.retCode === '0000') {
			const count = zhangTingData.content.hardenBlockInfos.zt
			const array = zhangTingData.content.hardenBlockInfos.blockInfos // 第一个可能为null,所以可以选择第二个
			const zhangTingObj = {
				count,
				copanyName : array[0].bkmc ? array[0].bkmc : array[1].bkmc
			}
			this.setState({
				zhangTingObj
			})
		} else {
			console.log(zhangTingData.retMsg)
		}
  }
  // 处理选股的函数
  dealXunGun (xunGunData) {
		if (xunGunData.retCode === '0000') {
			let randomNum = Math.floor(Math.random() * 4)
			const xunGunObj = xunGunData.content[randomNum]
			this.setState({ xunGunObj })
		} else {
			console.log(xunGunData.retMsg)
		}
  }
  // 处理今日数据
	dealTodayDate (riNiData) {    
		if (riNiData.code === 0) {
			const todayDateObj = {}
			riNiData.content.dataField.forEach((item, index) => {
				todayDateObj[item] = riNiData.content.dataRecord[0][index]
			})
			this.setState({ todayDateObj })
		} else {
			console.log(riNiData.message)
		}
  }
  handleMyGunChange (val) {
		if(!val)return
		if (val.indexOf('%') >= 0) {
			return <span>涨幅<span className='list-key'>{val}</span></span>
		} else if (val.indexOf('手') >= 0) {
			return <span><span className='list-key'>{val}</span></span>
		} else {
			return <span>价格<span className='list-key'>{val}</span></span>
		}
	}
  render() {
		// const { signalname, signalvalue, stockname } = this.props.optionalChange
		const riniIcon = require('../../images/marketMachine-images/today_date.png')
		const zaiyongIcon = require('../../images/marketMachine-images/allman_make.png')
		const yidongIcon = require('../../images/marketMachine-images/myself_change.png')
		const zhangTingIcon = require('../../images/marketMachine-images/today_stop.png')
    return (
      <View style={styles.marketmachine}>
        <View style={styles.marketBox}>
          <View>
						<View><Text>今日投资日历</Text></View>
						<View>
							<Text>新股</Text><Text style={styles.key}>{this.state.todayDateObj.newStockNum}</Text>
							<Text>新债</Text><Text>{this.state.todayDateObj.newBondNum}</Text>
							<Text>分红送转</Text><Text>{this.state.todayDateObj.FHNum}</Text>
							<Text>停复</Text><Text>{this.state.todayDateObj.TFPNum}</Text>
						</View>
				   </View>
          <View>
            <Image style={styles.riniIcon} url={riniIcon}></Image>
          </View>
        </View>
        <View style={styles.marketBox}>
					<View>
						<View><Text>大家都在用</Text></View>
						<View>
							<Text>新股</Text><Text style={styles.key}>{this.state.todayDateObj.newStockNum}</Text>
							<Text>新债</Text><Text>{this.state.todayDateObj.newBondNum}</Text>
							<Text>分红送转</Text><Text>{this.state.todayDateObj.FHNum}</Text>
							<Text>停复</Text><Text>{this.state.todayDateObj.TFPNum}</Text>
						</View>
				  </View>
          <View>
            <Image style={styles.zaiyongIcon} url={zaiyongIcon}></Image>
          </View>
        </View>
        <View style={styles.marketBox}>
					<View>
						<View><Text>个股发生异动</Text></View>
						<View>
							<Text>新股</Text><Text style={styles.key}>{this.state.todayDateObj.newStockNum}</Text>
							<Text>新债</Text><Text>{this.state.todayDateObj.newBondNum}</Text>
							<Text>分红送转</Text><Text>{this.state.todayDateObj.FHNum}</Text>
							<Text>停复</Text><Text>{this.state.todayDateObj.TFPNum}</Text>
						</View>
				  </View>
          <View>
            <Image style={styles.zaiyongIcon} url={zaiyongIcon}></Image>
          </View>
        </View>
        <View style={styles.marketBox}>
					<View>
						<View><Text>今日板块涨停</Text></View>
						<View>
							<Text>新股</Text><Text style={styles.key}>{this.state.todayDateObj.newStockNum}</Text>
							<Text>新债</Text><Text>{this.state.todayDateObj.newBondNum}</Text>
							<Text>分红送转</Text><Text>{this.state.todayDateObj.FHNum}</Text>
							<Text>停复</Text><Text>{this.state.todayDateObj.TFPNum}</Text>
						</View>
				  </View>
          <View>
            <Image style={styles.zaiyongIcon} url={zaiyongIcon}></Image>
          </View>
        </View>
        <Text> MarketMachine </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketMachine)
