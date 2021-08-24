import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Publications from "../views/Publications";
// import Publication from "../views/Publication";

const routes = [
 {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/trending',
        name: 'Trending',
        component: () => import(/* webpackChunkName: "about" */ '../views/Trending.vue')
    },{
        path: '/publications',
        name: 'Publications',
        component: () => import(/* webpackChunkName: "about" */ '../views/Publications.vue')
    },
    {
        path: '/publication/:p/:s',
        name: 'Publication',
        component: () => import(/* webpackChunkName: "about" */ '../views/Publication.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
