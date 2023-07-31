import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddPage from './components/AddPage.vue'
import UpdatePage from './components/UpdatePage.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login',
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/addpage',
    },
    {
        name: 'UpdatePage',
        component: UpdatePage,
        path: "/updatepage/:id",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;