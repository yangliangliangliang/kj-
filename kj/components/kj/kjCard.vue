<template>
	<view class="kjList" >
		<view class="list_item" v-for="(item,index) in 12" :key="index" @tap="kjDetail(index+1)">
			<view class="itemID com">
				<text style="color: #333333;font-size: 28rpx;">设备名称/ID</text>
				<view style="color: #4684FF;font-size: 24rpx;" @tap="share">
					<view @click="confirmDialog">
						分享
					</view>
				</view>
			</view>
			<view class="itemTime com">
				<text style="color: #666666;font-size: 24rpx;">这里是时间</text>
			</view>
			<view class="itemImage">
				<image src="@/static/imgs/center/device.png"></image>
			</view>
			<view class="itemID com">
				<text style="color: #717177;font-size: 24rpx;">设置</text>
				<view class="">
					<!-- 基本用法  https://ext.dcloud.net.cn/plugin?id=1249 -->
					<evan-switch v-model="checked"></evan-switch>
					
				</view>
				
			</view>
			
		</view>
		<!-- 弹画框 -->
		<block class="xxx">
			
			<!-- 提交信息 -->
			<uni-popup ref="dialogInput" type="dialog" @change="change">
				<uni-popup-dialog mode="input" 
					title="分享给" 
					value="" 
					placeholder="选择要分享的用户"
					:shareUser="shareUser"
					@confirm="confirmDialog">
				</uni-popup-dialog>
			</uni-popup>
		</block>
		
		
		
		
		
		
	</view>
</template>

<script>
	//组件
	// import scroll from "@/components/scroll/scroll.vue"
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
				checked:true,
				shareUser:"shareUser"
			};
		},
		methods:{
			kjDetail(index){
				// console.log(index)
			},
			//分享
			share(){
				console.log(123)
			},
			
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
		}
	}
</script>

<style lang="scss" scoped>
		.kjList{
			margin: auto;
			width: 96%;
			height: 390rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.list_item{
				width: 350rpx;
				height: 446rpx;
				margin-top: 24rpx;
				background: #FFFFFF;
				display: flex;
				align-items: center;
				flex-direction: column;
				.com{ 
					width: 80%;
					height: 40rpx;
					display: flex;
					justify-content: space-between;
				}
				.itemID{
					margin-top: 40rpx;
					evan-switch{
						width: 74rpx;
						height: 44rpx;
					}
				}
				.itemTime{
					margin-top: 10rpx;
				}
				.itemImage{
					width: 80%;
					margin-top: 40rpx;
					display: flex;
					justify-content: center;
					image{
						width: 126rpx;
						height: 126rpx;
					}
				}
			}
		}
</style>