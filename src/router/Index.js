import { createRouter, createWebHistory } from "vue-router";
import Cadastro from '../views/CadastroView.vue'
import Login from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import Dash from '../views/DashBoard.vue'
import Ossos from '../views/OssosView.vue'
import Musculos from '../views/MusculosView.vue'
import Coracao from '../views/CoracaoView.vue'

const routes = [
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dash',
        name: 'Dash',
        component: Dash
    },
    {
        path: '/ossos',
        name: 'Ossos',
        component: Ossos
    },
    {
        path: '/musculos',
        name: 'Musculos',
        component: Musculos
    },
    {
        path: '/coracao',
        name: 'Coracao',
        component: Coracao
    },
]

    const router = createRouter ({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    export default router