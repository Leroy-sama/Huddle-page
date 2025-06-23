import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
			meta: {
				title: "Home",
			},
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../pages/AboutPage.vue"),
			meta: {
				title: "About",
			},
		},
		{
			path: "/courses",
			name: "courses",
			component: () => import("../pages/CoursesPage.vue"),
			meta: {
				title: "Courses",
			},
		},
		{
			path: "/courses/:slug",
			name: "Course Details",
			component: () => import("../pages/CourseDetails.vue"),
			props: true,
			meta: {
				title: `Course Details`,
			},
		},
		{
			path: "/shop",
			name: "shop",
			component: () => import("../pages/ShopPage.vue"),
			meta: {
				title: "Shop",
			},
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../pages/ContactPage.vue"),
			meta: {
				title: "Contact",
			},
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | FuzuRobotics`;
	next();
});

export default router;
