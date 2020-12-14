<template>
	<view :class="[device == 'device'?'uni-popup-dialog-share':'uni-popup-dialog-dev']">
		<view class="uni-dialog-title">
			<text class="uni-dialog-title-text" :class="['uni-popup__'+dialogType]">{{title}}</text>
		</view>
		<!-- 设备名称 -->
		<block v-if="device=='device'">
			<view class="uni-dialog-content">
				<text class="uni-dialog-content-text">设备号码</text>
				<input class="uni-dialog-input" v-model="valUp" 
					type="text" 
					:placeholder="placeholder" 
					:focus="focus" >
			</view>
			<view class="uni-dialog-content">
				<text class="uni-dialog-content-text" >自定义名称</text>
				<input class="uni-dialog-input" v-model="valDown" 
					type="text" 
					placeholder="请输入名称" 
					:focus="focus" >
			</view>
		</block>
		<!-- 分享 -->
		<block v-if="shareUser=='shareUser'">
			<view class="uni-dialog-content">
				<text class="uni-dialog-content-text">分享给</text>
				<input  class="uni-dialog-input" 
					v-model="shareData" 
					type="text" 
					:placeholder="placeholder" 
					:focus="focus" >
				<view style="padding-right: 40rpx;"
					@click="imgClick"
					>
					<image  src="@/static/imgs/profile/xiangxia.png" mode="aspectFit"></image>
				</view>
				<view class="textarea" v-show="imgFlag">
					<scroll-view  scroll-y="true" class="scroll-Y" >
						<view id="demo1" class="scroll-view-item ">
							杨洋阳
						</view>
						<view id="demo2" class="scroll-view-item ">
							吴天
						</view>
						<view id="demo3" class="scroll-view-item ">
							刘宗明
						</view>
						<view id="demo1" class="scroll-view-item ">
							杨洋阳
						</view>
						<view id="demo2" class="scroll-view-item ">
							吴天
						</view>
						<view id="demo3" class="scroll-view-item ">
							刘宗明
						</view>
						<view id="demo1" class="scroll-view-item ">
							杨洋阳
						</view>
						<view id="demo2" class="scroll-view-item ">
							吴天
						</view>
						<view id="demo3" class="scroll-view-item ">
							刘宗明
						</view>
						<view id="demo1" class="scroll-view-item ">
							杨洋阳
						</view>
						<view id="demo2" class="scroll-view-item ">
							吴天66666666
						</view>
						<view id="demo3" class="scroll-view-item ">
							刘宗明
						</view>
					</scroll-view>
				</view>
				
			</view>
		</block>
		<!-- 添加项目 -->
		<block v-if="addItem=='addItem'">
			<view class="uni-dialog-content">
				<input  class="uni-dialog-input" 
					v-model="addProject" 
					type="text" 
					:placeholder="placeholder" 
					:focus="focus" >
			</view>
		</block>
		
		
		<view class="uni-dialog-button-group">
			<view class="uni-dialog-button" @click="close">
				<text class="uni-dialog-button-text">取消</text>
			</view>
			<view class="uni-dialog-button uni-border-left" @click="onOk">
				<text class="uni-dialog-button-text uni-button-color">确定</text>
			</view>
		</view>

	</view>
</template>

