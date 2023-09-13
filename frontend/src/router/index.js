import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
// import authenticateUser from '@/services/authenticateUser';

const { cookies } = useCookies();
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter() {
      if(!cookies.get("tatty")) {
        router.push({name: "login"})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/programs',
    name: 'prgrams',
    component: () => import('../views/ProgramsView.vue'),
    
    },
  
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue')
  },
  {
    path: '/singleevent',
    name: 'singleevent',
    component: () => import('../views/SingleEventView.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import('../views/BookingsView.vue'),
    beforeEnter() {
      if (!cookies.get('Tatty')) {
        router.push({ name: 'login' })
      }
  },

},
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('../views/UserProfileView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
