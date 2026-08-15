import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import GemeenteEmmenView from './views/GemeenteEmmenView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projecten',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/projecten/gemeente-emmen',
    name: 'gemeente-emmen',
    component: GemeenteEmmenView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router