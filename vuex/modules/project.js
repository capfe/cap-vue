
import {
    FETCH_PROJECT,
    LAYER_VIEW_TOGGLE,
    LAYER_DVIEW_TOGGLE,
    LAYER_LOCK_TOGGLE,
    LAYER_SHOW_TOGGLE,
    LAYER_PROPS_TOGGLE,
    LAYER_PARENT_CHANGE,
    LAYER_NAME_CHANGE,
    PREVIEW_ONE_FRAME,
    LOOP_CONTROL,
    PLAY_CONTROL
} from 'store/mutation-types';
import Vue from 'vue';



const state = {
    common: {}
};



const mutations = {
    [FETCH_PROJECT] (state, project) {
        state.common = project;
    },

    [LAYER_VIEW_TOGGLE] (state, index) {
        state.common.layers[index].status.view
            = !state.common.layers[index].status.view;
        for (let layer of state.common.layers) {
            layer.status.dview = false;
        }
    },

    [LAYER_DVIEW_TOGGLE] (state, index) {
        const dview = state.common.layers[index].status.dview;
        
        for (let layer of state.common.layers) {
            if (!dview) {
                layer.status.view = false;
                layer.status.dview = false;
            }
            else {
                layer.status.view = true;
            }
        }
        state.common.layers[index].status.view = true;
        state.common.layers[index].status.dview = !dview;
    },

    [LAYER_LOCK_TOGGLE] (state, index) {
        state.common.layers[index].status.lock
            = !state.common.layers[index].status.lock;
    },

    [LAYER_SHOW_TOGGLE] (state, index) {
        state.common.layers[index].status.layer
            = !state.common.layers[index].status.layer;
    },

    [LAYER_PROPS_TOGGLE] (state, index) {
        state.common.layers[index].status.props
            = !state.common.layers[index].status.props;
    },

    [LAYER_PARENT_CHANGE] (state, index, parentid) {
        state.common.layers[index].parentid = parentid;
    },

    [LAYER_NAME_CHANGE] (state, index, name) {
        state.common.layers[index].name = name;
    },

    [PREVIEW_ONE_FRAME] (state, index) {
        state.common.frameIndex = index;
    },

    [LOOP_CONTROL] (state) {
        if (typeof state.common.loop == 'undefined') {
            Vue.set(state.common, 'loop', true);
        }
        else {
            state.common.loop = !state.common.loop;
        }
    },

    [PLAY_CONTROL] (state) {
        if (typeof state.common.pause == 'undefined') {
            Vue.set(state.common, 'pause', true);
        }
        else {
            state.common.pause = !state.common.pause;
        }
    }
};

export default {
    state,
    mutations
};
