import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './routes';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
