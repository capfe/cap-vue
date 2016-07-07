<style lang='less'>
@cap-inspector-handle-bgcolor: #319ad2;
@cap-inspector-font-color: #999;
@cap-inspector-background-color: #1d1d1d;

.cap-inspector {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-left: 1px solid #319ad2;
    background: @cap-inspector-background-color;
    color: @cap-inspector-font-color;

    .cap-inspector-header {
        width: 100%;
        height: 40px;
    }

    .cap-inspector-panel {
        padding: 12px 0;
        overflow: scroll;

        .cap-inspector-panel-header {
            padding: 0 12px 8px;
            font-size: 14px;
            border-bottom: 1px solid #000;
        }

        .cap-inspector-panel-inner {

            .cap-inspector-panel-section {

                header {
                    padding: 6px 12px 6px;
                    font-size: 12px;
                    border-bottom: 1px solid #000;
                }

                .cap-inspector-panel-row {
                    padding: 0 12px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-bottom: 1px solid #000;
                }

                .cap-inspector-panel-item {

                    label {
                        font-size: 12px;
                        line-height: 20px;
                        height: 20px;
                        display: inline-block;
                    }

                    input[type="number"] {
                        width: 40px;
                    }
                }
            }
        }
    }

    .cap-inspector-handle {
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translate(0, -50%);
        width: 10px;
        height: 20%;
        background-color: @cap-inspector-handle-bgcolor;

        &::before,
        &::after {
            position: absolute;
            display: block;
            content: '';
            border: 5px solid @cap-inspector-handle-bgcolor;
            border-left: 5px solid transparent;
        }

        &::before {
            top: -10px;
            border-top: 5px solid transparent;
        }

        &::after {
            bottom: -10px;
            border-bottom: 5px solid transparent;
        }

        .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 12px;
            left: 50%;
            top: 50%;
            color: #000;
            transform: translate(-50%, -50%) rotate(90deg);
            line-height: 1em;
            cursor: default;
        }
    }
}
</style>

<template>
    <div class="cap-inspector">
        <header class="cap-inspector-header">
            <cap-tab
                :default-index=0
                active-color="#319ad2"
                default-color="#666"
                line-color="#319ad2"
                :items="items"
            >
            </cap-tab>
        </header>
        <component :is="currentView"></component>
        <aside class="cap-inspector-handle">
            <span class="icon">
                <i class="iconfont">&#xe623;</i>
            </span>
        </aside>
    </div>
</template>

<script>
import Measure from './inspector/Measure.vue';
import Element from './inspector/Element.vue';
import Typesetting from './inspector/Typesetting.vue';
import CapTab from './common/Tab.vue';


export default {
    components: {
        Measure,
        Element,
        Typesetting,
        CapTab
    },
    events: {
        d_change_index (val) {
            this.currentView = this.items[val].name;
        }
    },
    data () {
        return {
            items: [
                {
                    title: "布局",
                    name: "Measure"
                },
                {
                    title: "效果",
                    name: "Element"
                },
                {
                    title: "排版",
                    name: "Typesetting"
                }
            ],
            currentView: "Measure"
        }
    }
};

</script>
