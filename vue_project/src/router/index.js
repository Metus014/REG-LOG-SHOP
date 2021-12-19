import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login.vue'
import reg from '../components/reg.vue'
import shop from '../components/shop.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/reg',
        name: 'reg',
        component: reg
    },
    {
        path: '/shop',
        name: 'shop',
        component: shop
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router