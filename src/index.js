// js
import './js/common'
import store from './store/index';

// scss
import './assets/scss/main.scss'

// vue.js
window.Vue = require('vue');

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default);

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