import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Production from '../views/Production.vue'
import Course from '../views/Course.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: { path: '/index' }
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/production',
    name: 'Production',
    component: Production
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
  },
  // {
  //   path: '/artist',
  //   name: 'Artist',
  //   component: Artist,
  // },
  // {
  //   path: '/exhibit',
  //   name: 'Exhibit',
  //   component: Exhibit,
  // },
  // {
  //   path: '/collab',
  //   name: 'Collab',
  //   component: Collab,
  // },
  // {
  //   path: '/edu',
  //   name: 'Edu',
  //   component: Edu,
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
