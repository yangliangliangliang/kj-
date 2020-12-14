<template>
	<view class="container">
		
		<view  v-for="(item,index) in 3" :key="index" class="list_item">
			
			<view class="item_detail" >
				<view>
					<image src="../../static/imgs/center/cjwt@2x.png"></image>
				</view>
				
				<view class="">
					<view style="margin-bottom: 8rpx;">张无忌</view>
					<view>设备名称/ID</view>
				</view>
				
			</view>
			<text style="color: #0272FA;">取消分享</text>
		</view>

	</view>
</template>

<script>
	//方法
	import session from "@/utils/session.js"
	export default {
		onLoad() {
		},
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #333333;
		.list_item{
				display: flex;
				border-bottom: 1rpx solid #D8D8D8;
				width:95%;
				height: 140rpx;
				justify-content: space-between;
				align-items: center;
				margin: auto;
				.item_detail{
					display: flex;
					align-items: center;
					// flex-direction: column;
					// justify-content: center;
						image{
							width: 80rpx;
							height: 80rpx;
							padding-right: 28rpx;
						}
				}
		}
		
		
		
		
		
	}
</style>
