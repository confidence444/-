<template>
    <div class="wrap">
        <header>
             <div class="nav">
                      <div class="box">
                          <span class="portrait"></span>
                          <div class="name"><b>聂亮亮</b><p><span>年龄：18</span><span>活跃度<b>32</b></span></p></div>
                      </div>
                  </div>
        </header>
        <main>
            <div class="Middle">
                <ul>
                    <li @click="$router.push('/information')"><span class="iconfont icon-gerenxinxi"></span><p>个人信息</p><span>&gt;</span></li>
                    <li @click="$router.push('/comment')"><span class="iconfont icon-wodexinxi-"></span><p>我的评论</p><span>&gt;</span></li>
                    <li @click="$router.push('/Collection')"><span class="iconfont icon-geren_shoucang"></span><p>个人收藏</p><span>&gt;</span></li>
                </ul>
            </div>
             <div class="bottom">
                   <ul>
                    <li @click="$router.push('/change')"><span class="iconfont icon-xiugaimima"></span><p>修改密码</p><span>&gt;</span></li>
                    <li @click="$router.push('/login')"><span class="iconfont icon-tuichu"></span><p>退出</p><span>&gt;</span></li>
                   
                </ul>
             </div>
        </main>
    </div>
</template>

<script>
export default {};
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
  height: 150px;
  background: #f76968;
  .nav {
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: 30px;
    .box {
      flex: 8;
      display: flex;
      .portrait {
        display: flex;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #ccc;
        margin-left: 25px;
      }
      .name {
        display: flex;
        flex-direction: column;
        margin-left: 18px;
        b {
          color: #fff;
          margin-top: 5px;
        }
        p {
          margin-top: 5px;
          span {
            color: #fff;
            font-size: 10px;
            margin-right: 20px;

            b {
              font-size: 20px;
            }
          }
        }
      }
    }
    .Collection {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
main {
  flex: 1;
  background: #f5f5f5;
  .Middle {
    width: 100%;
    height: 150px;
    background: #fff;
    margin-top: 40px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      li {
        flex: 1;
        display: flex;
        align-items: center;
        span {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .iconfont {
          color: #f76968;
        }
        p {
          flex: 8;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 100px;
    background: #fff;
    margin-top: 40px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      li {
        flex: 1;
        display: flex;
        align-items: center;
        span {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .iconfont {
          color: #f76968;
        }
        p {
          flex: 8;
        }
      }
    }
  }
}
</style>
