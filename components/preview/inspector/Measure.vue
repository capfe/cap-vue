<style lang="less">
</style>

<template>
<div class='cap-inspector-panel measure' data-inspector-type='measure'>
    <header class='cap-inspector-panel-header cap-border-bottom'>
        <h3 class='cap-inspector-panel-header-title'>布局</h3>
    </header>
    <div class='cap-inspector-panel-inner'>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>位置</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='左'
                        :value.sync='x'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0},{title: "px1", value: 1}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='上'
                        :value.sync='y'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>尺寸</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='宽度'
                        :value.sync='width'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='高度'
                        :value.sync='height'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>限制比例</label>
                    <input type='checkbox'>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>缩放</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='宽度'
                        :value.sync='scaleX'
                        type='number'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='高度'
                        :value.sync='scaleY'
                        type='number'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>限制比例</label>
                    <input type='checkbox'>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>旋转</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='x轴'
                        :value.sync='rotateX'
                        type='number'
                        :options-readonly=true
                        :options-value=2
                        :options='[{title: "°", value: 2}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='y轴'
                        :value.sync='rotateY'
                        type='number'
                        :options-readonly=true
                        :options-value=2
                        :options='[{title: "°", value: 2}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='z轴'
                        :value.sync='rotateZ'
                        type='number'
                        :options-readonly=true
                        :options-value=2
                        :options='[{title: "°", value: 2}]'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>视点</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item cap-inspector-panel-row'>
                    <cap-input
                        title='视点'
                        :value.sync='perspective'
                        type='number'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>原点</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item cap-inspector-panel-row'>
                    <cap-input
                        title='x偏移量'
                        :value.sync='originX'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}, {title: "%", value: 1}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item cap-inspector-panel-row'>
                    <cap-input
                        title='y偏移量'
                        :value.sync='originY'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}, {title: "%", value: 1}]'
                    ></cap-input>
                </div>
            </div>
        </section>
    </div>
</div>

</template>

<script>
import CapInput from '../common/Input.vue';
// import * as actions from 'store/modules/preview/actions';
// import { getLayer } from 'store/modules/preview/getters';
import {
    propValueChange,
    addKeyframe
} from 'store/actions';

function hasProp(kfs, fi, layerid, prop) {
    return kfs[fi] && kfs[fi][layerid] && kfs[fi][layerid][prop];
}

export default {
    ready () {

    },
    props: ['inspector'],
    components: {
        CapInput
    },
    methods: {
        setPropValue (category, type, value) {
            value = +value;
            const me = this;
            hasProp(me.allKeyframes, me.curFrameIndex, me.clid, category)
                ? me.propValueChange(value, me.clid, category, type)
                : me.addKeyframe(me.curLayer, category, value, type);
        }
    },
    computed: {
        curLayer () {
            let layers = this.originlayers;
            let keyframes = this.allKeyframes;
            let curFrameIndex = this.curFrameIndex;
            let layer = {};
            let lid = this.clid;
            for (var index in layers) {
                if (lid == layers[+index].id) {
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
        },
        x: {
            get () {
                return this.curLayer.position.x.value;
            },
            set (value) {
                this.setPropValue('position', 'x', value);
            }
        },
        y: {
            get () {
                return this.curLayer.position.y.value;
            },
            set (value) {
                this.setPropValue('position', 'y', value);
            }
        },
        width: {
            get () {
                return this.curLayer.size.x.value;
            },
            set (value) {
                this.setPropValue('size', 'x', value);
            }
        },
        height: {
            get () {
                return this.curLayer.size.y.value;
            },
            set (value) {
                this.setPropValue('size', 'y', value);
            }
        },
        scaleX: {
            get () {
                return this.curLayer.scale.x.value;
            },
            set (value) {
                this.setPropValue('scale', 'x', value);
            }
        },
        scaleY: {
            get () {
                return this.curLayer.scale.y.value;
            },
            set (value) {
                this.setPropValue('scale', 'y', value);
            }
        },
        rotateX: {
            get () {
                return this.curLayer.rotate.x.value;
            },
            set (value) {
                this.setPropValue('rotate', 'x', value);
            }
        },
        rotateY: {
            get () {
                return this.curLayer.rotate.y.value;
            },
            set (value) {
                this.setPropValue('rotate', 'y', value);
            }
        },
        rotateZ: {
            get () {
                return this.curLayer.rotate.z.value;
            },
            set (value) {
                this.setPropValue('rotate', 'z', value);
            }
        },
        perspective: {
            get () {
                return 100;
            },
            set (value) {
                // this.setMeasurePerspective(value);
            }
        },
        originX: {
            get () {
                return this.curLayer.origin.x.value;
            },
            set (value) {
                this.setPropValue('origin', 'x', value);
            }
        },
        originY: {
            get () {
                return this.curLayer.origin.y.value;
            },
            set (value) {
                this.setPropValue('origin', 'y', value);
            }
        }
    },
    vuex: {
        getters: {
            curFrameIndex: ({ project }) => project.common.frameIndex,
            originlayers: ({ project }) => project.common.layers,
            allKeyframes: ({ keyframes }) => keyframes.all,
            clid: ({ project }) => project.common.clid
        },
        actions: {
            propValueChange,
            addKeyframe
        }
    }
};
</script>