<script>
	/**
	 * PopUp 弹出层-对话框样式
	 * @description 弹出层-对话框样式
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
	 * @property {String} value input 模式下的默认值
	 * @property {String} placeholder input 模式下输入提示
	 * @property {String} type = [success|warning|info|error] 主题样式
	 *  @value success 成功
	 * 	@value warning 提示
	 * 	@value info 消息
	 * 	@value error 错误
	 * @property {String} mode = [base|input] 模式、
	 * 	@value base 基础对话框
	 * 	@value input 可输入对话框
	 * @property {String} content 对话框内容
	 * @property {Boolean} beforeClose 是否拦截取消事件
	 * @event {Function} confirm 点击确认按钮触发
	 * @event {Function} close 点击取消按钮触发
	 */

	export default {
		name: "uniPopupDialog",
		props: {
			value: {
				type: [String, Number],
				default: ''
			},
			//分享
			shareUser:{
				type: String,
			},
			addItem:{
				type:String
			},
			//添加设备
			device: {
				type: String,
			},
			placeholder: {
				type: [String, Number],
				default: '请输入内容'
			},
			/**
			 * 对话框主题 success/warning/info/error	  默认 success
			 */
			type: {
				type: String,
				default: 'error'
			},
			/**
			 * 对话框模式 base/input
			 */
			mode: {
				type: String,
				default: 'base'
			},
			/**
			 * 对话框标题
			 */
			title: {
				type: String,
				default: '提示'
			},
			/**
			 * 对话框内容
			 */
			content: {
				type: String,
				default: ''
			},
			/**
			 * 拦截取消事件 ，如果拦截取消事件，必须监听close事件，执行 done()
			 */
			beforeClose: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				dialogType: 'error',
				focus: false,
				valUp: "",
				valDown:"",//=>
				addProject:"",//=>添加项目
				shareData:"",//=>分享
				imgFlag:false,//=>用户列表
			}
		},
		inject: ['popup'],
		watch: {
			type(val) {
				this.dialogType = val
			},
			mode(val) {
				if (val === 'input') {
					this.dialogType = 'info'
				}
			},
			value(val) {
				this.val = val
			}
		},
		created() {
			// 对话框遮罩不可点击
			this.popup.mkclick = false
			if (this.mode === 'input') {
				this.dialogType = 'info'
				this.val = this.value
			} else {
				this.dialogType = this.type
			}
		},
		mounted() {
			this.focus = true
		},
		methods: {
			/**
			 * 点击确认按钮
			 */
			onOk() {
				this.$emit('confirm', () => {
					this.popup.close()
					if (this.mode === 'input') this.val = this.value
				}, this.mode === 'input' ? this.val : '')
			},
			/**
			 * 点击取消按钮
			 */
			close() {
				if (this.beforeClose) {
					this.$emit('close', () => {
						this.popup.close()
					})
					return
				}
				this.popup.close()
			},
			//点击图片
			imgClick () {
				this.imgFlag = !this.imgFlag;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-popup-dialog-dev {
		width: 640rpx;
		height: 420rpx;
		border-radius: 15px;
		background-color: #fff;
		
	}
	.uni-popup-dialog-share {
		width: 640rpx;
		height: 530rpx;
		border-radius: 15px;
		background-color: #fff;
	}

	.uni-dialog-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		margin-bottom: 10rpx;
		margin-top: 48rpx;
	}

	.uni-dialog-title-text {
		font-size: 32rpx;
		font-family: PingFang SC, PingFang SC-Medium;
		font-weight: 500;
		text-align: center;
		color: #333333;
		margin-top: 24rpx;
	}

	.uni-dialog-content {
		
		display: flex;
		align-items: center;
		text-align: center;
		width: 261*2rpx;
		height: 84rpx;
		background: #f9f9f9;
		border-radius: 12rpx;
		margin: auto;
		margin-top: 60rpx !important;
		margin-bottom: 50rpx !important;
		position: relative;
		.textarea{
			position: absolute;
			left: 15%;
			top: 120%;
			width: 408rpx;
			height: 200px;
			background: #ffffff;
			border-radius: 24rpx;
			font-size: 28rpx;
			overflow: hidden;
			.scroll-Y {
				height: 100%;
				.scroll-view-item {
					height: 84rpx;
					font-size: 28rpx;
					text-align: left;
					margin-left: 44rpx;
					color: #333333;
				}
			}
		}
		image{
			width: 18rpx;
			height: 18rpx;
		}
		
	}

	.uni-dialog-content-text {
		font-size: 28rpx;
		color: #333333;
		padding-left: 32rpx;
		
	}

	.uni-dialog-button-group {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		border-top-color: #f5f5f5;
		border-top-style: solid;
		border-top-width: 1px;
		
	}

	.uni-dialog-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */

		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 45px;
	}

	.uni-border-left {
		border-left-color: #f0f0f0;
		border-left-style: solid;
		border-left-width: 1px;
		
	}

	.uni-dialog-button-text {
		font-size: 34rpx;
	}

	.uni-button-color {
		color: $uni-color-primary;
	}

	.uni-dialog-input {
		flex: 1;
		font-size: 20rpx;
	}

	.uni-popup__success {
		color: $uni-color-success;
	}

	.uni-popup__warn {
		color: $uni-color-warning;
	}

	.uni-popup__error {
		color: $uni-color-error;
	}

	.uni-popup__info {
		color: #909399;
	}
</style>
