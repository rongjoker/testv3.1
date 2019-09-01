<template>
	<div class="header">
		<section class="logoTitle">
			<span></span>
			<img src="~assets/img/logo.png" alt="">
			<span></span>
		</section>
		<header>
			<el-row>
				<el-col :span="12">
					<div class="logo">
						<i class="media-aside" :class="[isSpread ? 'el-icon-close' : 'el-icon-more-outline']" @click.stop="toSpread"></i>
						<img src="~assets/img/logo.png" alt="">
						<span>A Soulful Night 访客管理系统</span>
					</div>
				</el-col>
				<el-col :span="12" class="clear">
					<el-dropdown class="dropdown right">
						<span class="el-dropdown-link">
			                <img src="~assets/img/userImg.jpg" alt="">
			                {{userName}}
			                <!-- 广州天河保时捷中心 -->
			                <i class="el-icon-arrow-down el-icon--right"></i>
			            </span>
						<el-dropdown-menu slot="dropdown">
							<!-- <el-dropdown-item v-if="roleLevel">
								<router-link style="width:100%" :to="{path:'/index/changePassword'}"><i class="el-icon-arrow-down el-icon-edit-outline"></i> 修改密码</router-link>
							</el-dropdown-item> -->
							<el-dropdown-item>
								<router-link style="width:100%" :to="{path:'/login'}"><i class="el-icon-arrow-down el-icon-circle-close-outline"></i> 退  出</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-row>
		</header>
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
				userName: "", //用户姓名
				isSpread: false,
				roleLevel: false

			}
		},
		//方法
		methods: {
			toSpread() {
				this.$emit('show-aside');
				this.isSpread = !this.isSpread;
			}
		},
		//进入页面加载
		mounted() {
			this.userName = sessionStorage.getItem("userName");
			if(sessionStorage.getItem("roleLevel") == "1"){
				this.roleLevel = true;
			}
		},
		//计算属性
		computed: {},
		//监控数据变化
		watch: {}
	}
</script>

<style scoped lang="scss">
	@import 'assets/css/mixin.scss';
	@media screen and (min-width: 768px) {
		.media-aside {
			display: none;
		}
	}
	
	.header {
		width: 100%;
		.logoTitle{
			width: 100%;
			margin: 15px 0;
			position: relative;
			text-align: center;
			img{
				width: 100px;
				margin: 0 10px;
			}
			span{
				display: inline-block;
				width: 500px;
				height: 1px;
				background-color: $grey1;
				position: relative;
				top: -2px;
			}
		}
		header {
			position: fixed;
			background-color: $grey4;
			z-index: 99;
			width: 100%;
			padding: 0 20px;
			color: #fff;
			box-sizing: border-box;
			height: 40px;
			line-height: 40px;
			.logo {
				img {
					vertical-align: middle;
					@include wh(54px, 26px);
				}
				.media-aside {
					padding-right: 20px;
				}
			}
			.dropdown {
				text-align: right;
				color: #fff;
				img {
					vertical-align: middle;
					@include wh(26px, 26px);
				}
			}
		}
	}
</style>