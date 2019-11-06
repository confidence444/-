<template>
    <div>
        全选
        <!-- <span :class="flag?'active':'span'" @click="fn" ></span>  -->
        <input type="checkbox" name="" id="" @click="checkedAll" :checked="checkAll" >
        <span>总价{{getComputed}}</span>
    </div>
</template>

<script>
import { mapMutations, mapState ,mapGetters} from "vuex";
export default {
  data() {
    return {
      checked: false
    };
  },
  computed: {
    ...mapGetters(["getComputed"]),
    ...mapState(["checkAll"])
  },
  methods: {
    ...mapMutations(["checkedAll"])
  }
};
</script>

<style lang="scss" scoped>
.span {
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.active {
  background: orange;
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
</style>
