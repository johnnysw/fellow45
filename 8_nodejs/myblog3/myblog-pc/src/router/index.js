import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import BlogDetail from '../views/BlogDetail.vue'
import PostBlog from '../views/PostBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/post',
    name: 'PostBlog',
    component: PostBlog,
    beforeEnter: (to, from, next) => {
      // let myToken = localStorage.getItem("mytoken");
      // if (myToken){
      //   next();
      // }else{
      //   alert('请先登录');
      //   next({name: "Login"});
      // }
      next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
