<template>
    <div
        class="statics-footer"
        @click="onclick"
    >
        <span
            class="iconfont"
            title="新建文件夹"
            @click="addFold"
        >&#xe634;</span>
        <span
            class="iconfont upload"
            title="导入素材"
        >
            <input
                type="file"
                accept=".psd,.png,.jpg,.gpeg,.gif"
                @change="fileUpload"
            />
        </span>
        <span
            class="iconfont"
            title="删除"
            @click="removeItem"
        >&#xe608;</span>
    </div>
</template>

<script>

import FileUpload from 'lib/fileUpload';
import {
    staticFileAdd,
    staticFoldAdd,
    staticRemove
} from 'store/actions';

    export default {

        name: 'StaticsToolBar',

        methods: {

            onclick (e) {
                e.stopPropagation();
            },

            fileUpload (e) {
                const me = this;
                const parent = this.parent;
                new FileUpload({
                    url: `${me.server.root}/static/upload`,
                    data: {
                        image: e.target.files[0],
                        parent
                    },
                    success (statics) {
                        me.staticFileAdd({ statics });
                    }
                });
            },

            addFold (e) {
                const me = this;
                const parent = me.parent;
                const abspath = me.fold.abspath || '/';
                const ret = confirm(`在[${abspath}]下添加文件夹？`)
                if (ret) {
                    me.staticFoldAdd({ parent });
                }
            },

            removeItem (e) {
                const me = this;
                const type = me.preview.type ? '文件' : '文件夹';
                const ret = confirm(`删除[${type}] [${me.preview.abspath}]？`);
                if (ret) {
                    const preview = me.preview;
                    const id = preview._id;
                    const abspath = preview.abspath;
                    me.staticRemove({ id, abspath });
                }
            }
        },

        vuex: {
            getters: {
                server: ({ base }) => base.server,
                parent: ({ statics }) => statics.parent,
                preview: ({ statics }) => statics.preview,
                fold: ({ statics }) => statics.fold
            },

            actions: {
                staticFileAdd,
                staticFoldAdd,
                staticRemove
            }
        }
    };

</script>

<style lang="less" scoped>
    .statics-footer {
        position: absolute;
        padding-left: 5px;
        bottom: 0;
        height: 25px;
        line-height: 25px;
        border-top: 1px solid #000;
        font-size: 12px;
        left: 0;
        right: 0;
        background: #272727;
        span {
            display: inline-block;
            margin: 0 2px;
            height: 20px;
            width: 20px;
            cursor: pointer;
            font-size: 14px !important;
            overflow: hidden;
        }
        .upload {
            position: relative;
            &:after {
                content: '\e616';
            }
            input {
                position: absolute;
                display: inline-block;
                width: 100%;
                height: 100%;
                opacity: 0;
                cursor: pointer;
            }
        }
    }
</style>