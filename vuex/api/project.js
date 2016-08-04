/**
 * @file state api
 * @author mj(zoumiaojiang@gmail.com)
 */

// mock project data

import $ from 'jquery';
import { SERVER } from 'lib/configs';


const PROPS = [
    'position',
    'scale',
    'rotate',
    'opacity',
    'skew'
];



/**
 * fetch keyframe state
 *
 * @return {Array<Object>} keyframe list
 */
function fetchKeyframes(keyframes) {

    let newKeyframes = [];
    keyframes.map(_kf => {
        let obj = {};
        _kf.layers.map(layer => {
            obj[layer.layerid] = {};
            PROPS.map(prop => {
                layer[prop] && (obj[layer.layerid][prop] = Object.assign(
                    {},
                    {
                        type: 1,
                        status: 0,
                        index: _kf.index
                    },
                    layer[prop]
                ));
            });
        });
        newKeyframes[_kf.index] = obj;
    });

    newKeyframes.map(kf => {
        for (let layerid in kf) {
            for (let prop in kf[layerid]) {
                let rkf = kf[layerid][prop];
                // TODO: type
            }
        }
    });

    return newKeyframes;
}



export default {

    // mock async request data
    fetchProjectById: (projectid, cb) => {
        $.ajax({
            url: `${SERVER.root}/project/${projectid}`,
            dataType: 'json',
            method: 'GET',
            success (data) {
                const project = data.project;
                const layers = data.layers;
                const keyframes = fetchKeyframes(data.keyframes);
                return cb({
                    project,
                    layers,
                    keyframes
                });
            }
        });
    },

    fetchProject: cb => {
        $.ajax({
            url: `${SERVER.root}/project`,
            dataType: 'json',
            method: 'GET',
            success (data) {
                const project = data.project;
                const layers = data.layers;
                const tabs = data.tabs;
                const keyframes = fetchKeyframes(data.keyframes);
                const statics = data.statics;
                return cb({
                    project,
                    layers,
                    tabs,
                    keyframes,
                    statics
                });
            }
        })
    },

    fetchKeyframes: keyframes => {
        return fetchKeyframes(keyframes);
    },

    preview: (params, cb) => {
        $.ajax({
            url: `${SERVER.root}/project/update`,
            dataType: 'json',
            data: {
                id: params.id,
                field: 'frameIndex',
                value: params.index
            },
            method: 'POST',
            success (data) {
                if (data.status == 0) {
                    cb(data.data);
                }
            }
        });
    }

};
