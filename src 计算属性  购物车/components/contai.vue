<template>
    <div>
          <ul v-for="(item,index) in listdata" :key="index">
            <li>{{item.title}}
                <Contai v-if="item.children" :listdata="item.children"></Contai>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["listdata"],
    name:"Contai",
  data(){
      return {
          
      }
  }
}
</script>

<style>

</style>
