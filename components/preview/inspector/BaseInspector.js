import Vue from 'vue';
import CapInput from '../common/Input.vue';

import {
    addKeyframe,
    updateLayer
} from 'store/actions';

export default {
    ready () {},
    props: ['inspector'],
    components: {
        CapInput
    },
    methods: {
        setPropValue (category, type, value) {
            const me = this;
            const projectid = me.projectid;
            const index = me.curFrameIndex;
            const clid = me.clid;
            if (!clid) {
                return;
            }

            value = +value;
            me.addKeyframe({
                projectid: projectid,
                index: index,
                layerid: clid,
                prop: category,
                key: type,
                value: value
            });
        },
        setOriginValue (key, value) {
            const lid = this.clid;
            const projectid = this.projectid;

            if (!lid) {
                return;
            }

            if (key.toLowerCase().indexOf('color') < 0) {
                value = +value;
            }

            this.updateLayer({
                projectid: projectid,
                layerid: lid,
                key: key,
                value: value
            });
        }
    },
    events: {
        'willChange': function (param) {
            this.willChange[param.type] = param.status;
        }
    },
    computed: {
        curLayer () {
            let layers = this.layers;
            let keyframes = this.allKeyframes;
            let curFrameIndex = this.curFrameIndex;
            let layer = {};
            let lid = this.clid;
            if (!lid) {
                return null;
            }

            for (var index in layers) {
                if (lid == layers[+index]._id) {
                    layer = Object.assign({}, layers[+index]);
                }
            }
            if (layer) {
                for (var i = 0; i <= curFrameIndex; i++) {
                    let curKeyframe = keyframes[i];
                    if (!curKeyframe) {
                        continue;
                    }
                    let curLayer = curKeyframe[lid];
                    if (!curLayer) {
                        continue;
                    }
                    Object.assign(layer, curLayer);
                }
            }

            return layer;
        }
    },
    vuex: {
        getters: {
            curFrameIndex: ({ project }) => project.common.frameIndex,
            layers: ({ layers }) => layers.all,
            allKeyframes: ({ keyframes }) => keyframes.all,
            clid: ({ project }) => project.common.clid,
            projectid: ({ project }) => project.id
        },
        actions: {
            addKeyframe,
            updateLayer
        }
    }
};
