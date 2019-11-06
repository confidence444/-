<template>
    <div class="wrap">
        <header><span @click="$router.go(-1)">&lt;</span><p>圈子注册</p></header>
        <main>
            <div class="login">
                <div class="txt">
                    <input type="text" name="" id="">
                </div>
                 <div class="pwd">
                    <input :type="type" name="" id="">
                     <span :class="['iconfont',flag ? 'icon-yanjing':'icon-yanjing_bi']" @click="icon"></span>
                </div>
            </div>
            <span class="sign">注册</span>
        </main>
    </div>
</template>

<script>
export default {
     data(){
      return {
          flag:false,
          type:"password"
      }
  },
  methods:{
    icon(){
        this.flag=!this.flag;
        if(this.flag){
            this.type="text"
        }else{
             this.type="password"
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
  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    flex: 9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
main {
  flex: 1;
  .login {
    width: 90%;
    height: 120px;
    margin-top: 35px;
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
}
</style>
