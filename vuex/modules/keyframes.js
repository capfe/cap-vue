
import {
    KEYFRAMES_FETCH,
    KEYFRAME_NEXT,
    KEYFRAME_PRE,
    KEYFRAME_ADD,
    KEYFRAME_REMOVE,
    KEYFRAME_EMPTY,
    KEYFRAME_VALUE_CHANGE
} from 'store/mutation-types' 

import project from './project';
import Vue from 'vue';
import { cloneObject } from 'lib/utils';


/**
 * state
 *
 * @type {Object}
 */
const state = {
    all: []
};


/**
 * mutations
 *
 * @type {Object}
 */
const mutations = {

    [KEYFRAMES_FETCH] (state, keyframes) {
        state.all = keyframes;
    },


    [KEYFRAME_NEXT] (state, layerid, prop) {
        const fi = project.state.common.frameIndex;
        for (let i = fi + 1, len = state.all.length; i <= len; i++) {
            if (state.all[i]
                && state.all[i][layerid]
                && state.all[i][layerid][prop]
            ) {
                project.state.common.frameIndex = i;
                break;
            }
        }
    },


    [KEYFRAME_PRE] (state, layerid, prop) {
        const fi = project.state.common.frameIndex;
        for (let i = fi - 1; i >= 0; i--) {
            if (state.all[i]
                && state.all[i][layerid]
                && state.all[i][layerid][prop]
            ) {
                project.state.common.frameIndex = i;
                break;
            }
        }
    },


    [KEYFRAME_REMOVE] (state, layerid, prop) {
        Vue.delete(state.all[project.state.common.frameIndex][layerid], prop);
    },


    [KEYFRAME_ADD] (state, keyframes) {
        state.all = keyframes;
    },


    [KEYFRAME_EMPTY] (state, layerid, prop) {
        const tf = project.state.common.totalFrame;
        for (let i = 0; i <= tf; i++) {
            state.all[i] && state.all[i][layerid] && Vue.delete(state.all[i][layerid], prop);
        }
    }
}


export default {
    state,
    mutations
};
