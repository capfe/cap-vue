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
    'opacity'
];



/**
 * fetch keyframe state
 *
 * @return {Array<Object>} keyframe list
 */
function fetchKeyframes(data) {

    let keyframes = [];
    data.keyframes.map(_kf => {
        let obj = {};
        _kf.layers.map(layer => {
            obj[layer.id] = {};
            PROPS.map(prop => {
                layer[prop] && (obj[layer.id][prop] = Object.assign(
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
        keyframes[_kf.index] = obj;
    });

    keyframes.map(kf => {
        for (let layerid in kf) {
            for (let prop in kf[layerid]) {
                let rkf = kf[layerid][prop];
                // TODO: type
            }
        }
    });

    return keyframes;
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
                const keyframes = fetchKeyframes(project);
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
                const keyframes = fetchKeyframes(data.project);
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
    }

};
