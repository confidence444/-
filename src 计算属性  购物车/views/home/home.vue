<template>
    <div id="app">
    <main><router-view></router-view></main>
  <footer>
    <router-link to="/index">首页</router-link>
    <router-link to="/hot">我的</router-link>
  </footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted(){
        // axios.get("/get").then(res=>{
        //     console.log(res.data)
        // })
    }
};
</script>

<style  lang="scss" scoped>
#app{
  display: flex;
  flex-direction: column;
}
main{
  flex: 1
}
 footer{
   width: 100%;
   height: 45px;
   display: flex;
   a{
     flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
   }
   .router-link-active{
     background: palevioletred;
   }
 }
</style>
