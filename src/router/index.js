import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Movie',
    name: 'Movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/admin',
    // NOMBRE
    name: 'admin',

    // SE ASIGNA LO QUE VA A MOSTRAR
    component: () => import('@/views/MenuAdmin.vue'),
    children: [
      {
        // INDICADOR DE COMO SERA LA URL
        path: '/peliculas',
        // NOMBRE
        name: 'peliculas',
    
        // SE ASIGNA LO QUE VA A MOSTRAR
        
        component: () => import( '@/views/Adm/Repeliculas.vue')
      },
      {
        // INDICADOR DE COMO SERA LA URL
        path: '/usuarios',
        // NOMBRE
        name: 'usuarios',
     
        // SE ASIGNA LO QUE VA A MOSTRAR
        component: () => import( '@/views/Adm/Reusuarios.vue')
      },
      {
        // INDICADOR DE COMO SERA LA URL
        path: '/compras',
        // NOMBRE
        name: 'compras',
    
        // SE ASIGNA LO QUE VA A MOSTRAR
        component: () => import('@/views/Adm/Recompras.vue')
      },
      {
        // INDICADOR DE COMO SERA LA URL
        path: '/rentas',
        // NOMBRE
        name: 'rentas',
    
        // SE ASIGNA LO QUE VA A MOSTRAR
        component: () => import('@/views/Adm/Rerentas.vue')
      },
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
