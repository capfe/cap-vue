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
                        title='x偏移量'
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

export default {
    ready () {

    },
    props: ['inspector'],
    components: {
        CapInput
    },
    methods: {

    },
    computed: {
        x: {
            get () {
                return this.measureX;
            },
            set (value) {
                this.setMeasureX(value);
            }
        },
        y: {
            get () {
                return this.measureY;
            },
            set (value) {
                this.setMeasureY(value);
            }
        },
        width: {
            get () {
                return this.measureWidth;
            },
            set (value) {
                this.setMeasureWidth(value);
            }
        },
        height: {
            get () {
                return this.measureHeight;
            },
            set (value) {
                this.setMeasureHeight(value);
            }
        },
        scaleX: {
            get () {
                return this.measureScaleX;
            },
            set (value) {
                this.setMeasureScaleX(value);
            }
        },
        scaleY: {
            get () {
                return this.measureScaleY;
            },
            set (value) {
                this.setMeasureScaleY(value);
            }
        },
        rotateX: {
            get () {
                return this.measureRotateX;
            },
            set (value) {
                this.setMeasureRotateX(value);
            }
        },
        rotateY: {
            get () {
                return this.measureRotateY;
            },
            set (value) {
                this.setMeasureRotateY(value);
            }
        },
        rotateZ: {
            get () {
                return this.measureRotateZ;
            },
            set (value) {
                this.setMeasureRotateZ(value);
            }
        },
        perspective: {
            get () {
                return this.measurePerspective;
            },
            set (value) {
                this.setMeasurePerspective(value);
            }
        },
        originX: {
            get () {
                return this.measureOriginX;
            },
            set (value) {
                this.setMeasureOriginX(value);
            }
        },
        originY: {
            get () {
                return this.measureOriginY;
            },
            set (value) {
                this.setMeasureOriginY(value);
            }
        }
    },
    vuex: {
        getters: {
            measureX: state => getLayer(state).measure.x,
            measureY: state => getLayer(state).measure.y,
            measureWidth: state => getLayer(state).measure.width,
            measureHeight: state => getLayer(state).measure.height,
            measureScaleX: state => getLayer(state).measure.scale.x,
            measureScaleY: state => getLayer(state).measure.scale.y,
            measureRotateX: state => getLayer(state).measure.rotate.x,
            measureRotateY: state => getLayer(state).measure.rotate.y,
            measureRotateZ: state => getLayer(state).measure.rotate.z,
            measurePerspective: state => getLayer(state).measure.perspective,
            measureOriginX: state => getLayer(state).measure.origin.x,
            measureOriginY: state => getLayer(state).measure.origin.y
        },
        actions: {
            setMeasureX: actions.setMeasureX,
            setMeasureY: actions.setMeasureY,
            setMeasureWidth: actions.setMeasureWidth,
            setMeasureHeight: actions.setMeasureHeight,
            setMeasureScaleX: actions.setMeasureScaleX,
            setMeasureScaleY: actions.setMeasureScaleY,
            setMeasureRotateX: actions.setMeasureRotateX,
            setMeasureRotateY: actions.setMeasureRotateY,
            setMeasureRotateZ: actions.setMeasureRotateZ,
            setMeasurePerspective: actions.setMeasurePerspective,
            setMeasureOriginX: actions.setMeasureOriginX,
            setMeasureOriginY: actions.setMeasureOriginY
        }
    }
};
</script>
