<template>
	<view class="kj">
		<statusBarHeight></statusBarHeight>
		<!-- <tab :list ="tabList" :tabIndex="currentIndex" @tab="tab"></tab> -->
		
		<scroll></scroll>
		
		<!-- 弹画框 -->
		<block class="xxx">
			
			<!-- 提交信息 -->
			<uni-popup ref="dialogInput" type="dialog" @change="change">
				<uni-popup-dialog mode="input" 
					title="添加设备" 
					value="" 
					placeholder="请输入设备号码"
					:device="device"
					@confirm="confirmDialog">
				</uni-popup-dialog>
			</uni-popup>
		</block>
		
		
		
		<view class="signout" @click="confirmDialog">
			<view class="text">
				<view class="example-body dialog">
					<!-- <view class="dialog-box">
						<text class="dialog-text">输入内容：{{value}}</text>
					</view> -->
					<view >
						添加设备
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	//组件
	import scroll from "@/components/scroll/scroll.vue"
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
				currentIndex:0,
				kjList:[],
				device:"device"
			};
		},
		
		methods: {
		
			/**
			 * 打开提交信息
			 */
			confirmDialog() {
				this.$refs.dialogInput.open()
			},
			/**
			 * 对话框点击确认按钮
			 */
			dialogConfirm(done) {
				this.$refs.popupMessage.open()
				console.log('点击确认');
				// 需要执行 done 才能关闭对话框
				done()
			},
			
			/**
			 * 对话框取消按钮
			 */
			dialogClose(done) {
				this.msgType = 'info'
				this.message = '点击了对话框的取消按钮'
				this.$refs.popupMessage.open()
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
		height: 100%;
		display: flex;
		background-color: #F9F9F9;
	}
	.kj{
		height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home_list{
			box-sizing: border-box;
			height: 100%;
		}
		.signout{
			width: 100%;
			height: 160rpx;
			position: fixed;
			bottom: 0rpx;
			background: #FFFFFF;
			.text{
				display: flex;
				justify-content: center;
				align-items: center;
				color: #FFFFFF;
				font-size: 28rpx;
				width: 686rpx;
				height: 76rpx;
				border-radius: 16rpx;
				margin: auto;
				background: #0272fa ;
				margin-top: 40rpx;
			}
		}
	}
	
</style>
