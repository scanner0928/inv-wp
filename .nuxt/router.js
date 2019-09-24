import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _db20bbac = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _7f2197e2 = () => interopDefault(import('../pages/works/_id/index.vue' /* webpackChunkName: "pages/works/_id/index" */))
const _4e751378 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/404",
      component: _db20bbac,
      name: "404"
    }, {
      path: "/works/:id?",
      component: _7f2197e2,
      name: "works-id"
    }, {
      path: "/",
      component: _4e751378,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
