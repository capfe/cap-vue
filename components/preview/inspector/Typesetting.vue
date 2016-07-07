<style lang='less'>
</style>

<template>
<div class='cap-inspector-panel typesetting' data-inspector-type='typesetting'>
    <header class='cap-inspector-panel-header cap-border-bottom'>
        <h3 class='cap-inspector-panel-header-title'>排版</h3>
    </header>
    <div class='cap-inspector-panel-inner'>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>字体</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <cap-input title='字号' :value='0' :type='number'></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label>系列</label>
                    <select name='' id='' size='8'>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                        <option value=''>宋体</option>
                    </select>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label>样式</label>
                    <input name='cap-inspector-typesetting-blod' type='checkbox'>
                    <label>加粗</label>
                    <input name='cap-inspector-typesetting-italic' type='checkbox'>
                    <label>斜体</label>
                    <input name='cap-inspector-typesetting-underline' type='checkbox'>
                    <label>下划线</label>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input title='颜色' :value='0' :type='color'></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>对齐</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <input name='cap-inspector-typesetting-align' type='radio'>
                    <label>居左</label>
                    <input name='cap-inspector-typesetting-align' type='radio'>
                    <label>居中</label>
                    <input name='cap-inspector-typesetting-align' type='radio'>
                    <label>居右</label>
                    <input name='cap-inspector-typesetting-align' type='radio'>
                    <label>撑满</label>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>间距</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>字母间距</label>
                    <input type='range' max=20.0 min=0 value=0.00>
                    <input type='number' max=20.0 min=0 value=0.00>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>字间距</label>
                    <input type='range' max=100 min=0 value=0>
                    <input type='number' max=100 min=0 value=0>
                </div>
                <div class='cap-inspector-panel-item'>
                    <label for=''>行高</label>
                    <input type='range' max=11 min=0 value=1.0>
                    <input type='number' max=11 min=0 value=1.0>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>阴影</h4>
            </header>
            <div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='x'
                        value='0'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='y'
                        value='0'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input title='模糊度' :value='0' :type='number'></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input title='颜色' :value='0' :type='color'></cap-input>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import Input from "../common/Input.vue";

export default {
    components: {
        capInput: Input
    }
};
</script>
