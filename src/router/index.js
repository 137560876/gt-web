import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Main.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/Main'
}, {
  path: '/main',
  component: Main
}]

const router = new VueRouter({
  routes
})

export default router