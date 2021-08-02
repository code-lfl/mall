import { createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import('../views/home/Home.vue')
  },
  {
    path:'/category',
    component:() => import('../views/category/Category.vue')
  },
  {
    path:'/shopcart',
    component:() => import('../views/shopcart/Shopcart.vue')
  },
  {
    path:'/profile',
    component:() => import('../views/profile/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
