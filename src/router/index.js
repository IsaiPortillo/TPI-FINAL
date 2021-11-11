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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/peliculas',
    // NOMBRE
    name: 'peliculas',

    // SE ASIGNA LO QUE VA A MOSTRAR
    
    component: () => import( '../views/Admin/Repeliculas.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/pelicula',
    // NOMBRE
    name: 'pelicula',

    // SE ASIGNA LO QUE VA A MOSTRAR
    
    component: () => import( '../views/Admin/Agrepelicula.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/usuarios',
    // NOMBRE
    name: 'usuarios',
 
    // SE ASIGNA LO QUE VA A MOSTRAR
    component: () => import( '../views/Admin/Reusuarios.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/usuario',
    // NOMBRE
    name: 'usuario',
 
    // SE ASIGNA LO QUE VA A MOSTRAR
    component: () => import( '../views/Admin/Agreusuario.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/compras',
    // NOMBRE
    name: 'compras',

    // SE ASIGNA LO QUE VA A MOSTRAR
    
    component: () => import('../views/Admin/Recompras.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/rentas',
    // NOMBRE
    name: 'rentas',

    
    // SE ASIGNA LO QUE VA A MOSTRAR
    component: () => import('../views/Admin/Rerentas.vue')
  },

  {
    // INDICADOR DE COMO SERA LA URL
    path: '/admin',
    // NOMBRE
    name: 'admin',

    
    // SE ASIGNA LO QUE VA A MOSTRAR
    component: () => import('../views/Admin/Admin.vue'),
    children: [
      {
        // INDICADOR DE COMO SERA LA URL
        path: '/compras',
        // NOMBRE
        name: 'compras',
    
        // SE ASIGNA LO QUE VA A MOSTRAR
        
        component: () => import('../views/Admin/Recompras.vue')
      },
      {
        // INDICADOR DE COMO SERA LA URL
        path: '/rentas',
        // NOMBRE
        name: 'rentas',
    
        
        // SE ASIGNA LO QUE VA A MOSTRAR
        component: () => import('../views/Admin/Rerentas.vue')
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
