<template>
			
		<swiper class="swiper-box">
			<swiper-item v-for="(item,index) in 1" :key="index">
				<scroll-view scroll-y="true" class="list">
					<kjCard class="list_item"></kjCard>
				</scroll-view>
			</swiper-item>
			
		</swiper>
		
		
	
</template>

<script>
	import kjCard from "@/components/kj/kjCard.vue"
	//方法
	import session  from "@/utils/session.js"
	export default {
		
		components:{
			kjCard
		},
		data() {
			return { }
		},
	}
</script>


<style lang="scss" >
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
	
	
</style>



<!-- <template>
	<view class="srcoll">
		<scroll-view scroll-y class="list_scroll">
			<slot></slot>
			666666666666
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return { }
		},
	}
</script>


<style lang="scss" scoped>	
	.srcoll{
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;
		.list_scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
	
	
</style> -->