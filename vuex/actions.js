/**
 * @file actions
 * @author mj(zoumiaojiang@baidu.com)
 */

import project from './api/project';
import * as types from './mutation-types';

export const fetchProject = ({ dispatch }) => {
    project.fetchProject(project => {
        dispatch(types.FETCH_PROJECT, project);
    });
};
export const loopControl = ({ dispatch }) => dispatch(types.LOOP_CONTROL);
export const playControl = ({ dispatch }) => dispatch(types.PLAY_CONTROL);

// layer
export const fetchLayer = ({ dispatch }, index) => {
    project.fetchLayer(layer => {
        dispatch(types.FETCH_LAYER, layer);
    }, index);
};
export const setCurLayerId = ({ dispatch }, index) => dispatch(types.SET_CURRENT_LAYER_ID, index);

export const layerShowToggle = ({ dispatch }, index) => dispatch(types.LAYER_SHOW_TOGGLE, index);
export const viewToggle = ({ dispatch }, index) => dispatch(types.LAYER_VIEW_TOGGLE, index);
export const dviewToggle = ({ dispatch }, index) => dispatch(types.LAYER_DVIEW_TOGGLE, index);
export const lockToggle = ({ dispatch }, index) => dispatch(types.LAYER_LOCK_TOGGLE, index);
export const propsToggle = ({ dispatch }, index) => dispatch(types.LAYER_PROPS_TOGGLE, index);
export const parentChange = ({ dispatch }, index, value) => dispatch(types.LAYER_PARENT_CHANGE, index, value);
export const layernameChange = ({ dispatch }, index, value) => dispatch(types.LAYER_NAME_CHANGE, index, value);


// Tab
export const closeTab = ({ dispatch }, id) => dispatch(types.CLOSE_TAB, id);
export const changeTab = ({ dispatch }, id) => dispatch(types.CHANGE_TAB, id);



// keyframe

export const fetchKeyframes = ({ dispatch }) => {
    project.fetchKeyframes(keyframes => {
        dispatch(types.FETCH_KEYFRAMES, keyframes);
    });
};

export const nextKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.NEXT_KEYFRAME, layerid, prop);
export const preKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.PRE_KEYFRAME, layerid, prop);
export const previewOneFrame = ({ dispatch }, index) => dispatch(types.PREVIEW_ONE_FRAME, index);
export const addKeyframe = ({ dispatch }, layer, prop, value, key) => dispatch(types.ADD_KEYFRAME, layer, prop, value, key);
export const removeKeyframe = ({dispatch}, layerid, prop) => dispatch(types.REMOVE_KEYFRAME, layerid, prop);
export const emptyKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.EMPTY_KEYFRAME, layerid, prop);


// PROP
export const propValueChange = ({ dispatch }, value, layerid, prop, key) => {
        dispatch(types.PROP_VALUE_CHANGE, value, layerid, prop, key);
}
