<template>
    <div class="statics-main">
        <div class="statics-table">
            <div class="statics-tr statics-trh">
                <div
                    class="statics-th statics-name"
                    :style="{ width: (level - 1) * 15 + 111 + 'px' }"
                >名称</div>
                <div class="statics-th statics-tag"><i class="iconfont">&#xe626;</i></div>
                <div class="statics-th statics-type">类型</div>
                <div class="statics-th statics-size">大小</div>
                <div class="statics-th statics-comments">注释</div>
                <div class="statics-th statics-path">文件路径</div>
            </div>
            <fold-item
                v-for="fold of folds"
                :fold="fold"
                :index="$index"
            >
            </fold-item>
            <file-item
                v-for="file of files"
                :file="file"
                :index="$index"
            >
            </file-item>
        </div>
    </div>
</template>

<script>

    import FoldItem from './foldItem.vue';
    import FileItem from './fileItem.vue';
    import { staticFoldToggle } from 'store/actions';

    export default {

        name: 'StaticsListTable',

        components: {
            FoldItem,
            FileItem
        },

        vuex: {
            getters: {
                level: ({ statics }) => statics.level,
                files: ({ statics }) => statics.statics.files,
                folds: ({ statics }) => statics.statics.folds
            }
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
        &-namecon {
            display: inline-block;
            width: 100%;
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
            &:before {
                content: '\e614';
            }
        }
        .fold {
            color: #319ad2;
            &:before {
                content: '\e634';
            }
        }
        .psd {
            &:before {
                content: '\e601';
            }
        }
        .animate {
            color: #319ad2;
            &:before {
                content: '\e629';
            }
        }
        .inside {
            padding-left: 12px;
        }
        &-table {
            // width: 680px;
            width: 1500px;
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
        &-name {
            cursor: normal;
            border-left: 0;
            padding-left: 0;
            margin-left: 20px;
            &con {
                display: inline-block;
            }
            em {
                cursor: pointer;
                display: inline-block;
                transform: scale(0.8, 0.8);
            }
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
            width: 60px;
        }
        &-type {
            width: 60px;
        }
        &-comments {
            width: 120px;
        }
        &-path {
            width: 170px;
            border-right: 0;
        }
    }
</style>