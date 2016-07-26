<template>
    <div class="statics-preview">
        <div class="statics-preview-wrap">
            <div class="statics-preview-img" v-if="preview.type">
                <img v-bind:src="imgSrc" v-if="preview.type"/>
            </div>
            <div class="statics-preview-fold" v-else>
                <p class="iconfont" style="font-size:60px !important; color: #319ad2;" v-else>&#xe634;</p>
            </div>
        </div>
        <div class="statics-preview-info" v-if="preview.name">
            <h3 title="{{ preview.name }}">{{ preview.name }}</h3>
            <p v-if="preview.type">尺寸: {{ imgWidth }} x {{ imgHeight }}</p>
            <p v-if="preview.type">大小: {{ preview.size }}</p>
            <p v-else>含{{ preview.statics.files.length + preview.statics.folds.length }}个项目</p>
            <p v-if="preview.type">类型: {{ preview.type }}</p>
            <p v-else>类型：文件夹</p>
        </div>
    </div>
</template>

<script>

    export default {

        name: 'StaticsPreview',

        data () {
            return {
                imgWidth: 0,
                imgHeight: 0
            }
        },

        computed: {
            imgSrc () {
                const path = this.preview.abspath;
                const sroot = this.server.root;
                return `${sroot}${path}`;
            }
        },

        watch: {
            'preview.name': function () {
                if (this.preview.type) {
                    const me = this;
                    setTimeout(() => {
                        const image = new Image();
                        image.src = me.imgSrc;
                        image.onload = () => {
                            me.imgWidth = image.width;
                            me.imgHeight = image.height;
                        }
                    }, 0);
                }
            }
        },

        vuex: {
            getters: {
                preview: ({ statics }) => statics.preview,
                server: ({ base }) => base.server
            }
        }
    }
</script>

<style lang="less" scoped>
    .statics-preview {
        height: 127px;
        display: flex;
        border-bottom: 1px solid #000;
        &-wrap {
            padding: 13px 10px 0 10px;
        }
        &-img {
            max-width: 100px;
            max-height: 100px;
            display: inline-block;
            margin: 0 auto;
            background: #000;
            img {
                max-width: 100px;
                max-height: 100px;
            }
        }
        &-fold {
            width: 80px;
            height: 80px;
            margin: 0 auto;
        }
        &-info {
            flex: 1;
            padding-top: 20px;
            h3,
            p {
                display: inline-block;
                width: 125px;
                overflow: hidden;
                white-space: nowrap;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                font-size: 12px;
            }
            h3 {
                color: #ccc;
                font-size: 13px;
            }
            p {
                padding-top: 8px;
            }
        }
    }
</style>