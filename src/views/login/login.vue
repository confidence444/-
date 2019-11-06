<template>
    <div class="wrap">
        <header>圈子登录</header>
        <main>
            <div class="login">
                <div class="txt">
                    <input type="text" name="" id="" v-model="uesname" placeholder="用户名">
                </div>
                 <div class="pwd">
                    <input :type="type" name="" id="" v-model="uespwd" placeholder="输入密码">
                    <span :class="['iconfont',flag ? 'icon-yanjing':'icon-yanjing_bi']" @click="icon"></span>
                </div>
            </div>
            <span class="sign" @click="login">登录</span>
            <a href="/register">没有账号，快速注册</a>
        </main>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import axios from 'axios'
export default {
  data(){
      return {
          flag:false,
          type:"password",
          uesname:"",
          uespwd:""
      }
  },
  methods:{
      ...mapMutations(["use"]),
    icon(){
        this.flag=!this.flag;
        if(this.flag){
            this.type="text"
        }else{
             this.type="password"
        }
    },
    login(){
      if(!this.uesname.trim()||!this.uespwd.trim()){
          alert("不能为空，请输入用户")
      }else{
        axios.post("/login",{
            uesname:this.uesname,
            uespwd:this.uespwd
        }).then(res=>{
            console.log(res.data.data)
            if(res.data.code===1){
                 this.$router.push("/Home/ome")
                 this.use(res.data.data)

            }else{
                 alert(res.data.msg)
            }
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
}
main {
  flex: 1;
  .login {
    width: 90%;
    height: 120px;
    margin-top: 45px;
    margin-left: 18px;

    .txt {
      width: 100%;
      height: 45px;

      input {
        width: 100%;
        height: 100%;
        border: none;
        background: #f2f2f2;
        outline: none;
      }
    }
    .pwd {
      width: 100%;
      height: 45px;
      margin-top: 10px;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        border: none;
        background: #f2f2f2;
        outline: none;
      }
      .iconfont{
          position: absolute;
          right: 10px;
          top: 15px;
      }
    }
  }
  .sign {
    width: 90%;
    height: 45px;
    margin-left: 18px;
    margin-top: 10px;
    display: flex;
    background: #f76968;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
  }
  a{
      display: flex;
      width: 90%;
      height: 20px;
      color: black;
      font-size: 12px;
      margin-left: 18px;
      margin-top: 20px;
  }
}
</style>
