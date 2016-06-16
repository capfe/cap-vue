/**
 * @file vuex store
 * @author mj(zoumiaojiang@baidu.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger'
import keyframes from './modules/timeline/keyframes';
import project from './modules/project';

Vue.use(Vuex);
Vue.config.debug = true;
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        project,
        keyframes
    },

    strict: debug,
    middlewares: debug ? [createLogger()] : []
});