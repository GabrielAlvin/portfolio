import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/github',
    name: 'github',
    component: () => import('../views/GithubView.vue')
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: () => import('../views/YoutubeView.vue')
  },
  {
    path: '/curriculo',
    name: 'curriculo',
    component: () => import('../views/CurriculoView.vue')
  },
  {
    path: '/playlist/:id/:title',
    name: 'playlist',
    component: () => import('../views/PlaylistView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
