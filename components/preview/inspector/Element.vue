<style lang="less">
</style>

<template>
<div class='cap-inspector-panel element' data-inspector-type='element'>
    <header class='cap-inspector-panel-header cap-border-bottom'>
        <h3 class='cap-inspector-panel-header-title'>效果</h3>
    </header>
    <div class='cap-inspector-panel-inner'>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>背景</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>填充样式</label>
                    <select name='' id=''>
                        <option value=''>无</option>
                        <option value=''>颜色</option>
                        <option value=''>渐变</option>
                        <option value=''>图像</option>
                    </select>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>边框</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='宽度'
                        :value.sync='borderWidth'
                        type='number'
                        change-name='borderWidth'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='半径'
                        :value.sync='borderRadius'
                        type='number'
                        change-name='borderRadius'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>样式</label>
                    <select name='' id=''>
                        <option value=''>无</option>
                        <option value='solid'>实线</option>
                        <option value='double'>双线</option>
                        <option value='dotted'>点线</option>
                        <option value='dashed'>虚线</option>
                        <option value='groove'>凹线</option>
                        <option value='ridge'>凸线</option>
                        <option value='inset'>内嵌</option>
                        <option value='outset'>外嵌</option>
                    </select>
                </div>
                <div class='cap-inspector-panel-item' style='display:none;'>
                    <cap-input
                        title='补白'
                        value='0'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='颜色'
                        :value.sync='borderColor'
                        type='text'
                        change-name='borderColor'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>可见</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>不透明度</label>
                    <input type='range' max=100 min=0 value=100>
                    <input type='number' max=100 min=0 value=100>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>显示</label>
                    <input name='cap-inspector-measure-display' type='radio'>
                    <label>显示</label>
                    <input name='cap-inspector-measure-display' type='radio'>
                    <label>隐藏</label>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>阴影</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='x'
                        :value.sync='shadowX'
                        type='number'
                        change-name='shadowX'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='y'
                        :value.sync='shadowY'
                        type='number'
                        change-name='shadowY'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='模糊度'
                        :value.sync='shadowBlur'
                        type='number'
                        change-name='shadowBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='颜色'
                        :value.sync='borderColor'
                        type='color'
                        change-name='borderColor'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>滤镜</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>应用模式</label>
                    <select name='' id=''>
                        <option value=''>前景</option>
                        <option value=''>背景</option>
                    </select>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>模糊度</label>
                    <input type='range' max=20.0 min=0 value=0.00>
                    <input type='number' max=20.0 min=0 value=0.00>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>棕褐色</label>
                    <input type='range' max=100 min=0 value=0>
                    <input type='number' max=100 min=0 value=0>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>饱和度</label>
                    <input type='range' max=11 min=0 value=1.0>
                    <input type='number' max=11 min=0 value=1.0>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>色调</label>
                    <input type='range' max=360 min=0 value=0>
                    <input type='number' max=360 min=0 value=0>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>亮度</label>
                    <input type='range' max=400 min=0 value=100>
                    <input type='number' max=400 min=0 value=100>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>对比度</label>
                    <input type='range' max=11 min=0 value=1 value=1.0>
                    <input type='number' max=11 min=0 value=1 value=1.0>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <a href='javascript:void(0);' class='cap-inspector-panel-btn'>还原默认设置</a>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>倒影</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>深度</label>
                    <input type='range' max=100 min=0>
                    <input type='number' max=100 min=0>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label for=''>偏移</label>
                    <input type='range' max=100 min=0>
                    <input type='number' max=100 min=0>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import CapInput from '../common/Input.vue';

import {
    addKeyframe,
    updateLayer
} from 'store/actions';

export default {
    ready () {

    },
    props: ['inspector'],
    components: {
        CapInput
    },
    methods: {
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
        borderWidth: {
            get () {
                try {
                    return this.curLayer.css.borderWidth.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.borderWidth != true) {
                    return;
                }
                this.setOriginValue('borderWidth', value);
            }
        },
        borderRadius: {
            get () {
                try {
                    return this.curLayer.css.borderRadius.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.borderRadius != true) {
                    return;
                }
                this.setOriginValue('borderRadius', value);
            }
        },
        borderColor: {
            get () {
                try {
                    return this.curLayer.css.borderColor.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.borderColor != true) {
                    return;
                }

                this.setOriginValue('borderColor', value);
            }
        },
        borderStyle: {
            get () {
                try {
                    return this.curLayer.css.borderStyle.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.borderColor != true) {
                    return;
                }
                this.setOriginValue('borderStyle', value);
            }
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
</script>
