<!--  -->
<template>
<div class='page'>

  <div class="new">
      <el-form ref="recomposeS" :inline="true" class="demo-form-inline">

<el-form-item label="账号种类" :label-width="searchFormLabelWidth">
          <el-select v-model="seekUserPermissions.roleType" placeholder="请选择" :disabled="userSearchTds.roleTypeD">
    <el-option
      v-for="item in roleTypeOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      
      >
    </el-option>
  </el-select>
  </el-form-item>
        


  <el-form-item label="保时捷中心中文名" :label-width="searchFormLabelWidth">
          <el-input v-model="seekUserPermissions.dealerName" :disabled="userSearchTds.dealerNameD" placeholder="请输入保时捷中心中文名"  ></el-input>
        </el-form-item>

          <el-form-item label="区域" :label-width="searchFormLabelWidth">

   <el-select v-model="seekUserPermissions.district" placeholder="请选择" :disabled="userSearchTds.districtD">
    <el-option
      v-for="item in seekDistrictOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>


        </el-form-item>

        <el-form-item label="用户名称" :label-width="searchFormLabelWidth">
          <el-input v-model="seekUserPermissions.userName" placeholder="请输入用户名称" :disabled="userSearchTds.userNameD" ></el-input>
        </el-form-item>

      
      </el-form>
      <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
          <el-button icon="el-icon-search" size="mini" type="primary" :loading="addUserLoad" @click="seek">查询</el-button>
          <el-button v-if="addFunc" icon="el-icon-plus" size="mini" type="primary" @click="editButton(null,'add')">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="tableTitle">用户信息表</div>
    <div class="main">
      <el-table ref="multipleTable" border stripe :data="tableData" tooltip-effect="dark" v-loading="loading">

        <el-table-column align="center" type="index" width="50" label="序号">
        </el-table-column>

           <el-table-column align="center" prop="loginName" label="登陆名">
        </el-table-column>

              <el-table-column align="center" prop="userName" label="用户名称">
        </el-table-column>

                <el-table-column align="center" prop="roleType" :formatter="roleTypeFormatter" label="账号种类">
    
        </el-table-column>

          <el-table-column align="center" prop="district" label="区域">
        </el-table-column>

         <el-table-column align="center" prop="province" label="省市">
        </el-table-column>


  <el-table-column align="center" prop="city" label="市区">
        </el-table-column>

<el-table-column align="center" prop="dealerName" label="保时捷中心中文名">
        </el-table-column>
        <el-table-column align="center" prop="orderCount" label="意向金人数">
        </el-table-column>
        <el-table-column align="center" prop="presentTotal" label="可出席人数">
        </el-table-column>
         <el-table-column align="center" prop="presentConfirmCount" label="已确认">
        </el-table-column>
        <el-table-column align="center" prop="presentAvailableCount" label="剩余名额">
        </el-table-column>
        
        <el-table-column  v-if="addFunc" align="center" label="操作" width="150">
          <template slot-scope="scope">
            <span><a size="mini" @click="editButton(scope.row,'edit')">编辑</a></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[10,15,20,30]" :page-size="100" layout="total, sizes, prev, pager, next" :total="totalS">
      </el-pagination>
    </div>


    <div>
      <Detail ref="formD" :addFunc="addFunc":uid="_uid":tipsTrue="tipsTrue"></Detail>
    </div>




</div>
</template>


