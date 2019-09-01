<template>
	<div class="hello">
		<div class="Helmet">
			<!-- <p class="topic">保时捷车展管理系统</p> -->
			<!--<p class="breadcrumb">	
				<a href="" class="main_menu">首页</a>
			</p>-->
			<p class="greet">欢迎进入 A Soulful Night 访客管理系统</p>
			<div class="car">
				<!-- <img src="./../../assets/car.png" alt=""> -->
				<img src="~assets/img/car2.jpg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	// import HeaderComponent from './components/header.vue';
	export default {
		//引入的组件
		components: {

		},
		//父组件传入的值
		props: {

		},
		data() {
			return {
				
			}
		},
		//方法
		methods: {
			
		},
		//进入页面加载
		mounted() {
			
		},
		//计算属性
		computed: {},
		//监控数据变化
		watch: {}
	}
</script>

<style scoped lang="scss">
	@import 'assets/css/mixin.scss';
	.topic{
		font-size: 30px;
		color: #666;
		margin: 0px 0px 15px 0px;
	}
	.breadcrumb{
		padding: 8px 15px;
	    margin-bottom: 25px;
	    background-color: #eee;
	    a{
	    	color: #333;
    		font-size: 14px;
	    }
	}
	.greet{
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		padding: 100px 0 70px 0;
	}
	.car{
		text-align: center;
		width: 100%;
		img{
			width: 60%;
		}
	}
</style>