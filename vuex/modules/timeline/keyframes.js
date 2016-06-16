
import {
    FETCH_KEYFRAMES,
    NEXT_KEYFRAME,
    PRE_KEYFRAME,
    ADD_KEYFRAME,
    REMOVE_KEYFRAME,
    EMPTY_KEYFRAME,
    PROP_VALUE_CHANGE
} from 'store/mutation-types' 

import project from '../project';
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

    [FETCH_KEYFRAMES] (state, keyframes) {
        state.all = keyframes;
    },


    [NEXT_KEYFRAME] (state, layerid, prop) {
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


    [PRE_KEYFRAME] (state, layerid, prop) {
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


    [REMOVE_KEYFRAME] (state, layerid, prop) {
        Vue.delete(state.all[project.state.common.frameIndex][layerid], prop);
    },


    [ADD_KEYFRAME] (state, layer, prop, value, key) {
        const fi = project.state.common.frameIndex;
        const layerid = layer.id;
        const kfs = state.all;

        let defaultKeyframe = Object.assign(
            {},
            {
                type: 1,
                status: 0,
                index: fi
            },
            layer[prop]
        );

        for (let i = fi; i >= 0; i--) {
            if (kfs[i] && kfs[i][layerid] && kfs[i][layerid][prop]) {
                const propObj = {
                    index: fi
                };

                //  TODO: 需要更灵活
                if (value) {
                    if (key) {
                        propObj[key] = {
                            value,
                            fx: 'liner'
                        }
                    }
                    else {
                        propObj.value = value;
                        propObj.fx = 'liner';
                    }
                }

                defaultKeyframe = Object.assign(
                    {},
                    cloneObject(kfs[i][layerid][prop]),
                    propObj
                );
                break;
            }
        }

        if (kfs[fi]) {
            // if is a diffrent new layer
            if (!kfs[fi][layerid]) {
                const propData = {};
                Vue.set(propData, prop, defaultKeyframe);
                Vue.set(state.all[fi], layerid, propData);
            }
            else {
                Vue.set(state.all[fi][layerid], prop, defaultKeyframe);
            }
        }
        else {
            const keyframe = {};
            keyframe[layerid] = {};
            keyframe[layerid][prop] = defaultKeyframe;
            state.all.$set(fi, keyframe);
        }
    },


    [EMPTY_KEYFRAME] (state, layerid, prop) {
        const tf = project.state.common.totalFrame;
        for (let i = 0; i <= tf; i++) {
            state.all[i] && state.all[i][layerid] && Vue.delete(state.all[i][layerid], prop);
        }
    },

    [PROP_VALUE_CHANGE] (state, value, layerid, prop, key) {
        const fi = project.state.common.frameIndex;
        if (key) {
            state.all[fi][layerid][prop][key].value = value;
        }
        else {
            state.all[fi][layerid][prop].value = value;
        }
    }
}


export default {
    state,
    mutations
};
