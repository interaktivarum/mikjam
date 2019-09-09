import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/views/Landing'
import Themes from '@/components/views/Themes'
import Jams from '@/components/views/Jams'
import About from '@/components/views/About'
import ParticipantInfo from '@/components/views/ParticipantInfo'
import Diploma from '@/components/views/Diploma'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition)
  {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/teman',
      name: 'Themes',
      component: Themes
    },
    {
      path: '/jams',
      name: 'Jams',
      component: Jams
    },
    {
      path: '/om',
      name: 'About',
      component: About
    },
    {
      path: '/deltagare',
      name: 'participantInfo',
      component: ParticipantInfo
    },
    {
      path: '/diplom',
      name: 'Diploma',
      component: Diploma
    }
  ]
})
