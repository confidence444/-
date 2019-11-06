<template>
    <div>
        {{name}}
    <button @click="a"></button>
    </div>
</template>

<script>
export default {
  props:["name"],
  methods: {
      a(){
          this.$emit("") 
      }
  },
}
</script>

<style>

</style>
