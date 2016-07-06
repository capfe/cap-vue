/**
 * @file actions
 * @author mj(zoumiaojiang@baidu.com)
 */

import project from './api/project';
import statics from './api/statics';
import * as types from './mutation-types';


export const fetchProject = ({ dispatch }) => {
    project.fetchProject(project => {
        const files = project.files;
        const folds = project.folds;
        dispatch(types.PROJECT_FETCH, project);
        dispatch(types.KEYFRAMES_FETCH, project.keyframes);
        dispatch(types.STATICS_FETCH, { files, folds });
    });
};
export const loopControl = ({ dispatch }) => dispatch(types.CONTROL_LOOP);
export const playControl = ({ dispatch }) => dispatch(types.CONTROL_PLAY);

export const staticFoldToggle = ({ dispatch }, params) => dispatch(types.STATIC_FOLD_TOGGLE, params);
export const staticFileAdd = ({ dispatch }, params) => dispatch(types.STATIC_FILE_ADD, params);
export const staticFoldAdd = ({ dispatch }) => {
    statics.addFold(fold => {
        dispatch(types.STATIC_FOLD_ADD, { fold });
    });
}
export const staticFocus = ({ dispatch }, params) => dispatch(types.STATIC_FOCUS, params);
export const staticBlur = ({ dispatch }, params) => dispatch(types.STATIC_BLUR, params);
export const staticHighlight = ({ dispatch }, params) => dispatch(types.STATIC_HIGHLIGHT, params);
export const staticUpdate = ({ dispatch }, params) => {
    statics.update(params, () => {
        dispatch(types.STATIC_UPDATE, params);
    });
}


// layer
export const addLayer = ({ dispatch }) => dispatch(types.LAYER_ADD);
export const removeLayer = ({ dispatch }, id) => dispatch(types.LAYER_REMOVE, id);
export const layerShowToggle = ({ dispatch }, index) => dispatch(types.LAYER_SHOW_TOGGLE, index);
export const viewToggle = ({ dispatch }, index) => dispatch(types.LAYER_VIEW_TOGGLE, index);
export const dviewToggle = ({ dispatch }, index) => dispatch(types.LAYER_DVIEW_TOGGLE, index);
export const lockToggle = ({ dispatch }, index) => dispatch(types.LAYER_LOCK_TOGGLE, index);
export const propsToggle = ({ dispatch }, index) => dispatch(types.LAYER_PROPS_TOGGLE, index);
export const parentChange = ({ dispatch }, index, value) => dispatch(types.LAYER_PARENT_CHANGE, index, value);
export const layernameChange = ({ dispatch }, index, value) => dispatch(types.LAYER_NAME_CHANGE, index, value);


// Tab
export const addTab = ({ dispatch }) => dispatch(types.TAB_ADD);
export const closeTab = ({ dispatch }, index) => dispatch(types.TAB_CLOSE, index);
export const changeTab = ({ dispatch }, id) => {
    project.fetchProjectById(id, data => {
        dispatch(types.TAB_CHANGE, id, data.project);
        dispatch(types.KEYFRAMES_FETCH, data.keyframes);
    });
}

// keyframes
export const nextKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.KEYFRAME_NEXT, layerid, prop);
export const preKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.KEYFRAME_PRE, layerid, prop);
export const previewOneFrame = ({ dispatch }, index) => dispatch(types.KEYFRAME_FETCH, index);
export const addKeyframe = ({ dispatch }, layer, prop, value, key) => dispatch(types.KEYFRAME_ADD, layer, prop, value, key);
export const removeKeyframe = ({dispatch}, layerid, prop) => dispatch(types.KEYFRAME_REMOVE, layerid, prop);
export const emptyKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.KEYFRAME_EMPTY, layerid, prop);


// PROP
export const propValueChange = ({ dispatch }, value, layerid, prop, key) => {
    dispatch(types.KEYFRAME_VALUE_CHANGE, value, layerid, prop, key);
}