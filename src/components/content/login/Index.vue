<template>
  <div class="login">
    <div class="background" ref="backgroundImg">
      <el-row>
        <el-col :lg="{span: 7, offset: 17}" :md="{span: 10, offset: 14}" :sm="{span: 14, offset: 10}" :xs="24" class="login_form_con">
          <img class="login_form_con_logo" src="~assets/img/logo.png" alt="">


          <p class="greet_me">欢迎使用 A Soulful Night 访客管理系统</p>
          <!-- <p class="login_greet">欢迎使用保时捷新车发布访客管理系统</p> -->

          <el-form :model="userLogin" status-icon  ref="userLogin" class="userLogin">
            <el-form-item prop="userName">
              <el-input
                type="text"
                @keyup.enter.native="submitForm('userLogin')"
                placeholder="用户名"
                auto-complete="off"
                v-model="userLogin.userName">
                <i slot="prefix" class="iconfont">&#xe66e;</i>
              </el-input>
            </el-form-item>
            <el-form-item  prop="checkPass">
              <el-input
                @keyup.enter.native="submitForm('userLogin')"
                type="password"
                placeholder="密码"
                auto-complete="off"
                v-model="userLogin.checkPass">
                <i slot="prefix" class="iconfont">&#xe647;</i>
              </el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button class="submit" type="primary"  @click="submitForm('userLogin')" :loading="loading">提交</el-button>
            </el-form-item>
          </el-form>
          <div class="forgetThePassword">
            <!-- <a >忘记密码？</a> -->
          </div>
          <!-- <img class="erweima" src="./../assets/login/wei.png" alt=""> -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {login} from 'network/httpq';
export default {
  name: 'login',
  data () {

    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    var validateUserPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      loading:false,
      userLogin: {
        userName: '',
        checkPass: ''
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validateUserPass, trigger: 'blur' }
        ]
      }
    }
  },
  mounted(){
    this.$refs.backgroundImg.style.minHeight = document.body.clientHeight+"px";
    sessionStorage.clear();
//  console.log(this.connected);
//  this.$store.dispatch('setConnected', true);
//  console.log(this.connected);

  },
  methods:{
    open(title,text) {
      const h = this.$createElement;
      this.$notify({
        title: title,
        message: h('i', { style: 'color: #403f45'}, text)
      });
    },
    async login(){
      // this.loading = true;
      await login({
        "username":this.userLogin.userName,
        "password":this.userLogin.checkPass
      }).then((res)=>{
        console.log('res: ', res);
        this.loading = false;
        this.open("登录成功",`${res.result.userName}，欢迎您！`);
        sessionStorage.roleLevel = res.result.roleLevel;
        sessionStorage.userName = res.result.userName;
        sessionStorage.loginName = res.result.loginName;
        sessionStorage.roleType = res.result.roleType;
        sessionStorage.userId = res.result.userId;
        sessionStorage.dealerName = res.result.dealerName;
        sessionStorage.district = res.result.district;
        // console.log('res.result.district',res.result.district);
        // res.result.menuInfo.push({"id":8,"pId":"5","name":"相册管理","icon":"photo","menuUrl":"photoAlbumList","checked":null})
        // res.result.menuInfo.push({"id":9,"pId":"5","name":"海报管理","icon":"poster","menuUrl":"menuPoster","checked":null})
        // res.result.menuInfo.push({"id":10,"pId":"5","name":"宣传管理","icon":"propaganda","menuUrl":"menuPropaganda","checked":null})
        // res.result.menuInfo.push({"id":11,"pId":"5","name":"小程序管理","icon":"applet","menuUrl":"menuApplet","checked":null})
        // res.result.menuInfo.push({"id":12,"pId":"1","name":"抽奖码导出","icon":"quanxian","menuUrl":"goodLuckCode","checked":null})
        sessionStorage.asideData = JSON.stringify(res.result.menuInfo);



        this.$router.push({
          path:"/index/home"
        })
      },(error)=>{
        console.log('error: ', error);
        this.loading = false;
        // this.open("登录失败",`${res.err_msg}`);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();

        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    }

  },
  //计算属性
  computed: {
    // connected() {
    //   return this.$store.getters.getConnected;
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped  lang="scss">
@import "~assets/css/fontIcon.css";
@import "~assets/css/mixin.scss";
.iconfont{
  font-family:"iconfont" !important;
  font-size:20px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: $grey2;
} 
.login{
  .background{
    // background-image: url("./../assets/login/backgroundImg.jpeg");
    background-image: url("~assets/img/login/backgroundImg2.jpg");
    // height: 800px;
    background-repeat: no-repeat;
    background-clip: border-box;
    background-size: cover;
    padding: 40px;
  }
  .login_form_con{
    background-color: rgba(255, 255, 255, 1);
    &_logo{
      width: 200px;
      display: block;
      margin: 50px auto 0;
    }
  }
  &_greet{
    width: 100%;
    text-align: center;
    line-height: 2;
    font-size: 24px;
    margin: 20px auto 50px;
  }

  .greet_me{
    width: 100%;
    text-align: center;
    line-height: 2;
    font-size: 20px;
    margin: 20px auto 50px;
  }
  .userLogin{
    width: 60%;
    margin: 0 auto;
  }
  .submit{
    width: 100%;
    background-color: $black;
    border-color:$black;
  }
  .forgetThePassword{
    margin: 50px auto 70px;
    width: 60%;
    text-align: right;
    color: $black;
    font-size: 14px;
    height: 30px;
  }

}



</style>