<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Detail from './Detail'
import {userManagementList} from 'network/httpq'
export default {
//import引入的组件需要注入到对象中才能使用
name: 'list',
components: {Detail},
data() {
//这里存放数据
return {
         centreData: [], //中心选框
        siteData: [], //站点选框
        formLabelWidth: "200px",
        searchFormLabelWidth: '130px', //搜索框里面的label的宽度
        // dialogFormVisible: false, //修改弹框是否显示
        tipsTrue: false, //修改弹框是否显示
        formType: '',
        addFunc:false,
        _uid: 0,
        changePwFunc:false,
        sessionUserRoleType:'',

        userSearchTds:{
          roleTypeD:false,
          dealerNameD:false,
          userNameD:false,
          districtD:false,

},

roleTypeOptions: [{
          value: 'admin',
          label: 'admin',
          disabled: false
        }
        , {
          value: 'dealer',
          label: '保时捷中心',
          disabled: true
        }
        , {
          value: 'vender',
          label: 'vender',
          disabled: false
        }, {
          value: 'event',
          label: 'event',
          disabled: false
        }, {
          value: 'district',
          label: '区域',
          disabled: false
        }, {
          value: 'all',
          label: '总部',
          disabled: false
        }],
         districtOptions: [
           {
          value: '南区',
          label: '南区'
        }, {
          value: '中区',
          label: '中区'
        }, {
          value: '北区',
          label: '北区'
        }]
        ,seekDistrictOptions: [
           {
          value: '',
          label: '全部'
        },
            {
          value: '南区',
          label: '南区'
        }, {
          value: '中区',
          label: '中区'
        }, {
          value: '北区',
          label: '北区'
        }],
        seekUserPermissions: { //搜索用户的数据容器
          "roleType": "",
          "dealerName": "",
          "userName":"",
          "district":"",
          "page": 1,
          "size": 10,
        },
        getUserListReq: {
          "roleType": "",
          "dealerName": "",
          "userName":"",
          "district":"",
          "page": 1,
          "size": 10
        },
          

        addUserLoad: false, //用户信息的提交loading
        page: 1,
        size: "10",
        totalS: 0,
        currentPage4: 1,
        tableData: [], //列表数据
        loading: true, //加载页面数据tab的loading



};
},
//监听属性 类似于data概念
computed: {

  count(){
    return this.$store.state.count
  }


},
//监控data中的数据变化
watch: {},
//方法集合
methods: {



      roleTypeFormatter(row, column){

        // console.log('column',column)

        let roleType = row.roleType;
        if(roleType === 'dealer'){
          return '保时捷中心'
        } else  if(roleType === 'district'){
          return '区域'
        } else  if(roleType === 'all'){
          return '总部'
        } {
          return roleType
        }

      },
      //改变分页的条数
      handleSizeChange(val) {
        this.getUserListReq.size = val;
        this.getUserManagementList(this.getUserListReq); //刷新列表
      },
      //改变分页的页数
      handleCurrentChange(val) {
        this.getUserListReq.page = val;
        this.getUserManagementList(this.getUserListReq); //刷新列表
      },
      //获取数据列表
      async getUserManagementList(req) {
        this.loading = false;
        await userManagementList(req).then(res => {
          this.totalS = res.result.total; //分页数据赋值
          this.tableData = res.result.records; //列表数据展示
        })
      },

            //搜索用户列表
      seek() {
        this.getUserListReq.district = this.seekUserPermissions.district == "" ? undefined : this.seekUserPermissions.district;
        this.getUserListReq.dealerName = this.seekUserPermissions.dealerName == "" ? undefined : this.seekUserPermissions.dealerName;
        this.getUserListReq.roleType = this.seekUserPermissions.roleType == "" ? undefined : this.seekUserPermissions.roleType;
        this.getUserListReq.userName = this.seekUserPermissions.userName == "" ? undefined : this.seekUserPermissions.userName;
        this.getUserListReq.page = this.seekUserPermissions.page;
        this.getUserListReq.size = this.seekUserPermissions.size;
        this.getUserManagementList(this.getUserListReq); //刷新列表          
      },

//修改or新增
editButton: function (req,type) {

if(undefined!=req && null!=req)this._uid = req[uid];
if('add'==type){
  this.addFunc = true;
  }else{
    this.addFunc = false;
  }
  
  this.$store.commit('showPermissionsUser')


      }


},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

      this.addFunc = false;
      this.changePwFunc = false;
      this.tipsTrue = false;
      this.userSearchTds.roleTypeD = true;
      this.userSearchTds.dealerNameD = true;
      this.userSearchTds.userNameD = true;
      this.userSearchTds.districtD = true;

 

      let sessionUserRoleTypeX = sessionStorage.getItem("roleType");

      this.sessionUserRoleType = sessionUserRoleTypeX;

      if( undefined!=sessionUserRoleTypeX && null!=sessionUserRoleTypeX && sessionUserRoleTypeX.length>0 ){

        if('admin'==sessionUserRoleTypeX ){
          this.addFunc = true;
          this.changePwFunc = true;
          this.tipsTrue = true;
          this.userSearchTds.roleTypeD = false;
          this.userSearchTds.dealerNameD = false;
          this.userSearchTds.userNameD = false;
          this.userSearchTds.districtD = false;



      }else{

        this.addFunc = false;

          if('dealer'==sessionUserRoleTypeX ){
           if( undefined != sessionStorage.getItem("dealerName") && 'null' != sessionStorage.getItem("dealerName")){
          let _dealerName = sessionStorage.getItem("dealerName");
          this.seekUserPermissions.dealerName = _dealerName;
          this.getUserListReq.dealerName = _dealerName;
          }
        }else if('district'==sessionUserRoleTypeX ){
          this.userSearchTds.roleTypeD = false;
          this.userSearchTds.dealerNameD = false;
          this.userSearchTds.userNameD = false;

          this.roleTypeOptions=[{
          value: 'dealer',
          label: '保时捷中心',
          disabled: true
        }];

        


           if( undefined != sessionStorage.getItem("district") && 'null' != sessionStorage.getItem("district")){
             let _district = sessionStorage.getItem("district");
              this.seekUserPermissions.district = _district;
              this.getUserListReq.district = _district;
          
          this.userSearchTds.districtD = true;
          }
        }else if('all'==sessionUserRoleTypeX ){
          this.userSearchTds.districtD = false;
          this.userSearchTds.roleTypeD = false;
          this.userSearchTds.dealerNameD = false;
          this.userSearchTds.userNameD = false;

          this.roleTypeOptions=[{
          value: 'dealer',
          label: '保时捷中心',
          disabled: true
        } ];



        }


}
      }

      this.getUserManagementList(this.getUserListReq); //获取用户列表信息

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped lang="scss">
  // .inputW {
  //   width: 192px !important;
  // }

    .inputW {
    width: 127px !important;
  }
  .tips{
    font-size: 12px;
    color: #d5001c;
    text-align: center;
  }

  .status {
    cursor: pointer;
    color: #0d638f;
  }

  .tableTitle {
    margin: 10px 0;
  }

  .block {
    margin-top: 20px;
    text-align: right;
  }

  a {
    color: #0d638f;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer
  }

  .cell .el-select--mini {
    width: 75px;
  }

    .dialogWidth .el-dialog {
    width: 36%;
  }

  .el-input {
    width: 195px;
  }

  .el-select{
    width: 195px;
  }

  .delete {
    margin-left: 10px;
  }

  .btn {
    padding: 8px;
  }

   .userTitle{
    display: flex;
    margin-bottom: 22px;
    line-height: 40px;
    .title{
      width: 120px;
      text-align: right;
      box-sizing: border-box;
      padding: 0 12px 0 0;
    }
}

</style>