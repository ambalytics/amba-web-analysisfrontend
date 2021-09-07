import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue";
// import Publication from "../views/Publication";

const routes = [
 {
        path: '/',
        name: 'Home',
        show: true,
        component: Home
    },
    {
        path: '/trending',
        name: 'Trending',
        show: false,
        component: () => import(/* webpackChunkName: "about" */ '../views/Trending.vue')
    },{
        path: '/publications',
        name: 'Publications',
        show: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/Publications.vue')
    },
    {
        path: '/publication/:p/:s',
        name: 'Publication',
        show: false,
        component: () => import(/* webpackChunkName: "about" */ '../views/Publication.vue')
    },
    {
        path: '/about',
        name: 'About',
        show: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },{
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        show: false,
        component: NotFound
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
