import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import auth from "@/middleware/auth";
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
    path: '/History',
    name: 'Historial',
    meta: {
      middleware: auth,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Historial.vue')
  },
  {
    // INDICADOR DE COMO SERA LA URL
    path: '/admin',
    // NOMBRE
    name: 'admin',
    meta: {
      middleware: auth,
    },

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

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
