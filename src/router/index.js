import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
