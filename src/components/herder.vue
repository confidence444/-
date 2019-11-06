<template>
    <div>
         <header><span @click="$router.go(-1)">&lt;</span><p>{{this.$route.meta.item}}</p><span>编辑</span></header>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route)
    }

}
</script>

<style lang="scss" scoped>
 header{
     width: 100%;
     height: 45px;
     display: flex;
     span{
         flex: 2;
         display: flex;
         align-items: center;
         justify-content: center;
        &:nth-child(3){
             color: #F76B6D;
             font-size: 12px;
         }
     }
      
     p{
         flex: 6;
         display: flex;
         align-items: center;
         justify-content: center;
     }
 }
</style>
