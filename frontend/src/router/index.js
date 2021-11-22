import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: '/',
        label: 'Home',
        name: 'home',
        show: true,
        component: Home
    }, {
        path: '/covid',
        label: 'COVID-19',
        name: 'covid',
        show: true,
        component: () => import(/* webpackChunkName: "CovidPapers" */ '../views/CovidPapers.vue')
    },{
        path: '/publications',
        label: 'Publications',
        name: 'publications',
        show: true,
        component: () => import(/* webpackChunkName: "Publications" */ '../views/Publications.vue')
    }, {
        path: '/publication/:p(.*)',
        label: 'Publication',
        name: 'publication',
        show: false,
        component: () => import(/* webpackChunkName: "Publication" */ '../views/Publication.vue')
    }, {
        path: '/authors',
        label: 'Authors',
        name: 'authors',
        show: true,
        component: () => import(/* webpackChunkName: "Authors" */ '../views/Authors.vue')
    }, {
        path: '/author/:id',
        label: 'Author',
        name: 'author',
        show: false,
        component: () => import(/* webpackChunkName: "Author" */ '../views/Author.vue')
    }, {
        path: '/fieldsOfStudy',
        label: 'Fields of Study',
        name: 'fieldsOfStudy',
        show: true,
        component: () => import(/* webpackChunkName: "FieldsOfStudy" */ '../views/FieldsOfStudy')
    }, {
        path: '/fieldOfStudy/:id',
        label: 'Field of Study',
        name: 'fieldOfStudy',
        show: false,
        component: () => import(/* webpackChunkName: "FieldsOfStudy" */ '../views/FieldOfStudy')
    }, {
        path: '/about',
        label: 'About',
        name: 'about',
        show: true,
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
    }, {
        path: '/:pathMatch(.*)*',
        label: 'NotFound',
        name: 'notFound',
        show: false,
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (from.query.time && !to.query.time) {
        next({path: to.path, query: {time: from.query.time}})
    }
    next();
});

export default router
