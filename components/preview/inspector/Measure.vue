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
import BaseInspector from './BaseInspector';

export default {
    mixins: [BaseInspector],
    computed: {
        x: {
            get () {
                try {
                    return this.curLayer.position.x.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.x != true || +this.x === +value) {
                    return;
                }
                this.setPropValue('position', 'x', value);
            }
        },
        y: {
            get () {
                try {
                    return this.curLayer.position.y.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.y != true || +this.y === +value) {
                    return;
                }
                this.setPropValue('position', 'y', value);
            }
        },
        width: {
            get () {
                try {
                    return this.curLayer.size.x.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.width != true || +this.width === +value) {
                    return;
                }
                this.setPropValue('size', 'x', value);
            }
        },
        height: {
            get () {
                try {
                    return this.curLayer.size.y.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.height != true || +this.height === +value) {
                    return;
                }
                this.setPropValue('size', 'y', value);
            }
        },
        scaleX: {
            get () {
                try {
                    return this.curLayer.scale.x.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.scaleX != true || +this.scaleX === +value) {
                    return;
                }

                this.setPropValue('scale', 'x', value);
            }
        },
        scaleY: {
            get () {
                try {
                    return this.curLayer.scale.y.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.scaleY != true || +this.scaleY === +value) {
                    return;
                }
                this.setPropValue('scale', 'y', value);
            }
        },
        rotateX: {
            get () {
                try {
                    return this.curLayer.rotate.x.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.rotateX != true || +this.rotateX === +value) {
                    return;
                }
                this.setPropValue('rotate', 'x', value);
            }
        },
        rotateY: {
            get () {
                try {
                    return this.curLayer.rotate.y.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.rotateY != true || +this.rotateY === +value) {
                    return;
                }
                this.setPropValue('rotate', 'y', value);
            }
        },
        rotateZ: {
            get () {
                try {
                    return this.curLayer.rotate.z.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.rotateZ != true || +this.rotateZ === +value) {
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
                try {
                    return this.curLayer.origin.x.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.originX != true || +this.originX === +value) {
                    return;
                }
                this.setPropValue('origin', 'x', value);
            }
        },
        originY: {
            get () {
                try {
                    return this.curLayer.origin.y.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.originY != true || +this.originY === +value) {
                    return;
                }
                this.setPropValue('origin', 'y', value);
            }
        }
    }
};
</script>
