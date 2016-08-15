/**
 * @file 图层管理
 * @author mj(zoumiaojiang@gmail.com)
 */

import {
    LAYERS_FETCH,
    LAYER_ADD,
    LAYER_VIEW_TOGGLE,
    LAYER_DVIEW_TOGGLE,
    LAYER_LOCK_TOGGLE,
    LAYER_SHOW_TOGGLE,
    LAYER_PROPS_TOGGLE,
    LAYER_PARENT_CHANGE,
    LAYER_NAME_CHANGE,
    LAYER_UPDATE
} from 'store/mutation-types';
import Vue from 'vue';



const state = {
    all: []
};



const mutations = {

    [LAYERS_FETCH] (state, layers) {
        state.all = layers;
    },

    [LAYER_ADD] (state, layers) {
        state.all = layers;
    },

    [LAYER_VIEW_TOGGLE] (state, index) {
        state.all[index].status.view
            = !state.all[index].status.view;
        for (let layer of state.all) {
            layer.statusDview = false;
        }
    },

    [LAYER_DVIEW_TOGGLE] (state, index) {
        const dview = state.all[index].statusDview;

        for (let layer of state.all) {
            if (!dview) {
                layer.statusView = false;
                layer.statusDview = false;
            }
            else {
                layer.statusView = true;
            }
        }
        state.all[index].statusView = true;
        state.all[index].statusDview = !dview;
    },

    [LAYER_LOCK_TOGGLE] (state, index) {
        state.all[index].statusLock
            = !state.all[index].statusLock;
    },

    [LAYER_SHOW_TOGGLE] (state, index) {
        state.all[index].statusLayer
            = !state.all[index].statusLayer;
    },

    [LAYER_PROPS_TOGGLE] (state, index) {
        state.all[index].statusProp
            = !state.all[index].statusProp;
    },

    [LAYER_PARENT_CHANGE] (state, index, parentid) {
        state.all[index].parentid = parentid;
    },

    [LAYER_NAME_CHANGE] (state, index, name) {
        state.all[index].name = name;
    },

    [LAYER_UPDATE] (state, layers) {
        state.all = layers;
    },
};

export default {
    state,
    mutations
};
