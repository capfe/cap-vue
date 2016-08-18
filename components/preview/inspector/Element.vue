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
                    <cap-input
                        title='不透明度'
                        :value.sync='opacity'
                        type='number'
                        change-name='opacity'
                    ></cap-input>
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
                        :value.sync='shadowColor'
                        type='text'
                        change-name='shadowColor'
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
                        <option value="background">前景</option>
                        <option value='foreground'>背景</option>
                    </select>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='模糊度'
                        :value.sync='filterBlur'
                        type='number'
                        change-name='filterBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='棕褐色'
                        :value.sync='filterBlur'
                        type='number'
                        change-name='filterBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='饱和度'
                        :value.sync='filterBlur'
                        type='number'
                        change-name='filterBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='色调'
                        :value.sync='filterBlur'
                        type='number'
                        change-name='filterBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='亮度'
                        :value.sync='filterBlur'
                        type='number'
                        change-name='filterBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='对比度'
                        :value.sync='filterBlur'
                        type='number'
                        change-name='filterBlur'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>倒影</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='深度'
                        :value.sync='reflectionDepth'
                        type='number'
                        change-name='reflectionDepth'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='偏移'
                        :value.sync='reflectionOffset'
                        type='number'
                        change-name='reflectionOffset'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
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
        },
        opacity: {
            get () {
                try {
                    return this.curLayer.opacity.value;
                }
                catch (e) {
                    return;
                }
            },
            set (value) {
                if (this.willChange.opacity != true) {
                    return;
                }
                this.setPropValue('opacity', null, value);
            }
        }
    }
};
</script>
