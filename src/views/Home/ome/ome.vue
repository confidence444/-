<template>
  <div class="wrap">
       <header>
          <span><span class="iconfont icon-zhaopian"></span></span>
         <div>
              <p><input type="text" name="" id="" placeholder="试试搜索你的好友名字"></p>
         </div>
      </header>
      <main>
             <div class="container" v-for="(item,index) in data " :key="index">
                  <div class="nav">
                      <div class="box">
                          <span class="portrait">
                             <img :src='require("../../../sucai/avator/"+item.avator)' alt="">
                          </span>
                          <p class="name"><span>{{item.nick}}</span><span>{{item.publishtime}}</span></p>
                      </div>
                      <span class="Collection"><span class="iconfont icon-gerenshoucang"></span></span>
                  </div>
                  <div class="img" >
                    <img v-for="(item,index) in item.imgs" :key="index" :src='require("../../../sucai/pics/"+item)' alt="">
                  </div>
                  <p class="contai">{{item.txt}}</p>
                  <div class="zan"><p><span class="iconfont icon-zan1"></span><span>34</span></p><p><span class="iconfont icon-pinglun"></span><span>3</span></p></div>
             </div>

      </main>
    </div>
</template>

<script >
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["data"])
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"])
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size: 26px;
      color: #f76968;
    }
  }
  div {
    flex: 8;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 80%;
      height: 26px;
      border-radius: 20px;
      input {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: none;
        background: #f0f0f0;
        outline: none;
        text-indent: 2em;
      }
    }
  }
}
main {
  flex: 1;
  overflow: auto;
  .container {
    width: 90%;
    height: 240px;
    margin-left: 18px;
    border-bottom: 1px solid red;
    margin-top: 20px;
    font-size: 15px;
    .nav {
      width: 100%;
      height: 50px;
      display: flex;
      .box {
        flex: 8;
        display: flex;
        .portrait {
          display: flex;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ccc;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .name {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          span {
            &:nth-child(2) {
              color: #ccc;
              font-size: 10px;
              margin-top: 5px;
            }
          }
        }
      }
      .Collection {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .img {
      width: 100%;
      height: 100px;
      margin-top: 10px;
      display: flex;
      img {
        width: 120px;
        height: 100%;
        margin-right: 20px;
      }
    }
    .contai {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
    }
    .zan {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
