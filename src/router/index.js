import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokemon  from '@/components/Pokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    props: true,  
  },
  {
    path: ':pokemon',
    component: Pokemon,
    name:'pokemonDetails'

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
