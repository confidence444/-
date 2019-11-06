import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    redirect:"login",
    children:[
      {
        path:"login",
        name:"login",
        component:()=>import("../views/login/login.vue")
      },
      {
        path:"register",
        name:"register",
        component:()=>import("../views/register/register.vue")
      },
      {
        path:"Home",
        name:"Home",
        component:()=>import("../views/Home/Home.vue"),
        children:[
          {
            path:"/Home/ome",
            name:"ome",
            component:()=>import("../views/Home/ome/ome.vue")
          },
          {
            path:"/Home/my",
            name:"my",
            component:()=>import("../views/Home/my/my.vue")
          }
        ]
      }
    ]
  },
  {
    path:"/information",
    name:"information",
    component:()=>import("../views/information/information.vue"),
    meta:{item:"个人信息"}
  },
  {
    path:"/comment",
    name:"comment",
    component:()=>import("../views/comment/comment.vue"),
    meta:{item:"个人评论"}
  },
  {
    path:"/change",
    name:"change",
    component:()=>import("../views/change/change.vue"),
    meta:{item:"更改密码"}
  },
  {
    path:"/Collection",
    name:"Collection",
    component:()=>import("../views/Collection/Collection.vue"),
    meta:{item:"我的收藏"}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
