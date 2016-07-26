/**
 * @file 静态资源相关vuex
 * @author mj(zoumiaojiang@gmail.com)
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
    STATIC_UPDATE,
    STATIC_STATUS_CLEAR,
    STATIC_REMOVE
} from 'store/mutation-types';



const state = {
    statics: {},
    preview: {},
    fold: {},
    parent: '', // 默认选中的文件夹
    level: 0, // 默认的层级是0层
    open: true // 默认的第一层文件夹是打开的
};


/**
 * root往下遍历文件tree
 * 
 * @param  {Object} statics 静态资源object
 * @param  {Object} params  参数
 * @return {Object}         遍历到的节点
 */
function traverse(statics, params) {
    let parent = params.parent;
    let type = params.type;
    let folds = statics.folds;
    let files = statics.files;
    let index = params.index;
    let ret;
    if ((folds[0] && folds[0].parent === parent)
        || (files[0] && files[0].parent === parent)
    ) {
        return ((type === 'fold') ? folds[index] : files[index]);
    }

    for (let fold of folds) {
        ret = traverse(fold.statics, params);
        if (ret) break;
    }

    return ret;
}


/**
 * 算文件夹的层级决定样式
 *
 * @param  {Object} fold 文件夹对象
 * @return {number}      层级
 */
function getLevel(fold) {
    let level = 1;
    if (fold.open && fold.statics.folds.length) {
        let folds = fold.statics.folds;
        let max = 0;
        for (let fold of folds) {
            let tmp = getLevel(fold);
            max = max > tmp ? max : tmp;
        }
        return max;
    }
    else {
        level = fold.level > level ? fold.level : level;
        return level;
    }
}

function getFold(statics, parent) {
    const folds = statics.folds;
    for (let fold of folds) {
        if (fold._id === parent) {
            return fold;
        }
        else {
            getFold(fold.statics, parent);
        }
    }

    return { statics };
}


/**
 * 清除状态
 *
 * @param  {Object} statics 静态资源object
 * @param  {Object} params  参数
 */
function clearStatus(statics, field) {
    let folds = statics.folds;
    let files = statics.files;
    for (let item of files) {
        Vue.set(item, field, false);
    }
    for (let item of folds) {
        Vue.set(item, field, false);
        clearStatus(item.statics, field);
    }
}

const mutations = {

    // 获取所有静态资源
    [STATICS_FETCH] (state, params) {
        let files = params.files;
        let folds = params.folds;
        let level = 0;
        let open = true;
        state.statics = { files, folds, level, open };
        state.level = getLevel(state);
        if (files[0]) {
            Vue.set(state.statics.files[0], 'highlight', true);
            state.preview = files[0];
            state.fold = {
                statics: state.statics
            };
        }
    },

    // 文件夹收起展开
    [STATIC_FOLD_TOGGLE] (state, params) {
        let fold = traverse(state.statics, params);
        fold.open = !fold.open;
        state.level = getLevel(state);
    },

    // 新建文件
    [STATIC_FILE_ADD] (state, params) {
        state.statics = params.statics;
        let parent = state.parent;
        let index = state.fold.statics.files.length;
        let item = traverse(state.statics, { parent, index });
        Vue.set(item, 'highlight', true);
        state.preview = item;
        state.level = getLevel(state);
    },

    // 新建文件夹
    [STATIC_FOLD_ADD] (state, params) {
        state.statics = params.statics;
        let parent = state.parent;
        let type = 'fold';
        let index = state.fold.statics.folds.length;
        let item = traverse(state.statics, { type, parent, index });
        clearStatus(state.statics, 'highlight');
        clearStatus(state.statics, 'focus');
        Vue.set(item, 'highlight', true);
        state.level = getLevel(state);
        state.parent = item._id;
        state.fold = item;
    },

    // 可编辑项聚焦
    [STATIC_FOCUS] (state, params) {
        clearStatus(state.statics, 'highlight');
        clearStatus(state.statics, 'focus');
        let item = traverse(state.statics, params);
        Vue.set(item, 'focus', true);
    },

    // 可编辑项失焦
    [STATIC_BLUR] (state, params) {
        let item = traverse(state.statics, params);
        Vue.set(item, 'focus', false);
    },

    // 选中高亮
    [STATIC_HIGHLIGHT] (state, params) {
        let item = traverse(state.statics, params);
        clearStatus(state.statics, 'highlight');
        Vue.set(item, 'highlight', true);
        if (params.type === 'fold') {
            state.parent = item._id;
            state.preview = item;
            state.fold = item;
        }
        else {
            state.preview = item;
            state.parent = item.parent;
            state.fold = getFold(state.statics, item.parent);
        }
    },

    // 文件更新
    [STATIC_UPDATE] (state, params) {
        state.statics = params.statics;
        let item = traverse(state.statics, params.info);
        state.preview = item;
        Vue.set(item, 'highlight', true);
        if (item.type == 'fold') {
            state.parent = item._id;
        }
    },

    [STATIC_STATUS_CLEAR] (state) {
        state.parent = '';
        state.fold = {
            statics: state.statics
        };
        clearStatus(state.statics, 'highlight');
        clearStatus(state.statics, 'focus');
    },

    [STATIC_REMOVE] (state, params) {
        state.statics = params.statics;
    }
};

export default {
    state,
    mutations
};
