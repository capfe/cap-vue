<template>
    <div class="statics-main">
        <div class="statics-table">
            <div class="statics-tr statics-trh">
                <div class="statics-th statics-flag"></div>
                <div class="statics-th statics-name">名称</div>
                <div class="statics-th statics-tag"><i class="iconfont">&#xe626;</i></div>
                <div class="statics-th statics-type">类型</div>
                <div class="statics-th statics-size">大小</div>
                <div class="statics-th statics-comments">注释</div>
                <div class="statics-th statics-path">文件路径</div>
            </div>
            <static-item></static-item>
        </div>
    </div>
</template>

<script>

    import StaticItem from './staticItem.vue';
    import { staticFoldToggle } from 'store/actions';

    export default {

        name: 'StaticsListTable',

        components: {
            StaticItem
        }
    };

</script>

<style lang="less">
    .statics{
        &-main {
            position: absolute;
            top: 128px;
            bottom: 25px;
            left: 0;
            right: 0;
            overflow: scroll;
        }
        .close {
            &:before {
                content: '\e60e';
            }
        }
        .open {
            &:before {
                content: '\e60c';
            }
        }

        .image {
            margin-right: 3px;
            &:before {
                content: '\e614';
            }
        }
        .fold {
            margin-right: 3px;
            color: #319ad2;
            &:before {
                content: '\e634';
            }
        }
        .psd {
            margin-right: 3px;
            &:before {
                content: '\e601';
            }
        }
        .animate {
            margin-right: 3px;
            color: #319ad2;
            &:before {
                content: '\e629';
            }
        }
        .inside {
            padding-left: 12px;
        }
        &-table {
            width: 1280px;
            border-top: 1px solid #000;
        }
        &-tr {
            background: #272727;
            border-bottom: 1px solid #000;
        }
        &-trh {
            padding: 3px 0;
        }
        &-trd {
            background: #1d1d1d;
            height: 20px;
            line-height: 20px;
        }
        &-th {
            font-size: 12px;
            display: inline-block;
            border-left: 1px solid #000;
            border-right: 1px solid #333;
            height: 12px;
            padding: 0 7px;
        }
        &-td {
            display: inline-block;
            font-size: 12px;
            padding: 0 8px;
            height: 20px;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            input {
                height: 12px;
                line-height: 12px;
                padding: 3px 0 3px 3px;
                background: #000;
                margin-left: -3px;
                border: 0;
                outline: none;
                color: #999;
            }
        }
        &-flag {
            width: 8px;
            padding: 0 2px 0 5px;
            cursor: pointer;
            border-left: none;
            em {
                display: inline-block;
                transform: scale(0.8, 0.8);
            }
        }
        &-name {
            width: 120px;
            cursor: normal;
        }
        &-tag {
            width: 12px;
            span {
                height: 8px;
                width: 8px;
                margin-left: 3px;
                display: inline-block;
            }
        }
        &-size {
            width: 100px;
        }
        &-type {
            width: 80px;
        }
        &-comments {
            width: 120px;
        }
        &-path {
            width: 150px;
        }
    }
</style>