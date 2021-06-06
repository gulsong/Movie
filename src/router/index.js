import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

const routes = [
    movieRouter, cinemaRouter, mineRouter,
    {
        path: '/:pathMatch(.*)',
        redirect: '/movie'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router