/**
 * @file 静态资源相关vuex
 * @author mj(zoumiaojiang@baidu.com)
 */

import Vue from 'vue';
import {
    STATICS_FETCH,
    STATIC_FOLD_TOGGLE,
    STATIC_FILE_ADD,
    STATIC_FOLD_ADD,
    STATIC_FOCUS,
    STATIC_BLUR,
    STATIC_HIGHLIGHT,
    STATIC_UPDATE
} from 'store/mutation-types';



const state = {
    files: [],
    folds: [],
    preview: {}
};



const mutations = {
    [STATICS_FETCH] (state, params) {

        const files = params.files;
        const folds = params.folds;
        state.files = files;
        state.folds = folds;
        if (files[0]) {
            state.preview = files[0];
        }
    },

    [STATIC_FOLD_TOGGLE] (stata, params) {
        const foldid = params.foldid;
        for (let item of state.folds) {
            if (item._id === foldid) {
                item.open = !item.open;
                break;
            }
        }
    },

    [STATIC_FILE_ADD] (state, params) {
        const file = params.file;
        state.files.$set(state.files.length, file);
    },

    [STATIC_FOLD_ADD] (state, params) {
        const fold = params.fold;
        state.folds.$set(state.folds.length, fold);
    },

    [STATIC_FOCUS] (state, params) {
        const type = params.type || '';
        const field = 'focus';
        const index = params.index;
        for (let item of state.folds) {
            Vue.set(item, field, false);
        }
        for (let item of state.files) {
            Vue.set(item, field, false);
        }
        if (params.type === 'fold') {
            state.folds[index][field] = true;
        }
        else {
            state.files[index][field] = true;
        }
    },

    [STATIC_BLUR] (state, params) {
        const type = params.type || '';
        const field = 'focus';
        const index = params.index;
        if (params.type === 'fold') {
            state.folds[index][field] = false;
        }
        else {
            state.files[index][field] = false;
        }
    },

    [STATIC_HIGHLIGHT] (state, params) {
        const type = params.type || '';
        const field = 'highlight';
        const index = params.index;
        for (let item of state.folds) {
            Vue.set(item, field, false);
        }
        for (let item of state.files) {
            Vue.set(item, field, false);
        }
        if (params.type === 'fold') {
            state.folds[index][field] = true;
        }
        else {
            state.files[index][field] = true;
            state.preview = state.files[index];
        }
    },

    [STATIC_UPDATE] (state, params) {
        if (params.type == 'fold') {
            state.folds[params.index][params.field] = params.value;
        }
        else {
            state.files[params.index][params.field] = params.value;
        }
    }
};

export default {
    state,
    mutations
};
