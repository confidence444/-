<template>
    <div>
       <Contai :listdata="listdata"/>
    </div>
</template>

<script>
import Contai from "../../../components/contai";
export default {
  components: {
    Contai
  },
  data() {
    return {
      listdata: [
        {
          title: "一级1",
          children: [
            {
              title: "二级1-1",
              children: [
                {
                  title: "三级级1"
                }, {
                  title: "三级级1"
                }, {
                  title: "三级级1"
                },
              ]
            }
          ]
        },
        {
          title: "一级2",
          children: [ {
              title: "二级1-1" 
            }]
        },
        {
          title: "一级3",
          children: [ {
              title: "二级1-1",
              
            },{
              title: "二级1-1",
              
            },{
              title: "二级1-1",
              
            },]
        }
      ]
    };
  }
};
</script>

<style>
</style>