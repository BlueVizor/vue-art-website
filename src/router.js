import { createRouter, createWebHistory } from 'vue-router';
import Contact from './pages/Contact.vue';
import Request from './pages/Request.vue';
import About from './pages/About.vue';
import Main from './pages/Main.vue';
import Add_Art from './pages/Add_Art.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/request', component: Request },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/add', component: Add_Art },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
