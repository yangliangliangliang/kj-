<template>
	<view class="login">
		<view class="title">
			<image src="@/static/imgs/login/login.png" mode=""></image>
			
			<view class="text">
				智能远程砂浆配比控制系统
			</view>
			
		</view>
		<view class="content">
			<view class="welcome">
				欢迎登录
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<view class="mainList">
					<text>账号</text>
					<wInput
						v-model="phoneData"
						type="text"
						maxlength="11"
						placeholder="请输入账号"
					></wInput>
				</view>
				<view class="mainList">
					<text>密码</text>
					<wInput
						v-model="verCode"
						type="number"
						maxlength="4"
						placeholder=""
						isShowCode
						ref="runCode"
						@setCode="getVerCode()"
					></wInput>
				</view>
				
			</view>
			<wButton 
				class="wbutton"
				text="登 录"
				:rotate="isRotate" 
				@click="startLogin"
			></wButton>
			
		
		</view>
	</view>
</template>

<script>
	//组件
	import wInput from '@/components/watch-login/watch-input.vue' //input
	import wButton from '@/components/watch-login/watch-button.vue' //button
	
	//方法
	import session from "@/utils/session.js"
	export default {
		data() {
			return {
				phoneData:'', //用户/电话
				verCode:"", //验证码
				isRotate: false, //是否加载旋转
			};
		},
		components:{
			wInput,
			wButton,
		},
		methods:{
			getVerCode(){},
			startLogin(){}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/components/watch-login/css/icon.css");
	@import url("./css/main.css");
	page{
		background: #FFFFFF;
	}
	.login{
		width: 100%;
		.title{
			display: flex;
			flex-direction: column;
			padding-bottom: 80rpx;
			padding-top: 100rpx;
			margin: auto;
			width: 670rpx;
			image{
				width: 132rpx;
				height: 106rpx;
				vertical-align: bottom;
				padding-bottom: 30rpx;
			}
			.text{
				width: 90%;
				height: 56rpx;
				font-size: 40rpx;
				text-align: left;
				color: #717177;
				
			}
		}
		.content{
			background: #ffffff;
			border-radius: 15rpx;
			box-shadow: 0px 0px 12rpx 0px rgba(136,136,136,0.16); 
			margin: auto;
			width: 670rpx;
			height: 724rpx;
			.welcome{
				width: 160rpx;
				height: 56rpx;
				font-size: 40rpx;
				text-align: center;
				color: #4684ff;
				margin-top: 72rpx !important;
				margin: auto;
				
			}
			.main{
				.mainList{
					margin-top: 48rpx;
					text{
						padding-bottom: 16rpx;
					}
				}
			}
		}
	}
	
</style>
