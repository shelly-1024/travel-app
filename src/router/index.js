//author: 陈一鸣
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/home.vue';
import Disc from '../views/disc.vue';
import Jour from '../views/jour.vue';
import Message from '../views/message.vue';
import My from '../views/my.vue';
import Error from '../views/404.vue';
import Start from '../views/Start.vue';

import Gtly from '../components/home/views/gentuanlvyou.vue';
import Hotel from '../components/home/views/hotel.vue';

import Welc from '../components/log&sign/components/logTabbar.vue';
import Search from '../components/home/views/search.vue';
import Zjj from '../components/home/views/afterSearch.vue';
import Zjjblq from '../components/home/views/zhangjiajie.vue';
import MyTravel from '../components/jour/views/myTravel.vue';
import Orders from '../components/my/views/orders.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
          showTabbar:true
        }
      },
      {
        path: '/disc',
        name: 'Disc',
        component: Disc,
        meta:{
          showTabbar:true
        }
      },
      {
        path: '/jour',
        name: 'Jour',
        component: Jour,
        meta:{
          showTabbar:true
        }
      },
      {
        path: '/message',
        name: 'Message',
        component: Message,
        meta:{
          showTabbar:true
        }
      },
      {
        path: '/my',
        name: 'My',
        component: My,
        meta:{
          showTabbar:true
        }
      },
      {
        path: '/gtly',
        name: 'Gtly',
        component: Gtly,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/',
        name: 'Welc',
        component: Welc,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/search',
        name: 'Search',
        component: Search,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/error',
        name: 'Error',
        component: Error,
      },
      {
        path: '/start',
        name: 'Start',
        component: Start,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/zjj',
        name: 'Zjj',
        component: Zjj,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/zjjblq',
        name: 'Zjjblq',
        component: Zjjblq,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/myTravel',
        name: 'MyTravel',
        component: MyTravel,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta:{
            showTabbar:false
        }
      },
      {
        path: '/hotel',
        name: 'Hotel',
        component: Hotel,
        meta:{
            showTabbar:false
        }
      },
    ],
  })
  
  export default router
  