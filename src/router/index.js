import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
//lazyloading
  {
    path: '/contacto',
    name: 'Contacto',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
   {//lazyloading
    path: '/',
    name: 'Home',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },

  {
    path: '/probando/:intentoInicial',
    name: 'Probando',
    component: () => import(/* webpackChunkName: "probando" */ '../views/Probando.vue'),
    
  },

  {
    path: '/post/:entrada',
    name: 'Post',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),

    children: [
      {
        path: "Mensajes",
        name: "Mensajes",
        component: () =>
          import(
            /* webpackChunkName: "comentarios" */ "../components/Mensaje.vue"
          ),
      },
    ],
  },
  {
    path: '/',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
