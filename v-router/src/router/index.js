import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '../views/Course.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Course',
    component: Course,
    children: [
      {
        path: 'fe',
        name: 'Fe',
        component: () => import('../views/Fe.vue')
      },
      {
        path: 'rd',
        name: 'Rd',
        component: () => import('../views/Rd.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  , {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  }
  , {
    path: '/detail/:id/:price',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
