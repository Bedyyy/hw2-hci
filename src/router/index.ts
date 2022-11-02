import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabBar from '../views/TabBar.vue'
import HomePage from '../views/HomePage.vue'
import PageSecond from '../views/Page2.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabBar,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'page2',
        component: PageSecond
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router