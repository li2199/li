import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    }
  },

  {
    path: '/Add',
    name: 'Add',
    component: () => import('@/views/Add.vue')
  },
  {
    path: '/Meg',
    name: 'Meg',
    component: () => import('@/views/Meg.vue')
  },
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/My.vue'),
  },
  {
    path: '/Collection',
    name: 'Collection',
    component: () => import('@/views/Collection.vue')
  },
  {
    path: '/Peo',
    name: 'Peo',
    component: () => import('@/views/Peo.vue')
  },
  {
    path: '/Merchant',
    name: 'Merchant',
    component: () => import('@/views/Merchant.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import('@/views/Map.vue')
  },

  {
    path: '/Phonelogin',
    name: 'Phonelogin',
    component: () => import('@/views/Phonelogin.vue'),

  },
  {
    path: '/Phonelogin/Reg',
    name: 'Reg',
    component: () => import('@/views/Reg.vue')
  },

  {
    path: '/Reg/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Attention',
    name: 'Attention',
    component: () => import('@/views/Attention.vue')
  },
  {
    path: '/Kabao',
    name: 'Kabao',
    component: () => import('@/views/Kabao.vue')
  },
  {
    path: '/Kajuan',
    name: 'Kajuan',
    component: () => import('@/views/Kajuan.vue')
  },
  {
    path: '/Wallet',
    name: '/Wallet',
    component: () => import('@/views/Wallet.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/Caogao',
    name: 'Caogao',
    component: () => import('@/views/Caogao.vue')
  },

]

 const router = new VueRouter({
  routes
 })
router.beforeEach((to, from, next) => {
  let go = ['/Phonelogin', '/Phonelogin/Reg', '/Map', '/', '/Reg/Login','/Attention']
  
  if (go.indexOf(to.path) != -1||sessionStorage.getItem('user')) {
    next();
  } else {
    alert('请登录')
    next('/Phonelogin')
  }


}

);
export default router


