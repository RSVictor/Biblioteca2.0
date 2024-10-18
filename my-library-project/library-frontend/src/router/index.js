import { createRouter, createWebHistory } from 'vue-router'; 
import Login from '../views/Login.vue'; 
import Dashboard from '../views/Dashboard.vue'; 
import PaginaEmprestimo from '../components/paginaemprestimo.vue'; 
import PaginaFavoritos from '../components/paginaFavoritos.vue'; 
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path:'/pagina-favorito',
    name: 'PaginaFavoritos',
    component: PaginaFavoritos,
  },
  {
    path: '/pagina-emprestimo', // Rota para a página de empréstimo
    name: 'PaginaEmprestimo',
    component: PaginaEmprestimo,
  },
  {
    path: '/:catchAll(.*)', // Usando a nova sintaxe para rotas coringa
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
