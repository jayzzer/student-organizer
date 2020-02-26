import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "./components/Login";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import Teacher from "./components/Teacher";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/favorite', component: Favorite},
        {path: '/search', component: Search},
        {path: '/teacher', component: Teacher}
    ]
});