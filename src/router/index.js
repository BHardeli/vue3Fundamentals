import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "../home/HomePage"
import RobotBuilder from "../build/RobotBuilder.vue";
import ProductSearch from "../search/ProductSearch.vue";
import PartsInfo from "../parts/PartsInfo.vue";

export default createRouter({
    linkActiveClass: 'active-link',
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/build',
            name: 'Build',
            component: RobotBuilder
        },
        {
            path: '/search',
            name: 'Search',
            component: ProductSearch
        },
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartsInfo
        }
    ]
})