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
    LAYER_NAME_CHANGE
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
            layer.status.dview = false;
        }
    },

    [LAYER_DVIEW_TOGGLE] (state, index) {
        const dview = state.all[index].status.dview;
        
        for (let layer of state.all) {
            if (!dview) {
                layer.status.view = false;
                layer.status.dview = false;
            }
            else {
                layer.status.view = true;
            }
        }
        state.all[index].status.view = true;
        state.all[index].status.dview = !dview;
    },

    [LAYER_LOCK_TOGGLE] (state, index) {
        state.all[index].status.lock
            = !state.all[index].status.lock;
    },

    [LAYER_SHOW_TOGGLE] (state, index) {
        state.all[index].status.layer
            = !state.all[index].status.layer;
    },

    [LAYER_PROPS_TOGGLE] (state, index) {
        state.all[index].status.props
            = !state.all[index].status.props;
    },

    [LAYER_PARENT_CHANGE] (state, index, parentid) {
        state.all[index].parentid = parentid;
    },

    [LAYER_NAME_CHANGE] (state, index, name) {
        state.all[index].name = name;
    },

};

export default {
    state,
    mutations
};
