import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import example1 from './example1';
import example2 from './example2';

export default new Vuex.Store({
    modules: {
        example1,
        example2
    }
})