import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/home.vue"),
    redirect:"hot",
    children:[
      {
        path:"index",
        name:"index",
        component:()=>import("../views/home/index/index.vue"),
        
      },
      {
        path:"hot",
        name:"hot",
        component:()=>import("../views/home/hot/hot.vue"),
        redirect:"/hot/arr",
        children:[
          {
            path:"/hot/arr",
            name:"arr",
            component:()=>import("../views/home/hot/arr.vue"),
           
            
          },
          {
            path:"/hot/odd",
            component:()=>import("../views/home/hot/odd.vue")
          }
        ]
      },
    ]
  },
  {
    path: "/my/:item",
    name: "my",
    component: () => import("../views/my/my.vue"),
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem("msg")){
        next()
      }else{
        next({path:"/log"})
      }
    }
  },
  {
    path: "/log",
    name: "log",
    component: () => import("../views/my/log.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
