<template>
    <div >
      <div class="box" v-for="(item,index) in list " :key="index">

          <div class="list">
              <!-- <span class="span" @click="fn(index)" ref="el"></span> -->
              <input type="checkbox" name="a" id="" :checked="item.flag">
              </div>
          <div class="right">
              <p>{{item.name}}</p>
              <p>{{item.price}}</p>
            <button @click="arr(index)">+</button>
            <span>{{item.count}}</span>
             <button @click="fn1(index)">-</button>
          </div>
      </div>
      <Container  :flag="newFlag"/>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations ,mapGetters} from "vuex";
import Container from "../../../components/container";
export default {
  data() {
    return {
      name: "名字",
      newIndex: null,
      flag:false,
      newFlag:false
    };
  },
  components: {
    Container
  },
  computed: {
      ...mapGetters(["getComputed"]),
      ...mapState(["list","checkAll"])

  },
  created() {
    this.get();
  },
  methods: {
    ...mapActions(["get"]),
    ...mapMutations(["arr", "dec"]),
    fn1(index){
   this.dec(index)
      console.log(this.getComputed)
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 120px;
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  .list {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
  .right {
    flex: 8;
    p {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
