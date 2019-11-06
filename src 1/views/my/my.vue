<template>
    <div>
        我的
        <button @click="$router.back()">返回</button>
        {{this.$route.query.arr}}
        {{this.$route.params.item}}
        <button @click="fn">+</button>
        {{ this.$store.state.data
        }}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:null
        }
    },
    computed: {
      
    },
 methods: {
     fn(){
            this.$store.commit("arr")
        }
 },

}
</script>

<style>

</style>
