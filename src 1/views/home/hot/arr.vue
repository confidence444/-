<template>
    <div>
        <Del :name="name"/>
        <button @click="$router.push({name:'my',params:{item:'arrs'}})">动态传参</button>
    </div>
</template>

<script>
import Del from '../../../components/del'
export default {
    data(){
      return{
          name:"名字"
      }
    },
  components:{
      Del
  }
}
</script>

<style>

</style>
