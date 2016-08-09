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
                        change-name='x'
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
                        change-name='y'
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
                        change-name='width'
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
                        change-name='height'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row' style="display:none;">
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
                        change-name='scaleX'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='高度'
                        :value.sync='scaleY'
                        type='number'
                        change-name='scaleY'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row' style="display:none;">
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
                        change-name='rotateX'
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
                        change-name='rotateY'
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
                        change-name='rotateZ'
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
                        change-name='originX'
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
                        change-name='originY'
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

import {
    addKeyframe
} from 'store/actions';

export default {
    ready () {

    },
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
        }
    },
    data () {
        return {
            changeValueFlag: false,
            prevLid: -1,
            willChange: []
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

            // if (layer) {
            //     for (var i = 0; i <= curFrameIndex; i++) {
            //         let curKeyframe = keyframes[i];
            //         if (!curKeyframe) {
            //             continue;
            //         }
            //         let curLayer = curKeyframe[lid];
            //         if (!curLayer) {
            //             continue;
            //         }
            //         Object.assign(layer, curLayer);
            //     }
            // }

            return layer;
        },
        x: {
            get () {
                return this.curLayer && this.curLayer.position.x.value;
            },
            set (value) {
                if (this.willChange.x != true) {
                    return;
                }
                this.setPropValue('position', 'x', value);
            }
        },
        y: {
            get () {
                return this.curLayer && this.curLayer.position.y.value;
            },
            set (value) {
                if (this.willChange.y != true) {
                    return;
                }
                this.setPropValue('position', 'y', value);
            }
        },
        width: {
            get () {
                return 100;
                return this.curLayer && this.curLayer.size.x.value;
            },
            set (value) {
                if (this.willChange.width != true) {
                    return;
                }
                this.setPropValue('size', 'x', value);
            }
        },
        height: {
            get () {
                return 100;
                return this.curLayer && this.curLayer.size.y.value;
            },
            set (value) {
                if (this.willChange.height != true) {
                    return;
                }
                this.setPropValue('size', 'y', value);
            }
        },
        scaleX: {
            get () {
                return this.curLayer && this.curLayer.scale.x.value;
            },
            set (value) {
                if (this.willChange.scaleX != true) {
                    return;
                }
                this.setPropValue('scale', 'x', value);
            }
        },
        scaleY: {
            get () {
                return this.curLayer && this.curLayer.scale.y.value;
            },
            set (value) {
                if (this.willChange.scaleY != true) {
                    return;
                }
                this.setPropValue('scale', 'y', value);
            }
        },
        rotateX: {
            get () {
                return this.curLayer && this.curLayer.rotate.x.value;
            },
            set (value) {
                if (this.willChange.rotateX != true) {
                    return;
                }
                this.setPropValue('rotate', 'x', value);
            }
        },
        rotateY: {
            get () {
                return this.curLayer && this.curLayer.rotate.y.value;
            },
            set (value) {
                if (this.willChange.rotateY != true) {
                    return;
                }
                this.setPropValue('rotate', 'y', value);
            }
        },
        rotateZ: {
            get () {
                return 0;
                return this.curLayer && this.curLayer.rotate.z.value;
            },
            set (value) {
                if (this.willChange.rotateZ != true) {
                    return;
                }
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
                return 0;
                return this.curLayer && this.curLayer.origin.x.value;
            },
            set (value) {
                if (this.willChange.originX != true) {
                    return;
                }
                this.setPropValue('origin', 'x', value);
            }
        },
        originY: {
            get () {
                return 0;
                return this.curLayer && this.curLayer.origin.y.value;
            },
            set (value) {
                if (this.willChange.originY != true) {
                    return;
                }
                this.setPropValue('origin', 'y', value);
            }
        }
    },
    vuex: {
        getters: {
            curFrameIndex: ({ project }) => project.common.frameIndex,
            layers: ({ layers }) => layers.all,
            allKeyframes: ({ keyframes }) => keyframes.all,
            clid: ({ project }) => project.common.clid
        },
        actions: {
            addKeyframe
        }
    }
};
</script>
