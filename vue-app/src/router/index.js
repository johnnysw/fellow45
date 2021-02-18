import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
=======
>>>>>>> 99a7f0e8cd769d47ed77fd80b50851b8f11a88b9

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
=======
  { path: '/', name: 'Tv', component: () => import('../views/Tv.vue') },
  { path: '/music', component: () => import('../views/Music.vue') },
  { path: '/book', component: () => import('../views/Book.vue') },
  { path: '/chat', component: () => import('../views/Chat.vue') },
  { path: '/tvDetail/:id', component: () => import('../views/TvDetail.vue') },
>>>>>>> 99a7f0e8cd769d47ed77fd80b50851b8f11a88b9
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
