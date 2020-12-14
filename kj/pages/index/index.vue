<template>
	<view class="container">
		<view class="title">
			<text class="titleWel">
				欢迎来到
			</text>
			
			<view class="text">
				智能远程砂浆配比控制系统
			</view>
			
		</view>
		
		
		<block class="xxx">
			
			<!-- 提交信息 -->
			<uni-popup ref="dialogInput" type="dialog" @change="change">
				<uni-popup-dialog mode="input" 
					title="添加项目" 
					value="" 
					placeholder="请输入项目名称"
					:addItem="addItem"
					@confirm="dialogConfirm">
				</uni-popup-dialog>
			</uni-popup>
		</block>
		
		
		
		<view class="content">
			<view class="conDevice">我的设备</view>
			<block  v-if="indexFlag">
				
				<view class="conImage">
					<image src="../../static/imgs/index/index.png" mode="aspectFit"></image>
					<text style="color: #666666;font-size: 24rpx;width: 180rpx;margin-top: 68rpx;">
						你还没有项目快去添加项目吧~
					</text>
				</view>
				<view class="conAdd">
					<view class="example-body dialog">
						<!-- <view class="dialog-box">
							<text class="dialog-text">输入内容：{{value}}</text>
						</view> -->
						<view  @click="confirmDialog">
							添加项目
						</view>
					</view>
				</view>
			</block>
			<block v-else>
				<view v-for="(item,index) in 5" :key="index">
					<view class="itemName">
						<view style="padding-left: 32rpx;">
							<view style="font-size: 28rpx; color: #333333;">项目名称</view>
							<view style="font-size: 24rpx;color: #666666;">设备2台</view>
						</view>
						<image src="@/static/imgs/profile/dayu.png" mode="aspectFit"></image>
					</view>
				</view>
				
				<view class="conAdd">
					<view class="example-body dialog">
						<!-- <view class="dialog-box">
							<text class="dialog-text">输入内容：{{value}}</text>
						</view> -->
						<view  @click="confirmDialog">
							添加项目
						</view>
					</view>
				</view>
			</block>
			
		</view>
	</view>
</template>

<script>
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import uniPopupShare from '@/components/uni-popup/uni-popup-share.vue'
	export default {
		components:{
			uniPopupMessage,
			uniPopupDialog,
			uniPopupShare
		},
		data() {
			return { 
				addItem:"addItem",
				indexFlag:true,//=>默认没有项目
			}
	},
		onPageScroll(res){
			console.log(res.scrollTop);
		},
		onTabItemTap(e){
			
			console.log(e)
		},
		
		methods: {
		
			/**
			 * 打开提交信息
			 */
			confirmDialog() {
				this.indexFlag = false;
				this.$refs.dialogInput.open()
			},
			/**
			 * 对话框点击确认按钮
			 */
			dialogConfirm(done) {
				// this.$refs.popupMessage.open()
				console.log('点击确认');
				// 需要执行 done 才能关闭对话框
				done()
			},
			/**
			 * popup 状态发生变化触发
			 * @param {Object} e
			 */
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
		},
	}
</script>

<style lang="scss" scoped>
	page{
		background: #FFFFFF;
		width: 100%;
		height: 100%;
	}
	.container {
		display: flex;
		flex-direction: column;
		background: #4684FF;
		height: 80%;
		.content{
			width: 100%;
			background: #ffffff;
			border-radius: 50rpx 50rpx 0px 0px;
			// background: red;
			.conDevice{
				font-size: 32rpx;
				color: #333333;
				margin:52rpx 0 0 48rpx;
				
			}
			.itemName{
				width: 92%;
				height: 156rpx;
				margin: auto;
				margin-top: 48rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				box-shadow: 0px 0px 12rpx 0px rgba(145,145,145,0.09); 
				display: flex;
				justify-content: space-between;
				align-items: center;
				image{
					width: 22rpx;
					height: 22rpx;
					padding-right: 32rpx;
				}
			}
			.conImage{
				display: flex;
				flex-direction: column;
				align-items: center;
				image{
					width: 462rpx;
					height: 342rpx;
				}
			}
			.conAdd{
				display: flex;
				justify-content: center;
				align-items: center;
				margin: auto;
				margin-top: 232rpx !important;
				margin-bottom: 106rpx;
				width: 328rpx;
				height: 80rpx;
				background: #ffffff;
				border-radius: 40rpx;
				box-shadow: 0px 0px 12rpx 0px rgba(0,0,0,0.16); 
				font-size: 24rpx;
				color: #666666;
			}
		}
		.title{
			display: flex;
			flex-direction: column;
			justify-content: left;
			margin-left: 52rpx;
			margin-top: 100rpx;
			flex: 1;
			
			.titleWel{
				font-size: 28rpx;
				color: #99b7ff;
			}
			.text{
				font-size: 40rpx;
				color: #ffffff;
				margin-bottom: 66rpx;
			}
		}
		
		
	}
</style>
