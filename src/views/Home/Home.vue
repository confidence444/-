<template>
    <div class="warp">
       <main>
            <router-view></router-view>
       </main>
       <footer>
           <router-link to="/Home/ome">首页</router-link>
            <router-link to="/Home/my">我的</router-link>
       </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow: auto;
}
footer {
  width: 100%;
  height: 45px;
  display: flex;
  a {
    text-decoration: none;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: 600;
  }
}
</style>