import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
// import CategorySetting from '@/C'
import CategorySetting from '@/views/CategorySetting.vue';
import LotterySetting from '@/views/LotterySetting.vue';
import TargetCustomer from '@/views/TargetCustomer.vue';
import Error from '@/views/Error.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: CategorySetting,
		},
		{
			path: '/lottery',
			name: 'lottery',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: LotterySetting,
		},
		{
			path: '/targetCustomer',
			name: 'target customer',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: TargetCustomer,
		},
		{
			path: '/:catchAll(.*)',
			component: Error,
		},
	],
});

export default router;
