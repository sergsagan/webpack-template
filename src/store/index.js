import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import example from './example';
import date from './date';

export default new Vuex.Store({
    modules: {
        example,
        date
    }
})