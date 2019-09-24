import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f5415be = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _4c883059 = () => interopDefault(import('../pages/works/_id/index.vue' /* webpackChunkName: "pages/works/_id/index" */))
const _5662e77b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/404",
      component: _1f5415be,
      name: "404"
    }, {
      path: "/works/:id?",
      component: _4c883059,
      name: "works-id"
    }, {
      path: "/",
      component: _5662e77b,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
