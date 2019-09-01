<template>
	<el-container class="main">
		<comp-header @show-aside="showMediaAside"></comp-header>
		<el-container class="container">
			<comp-aside :width="adideWith" :breadcrumb="breadcrumb" class="media-aside" :class="{'media-aside-show':mediaAsideShow}"></comp-aside>
			<el-main>
				<el-breadcrumb separator="/" class="breadcrumb">
					<el-breadcrumb-item :to="{ path: breadcrumb.router }">
						<i class="el-icon-menu"></i> {{breadcrumb.first}}
					</el-breadcrumb-item>
					<el-breadcrumb-item>{{breadcrumb.second}}</el-breadcrumb-item>
				</el-breadcrumb>
				<router-view :breadcrumb="breadcrumb"></router-view>
				<el-footer>
					<p>© 2018 保时捷（中国）汽车销售有限公司&nbsp;&nbsp;&nbsp;<a href="http://www.miibeian.gov.cn/">沪ICP备10013326号</a></p>
				</el-footer>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	// import Aside from 'components/common/aside/Index'
	// import Header from 'components/common/header/Index'
	export default {
		//引入的组件
		components: {
			"comp-aside": r => require(['components/common/aside'], r),
      "comp-header": r => require(['components/common/header'], r),
      // Aside,Header
		},
		//父组件传入的值
		props: {

		},
		data() {
			return {
				// 侧边栏响应式处理
				mediaAsideShow: false,
				// 面包屑实例
				breadcrumb: {
					first: "首页",
					second: "欢迎使用",
					router: "/index/home"
				}
			}
		},
		computed: {
			adideWith() {
				return this.mediaAsideShow ? "100%" : "200px";
			}
		},
		//方法
		methods: {
			showMediaAside() {
				this.mediaAsideShow = !this.mediaAsideShow;
			}
		},
		//进入页面加载
		mounted() {
			console.log(this.$route.path.indexOf("index/") == -1)
		},
	}
</script>

<style scoped lang="scss">
	@media screen and (max-width: 768px) {
		.media-aside {
			display: none;
		}
	}
	
	.media-aside-show {
		display: block;
		position: fixed;
		z-index: 9999;
		/*left: 0;*/
		width: 100%;
		height: 100%;
	}
	
	.container {
		padding-top: 126px;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;

	}
	
	.breadcrumb {
		margin-bottom: 20px;
		padding: 15px;
		background: #f6f6f6;
	}
	
	.el-footer {
		margin-top: 60px;
	}
	
	.el-footer {
		color: #333;
		text-align: center;
		line-height: 60px;
		font-size: 12px;
	}
	
	.el-aside {
		background-color: #FAFAFA;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #fff;
		color: #333;
		/*text-align: center;
		line-height: 160px;*/
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
</style>