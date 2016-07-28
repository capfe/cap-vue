
import {
    PROJECT_FETCH,
    KEYFRAME_FETCH,
    CONTROL_LOOP,
    CONTROL_PLAY,
    TAB_CHANGE,
    TAB_CLOSE
} from 'store/mutation-types';
import Vue from 'vue';



const state = {
    common: {},
    tabs: [],
    id: ''
};



const mutations = {

    [PROJECT_FETCH] (state, data) {
        state.common = data.project;
        state.tabs = data.tabs;
        for (let tab of state.tabs) {
            if (tab.focus) {
                state.id = tab.id;
            }
        }
    },

    [KEYFRAME_FETCH] (state, index) {
        state.common.frameIndex = index;
    },

    [CONTROL_LOOP] (state) {
        if (typeof state.common.loop == 'undefined') {
            Vue.set(state.common, 'loop', true);
        }
        else {
            state.common.loop = !state.common.loop;
        }
    },

    [CONTROL_PLAY] (state) {
        if (typeof state.common.pause == 'undefined') {
            Vue.set(state.common, 'pause', true);
        }
        else {
            state.common.pause = !state.common.pause;
        }
    },

    [TAB_CHANGE] (state, project) {
        state.common = project;
        state.id = project._id;
        for (let tab of state.tabs) {
            tab.focus = false;
            if (tab.id == state.id) {
                tab.focus = true;
            }
        }
    },

    [TAB_CLOSE] (state, index) {
        state.tabs[index].show = false;
    }
};

export default {
    state,
    mutations
};
