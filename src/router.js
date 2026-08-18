import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import GemeenteEmmenView from './views/GemeenteEmmenView.vue'
import OwnerView from './views/OwnerView.vue'
import WhatRemainsOfUsView from './views/WhatRemainsOfUsView.vue'
import DuoView from './views/DuoView.vue'
import TimeWiseView from './views/TimeWiseView.vue'
import OceanviewView from './views/OceanviewView.vue'

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
  {
    path: '/projecten/owner-dashboard',
    name: 'owner-dashboard',
    component: OwnerView,
  },
  {
    path: '/projecten/what-remains-of-us',
    name: 'what-remains-of-us',
    component: WhatRemainsOfUsView,
  },
  {
    path: '/projecten/duo',
    name: 'duo',
    component: DuoView,
  },
  {
    path: '/projecten/timewise',
    name: 'timewise',
    component: TimeWiseView,
  },
  {
    path: '/projecten/oceanview-island',
    name: 'oceanview-island',
    component: OceanviewView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router