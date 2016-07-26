<template>
    <div class="statics" @click="blur">
        <div class="statics-wrap">
            <preview></preview>
            <list-table></list-table>
            <tool-bar></tool-bar>
        </div>
    </div>
</template>

<script>

    import Preview from './preview.vue';
    import ToolBar from './toolbar.vue';
    import ListTable from './listTable.vue';
    import $ from 'jquery';
    import { clickBlur } from 'store/actions';

    export default {

        components: {
            Preview,
            ListTable,
            ToolBar
        },

        methods: {
            blur (e) {
                let tar = e.target;
                while (tar !== this.$el) {
                    if ($(tar).hasClass('statics-table')) {
                        return false;
                    }
                    else {
                        tar = tar.parentNode;
                    }
                }
                this.clickBlur();
            }
        },

        vuex: {
            actions: {
                clickBlur
            }
        }
    }
</script>

<style lang="less">
    .statics {
        position: fixed;
        width: 249px;
        top: 41px;
        left: 0;
        bottom: 301px;
        background: #1d1d1d;
        color: #999;
        font-size: 0;
        border: 1px solid #000;
        cursor: default;
        &:hover {
            border: 1px solid #2d82bd;
        }
        &-wrap {
            position: relative;
            height: 100%;
        }
    }
</style>