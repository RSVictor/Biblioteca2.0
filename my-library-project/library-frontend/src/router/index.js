import { createRouter, createWebHistory } from 'vue-router'; 
import Home from '../views/HomePage.vue'; 

const routes = [
  {
    path: '/HomePage',
    name: 'homePage',
    component: Home,
  },
  {
  path: '/login',
  name: 'login',
  component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/:catchAll(.*)', 
    redirect: '/login', 
  },
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Proteção das rotas
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/'); // Redireciona para a página inicial
  } else {
    next();
  }
});

export default router;
