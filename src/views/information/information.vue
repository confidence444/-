<template>
    <div class="wrap">
        <Header />
         <div class="main">
           <p><span>账号名称：</span></p>
         </div>
    </div>
</template>

<script>
import Header from '../../components/herder';
export default {
  components:{
      Header
  }
}
</script>

<style lang="scss" scoped>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main{
    flex: 1;
}
</style>
