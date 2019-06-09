import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CopyOfHome from './views/CopyOfHome.vue'
import RouteTest from './views/RouteTest.vue'
import FlexBoxPlayground from './views/FlexBoxPlayground.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/copy',
      name: 'copyOfHome',
      component: CopyOfHome
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test/:id',
      name: 'randomRoute',
      component: RouteTest,
      props: true
    },
    {
      path: '/flex-box-playground',
      component: FlexBoxPlayground
    }
  ]
})
