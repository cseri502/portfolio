import { createApp, ref } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import ModelDetails from './views/ModelDetails.vue';
import ProjectDetails from './views/ProjectDetails.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', component: ProjectDetails },
    { path: '/models/:id', component: ModelDetails },
];

const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
    },
});

const currentLanguage = ref('en');

const app = createApp(App);
app.provide('language', currentLanguage);
app.use(router);
app.mount('#app');
