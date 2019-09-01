<template>
  <!--默认展开路由为空字符串的菜单-->
  <el-aside :width="width" class="aside" :collapse="true">
    <el-menu @open="handleOpen" @close="handleClose" :router="true">
      <el-menu-item class="line-bottom" v-if="asideLlistHome" @click.native="updateBreadcrumb()" :index="$route.path.indexOf('index/') == -1 ? 'index/' + 'home' : 'home'">
        <img class="el-icon" :src="icon.index" /> {{asideLlistHome.name}}
        <!-- <i :class="asideLlistHome.icon"></i>{{asideLlistHome.name}} -->
      </el-menu-item>
      <el-submenu class="line-bottom" v-for="(menu, index) in asideLlist" :key="menu.id+index" :index="String(index)">
        <template slot="title">
          <!--<i class="el-icon-message"></i>-->
          <img class="el-icon" :src="icon[menu.icon]"> {{menu.name}}
          <!-- <i :class="menu.icon"></i>{{menu.name}} -->
          <!-- <i class="el-icon-location employee"></i>{{menu.name}} -->
          
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(sub, idx) in menu.subMenu" :key="sub.id+idx" :index="($route.path.indexOf('index/') == -1 ? 'index/' + sub.menuUrl : sub.menuUrl) || idx"
            :disabled="sub.menuUrl == null" @click.native="updateBreadcrumb(index, idx)">
            <!-- <img class="el-icon" :src="sub.icon" /> {{sub.name}} -->
            <!-- <img class="el-icon" :src="sub.icon" /> {{sub.name}} -->
            <!-- <i class="el-icon-employee"></i> {{sub.name}} -->
            <!-- <i :class="sub.icon"></i>{{sub.name}} -->
            <img class="el-icon" :src="icon[sub.icon]" /> {{sub.name}}          
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import {login} from 'network/httpq';
  export default {
    props: ["width", "breadcrumb"],
    data() {
      return {
        icon: {
          quanxian: require('assets/img/menu/quanxian.png'),
          // site: require('assets/img/menu/site.png'),
          // msg: require('~assets/img/menu/msg.png'),
          daoru: require('assets/img/menu/daoru.png'),
          // index: require('~assets/img/menu/index.png'),
          list: require('assets/img/menu/list.png'),
          // list: '~assets/img/menu/list.png',
          // daoru: '~assets/img/menu/daoru.png',
          // photo: require('~assets/img/menu/photo.png'),
          // poster: require('~assets/img/menu/poster.png'),
          // propaganda: require('~assets/img/menu/propaganda.png'),
          // applet: require('~assets/img/menu/applet.png'),
          // export: require('~assets/img/menu/export.png'),
          // shezhi: require('~assets/img/menu/shezhi.png')
        },
        asideLlist: null,
        asideLlistHome: null,
        data: []
      }
    },
    mounted() {
      this.queryList();
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      // 更新面包屑
      updateBreadcrumb(index, idx) {
        if (index == undefined && idx == undefined) {
          this.breadcrumb.router = "/index/home";
          this.breadcrumb.first = "首页";
          this.breadcrumb.second = "欢迎使用";
          return;
        }
        this.breadcrumb.router = this.asideLlist[index].subMenu[idx].menuUrl;
        this.breadcrumb.first = this.asideLlist[index].name;
        this.breadcrumb.second = this.asideLlist[index].subMenu[idx].name;

      },
      // 处理侧边栏列表
      queryList() {
        let resList = JSON.parse(sessionStorage.asideData);
        if (resList == undefined) {
          return
        };
        let list = [];
        resList.filter(item => {
          // console.log("item:"+item.pId);
          
          // item.icon = this.icon[item.icon];
          if (item.pId === "0"){
            // console.log("pId----:"+item.pId);
            list.push(item);
          }
            
        });
        
        list.map(item => {
          // console.log("item:"+item.id);
          item.subMenu = [];
          resList.filter(subItem => {
            // console.log("lissubItemt:"+subItem.pId);
            if (subItem.pId == item.id){
                item.subMenu.push(subItem);
            }
              
          });
        });
        // console.log("list:", list)
        this.asideLlistHome = list[0];
        list.splice(0, 1);
        console.log("this.asideLlistHome:", this.asideLlistHome)
        
        
        this.asideLlist = list;
        // console.log("this.asideLlist:", this.asideLlist)



      }
    },
  }

</script>

<style lang="scss" scoped>
  .aside {
    text-align: left;
  }

  .line-bottom {
    border-bottom: solid 1px #E0E0E0;
  }
  
  .el-icon {
    width: 24px;
    vertical-align: middle;
  }

</style>
