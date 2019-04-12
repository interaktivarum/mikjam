import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import MoreInfo from '@/components/MoreInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/info',
      name: 'MoreInfo',
      component: MoreInfo
    }
  ]
})
