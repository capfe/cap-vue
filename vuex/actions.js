/**
 * @file actions
 * @author mj(zoumiaojiang@gmail.com)
 */

import project from './api/project';
import statics from './api/statics';
import layers from './api/layers';
import keyframes from './api/keyframes';
import * as types from './mutation-types';

export const clickBlur = ({ dispatch }) => {
    dispatch(types.STATIC_STATUS_CLEAR);
}
export const fetchProject = ({ dispatch }) => {
    project.fetchProject(project => {
        dispatch(types.PROJECT_FETCH, project);
        dispatch(types.LAYERS_FETCH, project.layers);
        dispatch(types.KEYFRAMES_FETCH, project.keyframes);
        dispatch(types.STATICS_FETCH, project.statics);
    });
};
export const loopControl = ({ dispatch }) => dispatch(types.CONTROL_LOOP);
export const playControl = ({ dispatch }) => dispatch(types.CONTROL_PLAY);

export const staticFoldToggle = ({ dispatch }, params) => {
    statics.update(params, () => {
        dispatch(types.STATIC_FOLD_TOGGLE, params);
    });
}
export const staticFileAdd = ({ dispatch }, params) => dispatch(types.STATIC_FILE_ADD, params);
export const staticFoldAdd = ({ dispatch }, params) => {
    statics.addFold(params, statics => {
        dispatch(types.STATIC_FOLD_ADD, { statics });
    });
}
export const staticRemove = ({ dispatch }, params) => {
    statics.remove(params, statics => {
        dispatch(types.STATIC_REMOVE, statics);
    });
}
export const staticFocus = ({ dispatch }, params) => dispatch(types.STATIC_FOCUS, params);
export const staticBlur = ({ dispatch }, params) => dispatch(types.STATIC_BLUR, params);
export const staticHighlight = ({ dispatch }, params) => dispatch(types.STATIC_HIGHLIGHT, params);
export const staticUpdate = ({ dispatch }, params) => {
    statics.update(params, (data) => {
        dispatch(types.STATIC_UPDATE, data);
    });
}

// layer
export const addLayer = ({ dispatch }, params) => {
    layers.add(params, layers => {
        dispatch(types.LAYER_ADD, layers);
    });
};
export const removeLayer = ({ dispatch }, id) => dispatch(types.LAYER_REMOVE, id);
export const layerShowToggle = ({ dispatch }, params) => {
    layers.update(params, data => {
        dispatch(types.LAYER_SHOW_TOGGLE, params.index);
    });
}
export const propsShowToggle = ({ dispatch }, params) => {
    layers.update(params, data => {
        dispatch(types.LAYER_PROPS_TOGGLE, params.index);
    });
}
export const viewToggle = ({ dispatch }, index) => dispatch(types.LAYER_VIEW_TOGGLE, index);
export const dviewToggle = ({ dispatch }, index) => dispatch(types.LAYER_DVIEW_TOGGLE, index);
export const lockToggle = ({ dispatch }, index) => dispatch(types.LAYER_LOCK_TOGGLE, index);
export const parentChange = ({ dispatch }, index, value) => dispatch(types.LAYER_PARENT_CHANGE, index, value);
export const layernameChange = ({ dispatch }, index, value) => dispatch(types.LAYER_NAME_CHANGE, index, value);


// Tab
export const addTab = ({ dispatch }) => dispatch(types.TAB_ADD);
export const closeTab = ({ dispatch }, index) => dispatch(types.TAB_CLOSE, index);
export const changeTab = ({ dispatch }, id) => {
    project.fetchProjectById(id, data => {
        dispatch(types.TAB_CHANGE, data.project);
        dispatch(types.LAYERS_FETCH, data.layers);
        dispatch(types.KEYFRAMES_FETCH, data.keyframes);
    });
}

// keyframes
export const nextKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.KEYFRAME_NEXT, layerid, prop);
export const preKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.KEYFRAME_PRE, layerid, prop);
export const previewOneFrame = ({ dispatch }, params) => {
    dispatch(types.KEYFRAME_FETCH, params.index);
}
export const framePreview = ({ dispatch }, params) => {
    project.preview(params, () => {
        dispatch(types.KEYFRAME_FETCH, params.index);
    });
};
export const addKeyframe = ({ dispatch }, params) => {
    keyframes.add(params, data => {
        dispatch(types.KEYFRAME_ADD, project.fetchKeyframes(data));
    });
};
export const removeKeyframe = ({dispatch}, params) => {
    keyframes.remove(params, () => {
        dispatch(types.KEYFRAME_REMOVE, params);
    });
}
export const emptyKeyframe = ({ dispatch }, layerid, prop) => dispatch(types.KEYFRAME_EMPTY, layerid, prop);
