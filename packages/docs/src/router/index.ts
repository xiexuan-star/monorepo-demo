import { useDocTitle } from '../hooks';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// $__AUTO_ROUTER 由auto-router-plugin生成的路由参数, 详情见plugins/auto-router-plugin
const routes: RouteRecordRaw[] = $__AUTO_ROUTER;

export { routes };

const router = createRouter({
	history: createWebHashHistory(''),
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.matched.every((record, i) => from.matched[i] !== record)) {
			return { left: 0, top: 0 };
		}
		return false;
	},
	routes
});

const { setDocTitle } = useDocTitle();
router.beforeEach((to, from, next) => {
	if (to.path === '/') {
		const firstRoute = router.options.routes?.[0]?.path;
		return next(firstRoute);
	}
	setDocTitle(`文档:${to.meta?.title || (to.name as string)}`);
	next();
});

export default router;
