<template>
    <div class="statics-footer">
        <span class="iconfont" title="新建文件夹"
            @click="staticFoldAdd"
        >&#xe634;</span>
        <span class="iconfont upload" title="导入素材">
            <input
                type="file"
                accept=".psd,.png,.jpg,.gpeg,.gif"
                @change="fileUpload"
            />
        </span>
        <!-- <span class="iconfont" title="新建动画">&#xe614;</span> -->
        <span class="iconfont" title="删除">&#xe608;</span>
    </div>
</template>

<script>

import FileUpload from 'lib/fileUpload';
import {
    staticFileAdd,
    staticFoldAdd
} from 'store/actions';

    export default {

        name: 'StaticsToolBar',

        methods: {
            fileUpload (e) {
                const me = this;
                new FileUpload({
                    url: `${me.server.root}/static/upload`,
                    data: {
                        image: e.target.files[0]
                    },
                    success (file) {
                        me.staticFileAdd({ file });
                    }
                });
            }
        },

        vuex: {
            getters: {
                server: ({ base }) => base.server
            },

            actions: {
                staticFileAdd,
                staticFoldAdd
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