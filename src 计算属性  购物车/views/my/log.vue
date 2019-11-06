<template>
    <div>
       
        <button @click="fn">登录</button>
    </div>
</template>

<script>
export default {
  methods: {
      fn(){
          localStorage.setItem("msg",1)
          this.$router.push({name:"my"})
      }
  },
}
</script>

<style>

</style>
