<template>
	<view class="kj">
		<view class="home_list">
			<swiper class="swiper-box">
				<swiper-item v-for="(item,index) in 1" :key="index">
					<scroll-view scroll-y="true" class="list">
						<deviceList class="list_item"></deviceList>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="signout">
			<view class="text">保存</view>
		</view>
	</view>
</template>
<script>
	//组件
	import deviceList from "@/components/device/deviceList.vue";
	
	export default {
		components:{
			deviceList,
		
		},
		onReady() {
			// 页面打开自动打开对话框
			setTimeout(() => {
				this.msgType = 'success'
				this.$refs.popupDialog.open()
			}, 500)
		},
		data() {
			return {
				
			};
		},
		
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
		display: flex;
	}
	.kj{
		// height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home_list{
			box-sizing: border-box;
			height: 100%;
			width: 98%;
			margin-left: 4%;
			.swiper-box{
				height: calc(100vh - 260rpx);     
				.list{
					height: 100%;
					overflow: hidden;
					// display: flex;
					// flex-direction: column;
					.list_item{
						height: 100%;
					}
				}
			}
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
				width: 90%;
				height: 76rpx;
				border-radius: 16rpx;
				margin: auto;
				background: #0272fa ;
				margin-top: 40rpx;
			}
		}
	}
	
</style>
