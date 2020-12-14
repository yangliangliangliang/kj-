<template>
	<view class="container">
			<view class="list_item">
				
				<view class="item_detail" >
					<view>
						<image src="../../static/imgs/center/cjwt@2x.png"></image>
					</view>
					
					<view class="">
						<view style="font-size: 36rpx;color: #333333;">快乐的小鱼儿</view>
						<view style="font-size: 28rpx;color: #999999;">136 9885 4362</view>
					</view>
					
				</view>
			</view>
			
			
			<view class="user_footer">
				
				 <view class="footer_common" v-for="(item,index) in aboutData" :key="index">
						<view class="footer_common_detail">
							<text>{{item.title}}</text>
						</view>
						<view class="user_right_dayu">
							<image src="@/static/imgs/profile/dayu.png" mode=""></image>
						</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar:"",
				aboutData:[
					{title:"分享列表"},
				]
			}
		},
		onLoad(){
	
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #FFFFFF;
	}
	.container{
		.list_item{
			width:95%;
			height: 140rpx;
			margin: 44rpx 0 100rpx 48rpx;
			.item_detail{
				display: flex;
				align-items: center;
					image{
						width: 140rpx;
						height: 140rpx;
						vertical-align: bottom;
						padding-right: 42rpx;
					}
			}
		}
		.user_footer{
			display: flex;
			flex-direction: column;
			margin-top: 20rpx;
			font-size: 26rpx;
			.footer_common{
				display: flex;
				justify-content: space-between;
				height: 90rpx;
				align-items: center;
				margin-left: 46rpx;
				.footer_common_detail{
						display: flex;
						font-size: 32rpx;
						color: #111734;
						image{
							width: 29rpx;
							height: 34rpx;
							margin-right: 33rpx;
						}
				}
				.user_right_dayu{
					text{
						margin-right:33rpx ;
					}
					image{
						width: 10rpx;
						height: 20rpx;
						margin-right: 33rpx;
					}
				}
			}
		}
	}
</style>
