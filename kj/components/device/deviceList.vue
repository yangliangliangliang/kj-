<template>
	<view class="">
		<view class="cooperate com">
			<view style="font-size: 28rpx; color: #333333;padding: 32rpx 0 0 48rpx;">配合比</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">水泥（kg）</text>
				<text >200</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">水（kg)</text>
				<input type="text"  placeholder="请输入"/>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">砂（kg)</text>
				<input type="text"  placeholder="请输入"/>
			</view>
		</view>
		
		<view class="cooperate com">
			<view style="font-size: 28rpx; color: #333333;padding: 32rpx 0 0 48rpx;">现场砂</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">密度</text>
				<text >200</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">含水率</text>
				<input type="text"  placeholder="请输入"/>
			</view>
		</view>
		
		<view class="cooperate com">
			<view style="font-size: 28rpx; color: #333333;padding: 32rpx 0 0 48rpx;">测试砂</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">时间</text>
				<text >203</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">质量</text>
				<input type="text"  placeholder="请输入"/>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">系数</text>
				<input type="text"  placeholder="请输入"/>
			</view>
		</view>
		
		<view class="cooperate com">
			<view style="font-size: 28rpx; color: #333333;padding: 32rpx 0 0 48rpx;">质量比（kg）</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">水泥</text>
				<text >200.00</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">水</text>
				<text >170.00</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">砂</text>
				<text >645</text>
			</view>
		</view>
		
		<view class="cooperate com">
			<view style="font-size: 28rpx; color: #333333;padding: 32rpx 0 0 48rpx;">系数比</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">水泥</text>
				<text >1</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">水</text>
				<text >0.85</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">砂</text>
				<text >3.23</text>
			</view>
		</view>
		
		<view class="cooperate com">
			<view style="font-size: 28rpx; color: #333333;padding: 32rpx 0 0 48rpx;">用水量</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">现场砂含水量（L)</text>
				<text >10.63</text>
			</view>
			<view class="list_item">
				<text style="margin-right: 83rpx;">实际加水量（L)</text>
				<text >159.37</text>
			</view>
		
		</view>
	
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	
	
		.com{
			width: 94%;
			background: #FFFFFF;
			border-radius: 12rpx;
			box-shadow: 0px 0px 12rpx 0px rgba(174,174,174,0.14); 
			margin-top: 24rpx;
		}
		.cooperate{
			height: 376rpx;
			.list_item{
				display: flex;
				border-bottom: 1px solid #F4F4F4;
				width: 710rpx;
				height: 100rpx;
				align-items: center;
				margin-left: 48rpx;
				font-size: 28rpx;
				color: #AEAEAE;
			}
		
		}
		
	
</style>
