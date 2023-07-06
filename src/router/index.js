import { createRouter, createWebHistory } from 'vue-router';

import Photo from '../components/WPhoto.vue';
import Cuaca from '../components/WCuaca.vue';
import Lokasi from '../components/WLokasi.vue';
import Stopwatch from '../components/WStopwatch.vue';


const routes = [
  { path: '/', component: Stopwatch},
  { path: '/WPhoto', component: Photo},
  { path: '/WCuaca', component: Cuaca},
  { path: '/WLokasi', component: Lokasi},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;