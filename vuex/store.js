/**
 * @file vuex store
 * @author mj(zoumiaojiang@gmail.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger'
import keyframes from './modules/keyframes';
import base from './modules/base';
import project from './modules/project';
import statics from './modules/statics';
import layers from './modules/layers';

Vue.use(Vuex);
Vue.config.debug = true;
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        base,
        project,
        keyframes,
        statics,
        layers
    },

    strict: debug,
    middlewares: debug ? [createLogger()] : []
});