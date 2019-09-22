import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from 'axios';
import VueCookies from 'vue-cookies';
import NavbarComponent from "./components/NavbarComponent";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.EventDispatcher = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.use(VueRouter);
Vue.use(VueCookies);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    components: {
        'navbar': NavbarComponent
    }
});
