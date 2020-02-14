import './js/common'

window.Vue = require('vue');

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default);
import store from './store/index';

// Vue init
const app = new Vue({
    data() {
        return {
            component: false
        }
    },
    store,
    el: '#app'
});