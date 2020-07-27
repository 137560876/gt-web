import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Main.vue'
import Home from '../views/page/home/Home.vue'
import Score from '../views/page/score/Score.vue'
import Option from '../views/page/option/Option.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/main'
}, {
  path: '/main',
  component: Main,
  children: [{
      path: '/',
      component: Home
    },
    {
      path: '/main/home',
      component: Home
    }, {
      path: '/main/score/:id',
      component: Score
    }, {
      path: '/main/option',
      component: Option
    }
  ]
}]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router