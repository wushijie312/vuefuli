import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Find from '@/pages/Find/Find'
import Order from '@/pages/Order/Order'
import My from '@/pages/My/My'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/find',
            name: 'find',
            component: Find
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/my',
            name: 'my',
            component: My
        },
    ]
})
