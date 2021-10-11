import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue";
// import Publication from "../views/Publication";

const routes = [
    {
        path: '/home',
        name: 'Home',
        show: true,
        component: Home
    }, {
        path: '/publications',
        name: 'Publications',
        show: true,
        component: () => import(/* webpackChunkName: "Publications" */ '../views/Publications.vue')
    }, {
        path: '/publication/:p(.*)',
        name: 'Publication',
        show: false,
        component: () => import(/* webpackChunkName: "Publication" */ '../views/Publication.vue')
    }, {
        path: '/authors',
        name: 'Authors',
        show: true,
        component: () => import(/* webpackChunkName: "Authors" */ '../views/Authors.vue')
    }, {
        path: '/author/:id',
        name: 'Author',
        show: false,
        component: () => import(/* webpackChunkName: "Author" */ '../views/Author.vue')
    }, {
        path: '/fieldsOfStudy',
        name: 'Fields of Study',
        show: true,
        component: () => import(/* webpackChunkName: "FieldsOfStudy" */ '../views/FieldsOfScience')
    }, {
        path: '/fieldOfStudy/:id',
        name: 'Field of Study',
        show: false,
        component: () => import(/* webpackChunkName: "FieldsOfStudy" */ '../views/FieldOfStudy')
    }, {
        path: '/about',
        name: 'About',
        show: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
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
