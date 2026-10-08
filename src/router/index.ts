import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/inicio' },
  { path: '/inicio', component: () => import('@/views/HomeView.vue') },
  { path: '/projetos', component: () => import('@/views/ProjectsView.vue') },
  { path: '/projetos/:id', component: () => import('@/views/ProjectDetailView.vue') },
  { path: '/sobre', component: () => import('@/views/AboutView.vue') },
  { path: '/habilidades', component: () => import('@/views/SkillsView.vue') },
  { path: '/contato', component: () => import('@/views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundView.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
