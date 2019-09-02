<!--  -->
<template>
<div class='page'>
<el-dialog append-to-body width="720px" title="编辑基本信息" :visible.sync="dialogVisiblex">
  <el-form ref="recompose" :rules="rules" :model="recomposePopup" class="demo-ruleForm">


<el-form-item   label="登陆名" :label-width="formLabelWidth" prop="loginName">
            <el-input  v-model="recomposePopup.loginName" :disabled="tds.loginNameD" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item   label="用户名称" :label-width="formLabelWidth" prop="userName">
            <el-input  v-model="recomposePopup.userName" :disabled="tds.userNameD" auto-complete="off"></el-input>
          </el-form-item>

    <el-form-item label="账号种类" :label-width="formLabelWidth">
          <el-select v-model="recomposePopup.roleType" :disabled="tds.roleTypeD" placeholder="请选择" @change="changeRoleType">
    <el-option
      v-for="item in roleTypeOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
      >
    </el-option>
  </el-select>
  </el-form-item>

      <el-form-item label="区域" :label-width="formLabelWidth" prop="district">
        <el-select v-model="recomposePopup.district" :disabled="tds.districtD" placeholder="请选择">
    <el-option
      v-for="item in districtOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
          </el-form-item>

                   <el-form-item label="省/市(选填）" :label-width="formLabelWidth" prop="province">
            <el-input v-model="recomposePopup.province" :disabled="tds.provinceD"   auto-complete="off"></el-input>
          </el-form-item>


<el-form-item label="市/区(选填）" :label-width="formLabelWidth" prop="city">
            <el-input v-model="recomposePopup.city" :disabled="tds.cityD"   auto-complete="off"></el-input>
          </el-form-item>


    <el-form-item label="保时捷中心中文名" :label-width="formLabelWidth" prop="dealerName">
            <el-input v-model="recomposePopup.dealerName" :disabled="tds.dealerNameD"  auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="可出席人数" :label-width="formLabelWidth" prop="presentTotal">
            <el-input size="mini" type="number" v-model="recomposePopup.presentTotal" :disabled="tds.presentTotalD"  auto-complete="off"></el-input>
          </el-form-item>


       <el-form-item  v-if="changePwFunc" prop="password" label="密码" :label-width="formLabelWidth">
            <el-input maxlength="16" minlength="6"  v-model="recomposePopup.password"  ></el-input>
          </el-form-item>
          <el-form-item  v-if="changePwFunc" prop="passwordS" label="确认密码" :label-width="formLabelWidth">
            <el-input maxlength="16" minlength="6"  v-model="recomposePopup.passwordS" ></el-input>
          </el-form-item>


          </el-form>

  

        <div class="tips" v-if="tipsTrue">* 点击“提交”后直接覆盖原数据</div>
        <div slot="footer" class="dialog-footer">
          <el-button v-if="changePwFunc" type="primary" @click="confirm(recomposePopup,'success','recompose')">提 交</el-button>
          <el-button @click="dialogVisiblex=false">返 回</el-button>
        </div>




</el-dialog>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name: 'detail',
components: {},
props:{
  addFunc:{
    type: Boolean,
    default(){
      return true
    }
  },
  uid:{
      type: Number,
    default(){
      return 0
    }
  },
  tipsTrue:{
    type: Boolean,
    default(){
      return false
    }
  }
  ,
  // dialogVisible:{
  //   type: Boolean,
  //   default(){
  //     return false
  //   }
  // }

},

data() {

var validateBlank = (rule, value, callback, source, options) => {
        if (undefined==value || null ==value || 1>value.length ) {
          callback(new Error('message'));
        } else {
          callback();
        }
      };



     var validatePassword = (rule, value, callback) => {
      let ispass = true;

          if('add' == this.formType){
            if( undefined ==value || value.length <8 || value.length >16){
             ispass = false;
           } }

           if(undefined !=value && 'null'!=value && value.length>0){
             if( value.length <8 || value.length >16){
               ispass = false;
            //  callback(new Error('密码不能为空'));
           }else{

        let reg = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])');
    if (reg.test(value)) {
      // console.log('22222')
        // callback();
    } else{
      // console.log("33333")
      ispass = false;
      // callback(new Error('密码不能为空'));
    }
           }
           }

console.log('come here',value)
// console.log('come here-ispass',ispass)
      if(ispass){
        callback();
      }else{
        callback(new Error('密码不能为空'));
        
      }

           
      
      };




        var validatePasswords = (rule, value, callback) => {

          if('add' == this.formType){
            if( undefined ==value || 'null'==value || value.length<1 ){
             callback(new Error('确认密码不能为空'));
           }

          }

             if( value != this.recomposePopup.password){
             callback(new Error('确认密码必须和密码一致'));
           }{
             callback();
           }

      };

         var validateDistrict = (rule, value, callback) => {

         if(null!=this.recomposePopup.roleType && 'district'==this.recomposePopup.roleType){

           if( undefined ==value || value.length <1 ){
             callback(new Error('区域不得为空'));
           }{
             callback();
           }

        }else{
          callback();
        }
      };


//这里存放数据
return {

  formLabelWidth: "200px",
        formType: '',
        changePwFunc:true,
        dialogVisible:false,

  //修改数据的弹框数据
        recomposePopup:{
          uid:1, 
          userName:"用户名称", 
          loginName:"登陆名称", 
          roleType:"roleType",
          district:"区域", 
          province:"省/市(选填）",
          city:"市/区（选填）",
          dealerName:"保时捷中心中文名",
          presentTotal:"可出席人数", 
          password:"", 
          passwordS:""
        },

  tds:{
            userNameD:false,
            loginNameD:true,
            districtD:true,
            provinceD:true,
            cityD:true,
            dealerNameD:true,
            presentTotalD:false,
            roleTypeD:false,
        },

        

           rules:{
          loginName:[{ required: true, message: '登陆名不得为空',trigger: 'blur'}],
          roleType:[{ required: true, message: '账号种类不得为空',trigger: 'blur'}],
          userName:[{ required: true, message: '用户名称不得为空',trigger: 'blur'}],
          password:[{ validator:validatePassword, message: '密码不得为空且为8-16位包含数字和英文字母',trigger: ['change','blur']}],
          passwordS:[{ validator:validatePasswords, message: '确认密码不得为空且需与密码相同',trigger:['change','blur']}],
          // backDate:[{ message: 'xxxx不得为空',trigger:'blur'},{validator:validateBackDate}],
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
        ,

};
},
//监听属性 类似于data概念
computed: {

  dialogVisiblex:{
    get(){
      return this.$store.state.permissionsUserData.dialogFormVisible
    }
    ,
    set (value) {
      this.$store.commit('updatePermissionsUser', value)
    }

  }




},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

  closeDialog(){
    this.$store.commit('closePermissionsUser')

  },


       changeRoleType(val) {

         let sessionUserRoleTypeX = sessionStorage.getItem("roleType");

          if('admin'==sessionUserRoleTypeX){

         if('district'== this.recomposePopup.roleType){
          this.tds.districtD = false;
        }else{
          this.tds.districtD = true;
          // this.recomposePopup.district = '';
        }

          }else{
        this.tds.districtD = true;
          }




      },

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
       this.tds.userNameD = true;
      this.tds.presentTotalD = true;

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