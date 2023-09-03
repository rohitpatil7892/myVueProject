import allTutorials from "./components/allTutorials.vue"
import updateTutorial from "./components/updateTutorial.vue";
import deleteTutorial from "./components/deleteTutorial.vue"

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        name: 'Home',
        component: allTutorials,
        path: '/',
    },
    {
        name: 'UpdateTutorial',
        component: updateTutorial,
        path: '/update-tutorial/:id',
    },
    {
        name: 'DeleteTutorial',
        component: deleteTutorial,
        path: '/delete-tutorial/:id',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router