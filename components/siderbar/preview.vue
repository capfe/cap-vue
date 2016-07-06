<template>
    <div class="statics-preview">
        <div class="statics-preview-wrap">
            <div class="statics-preview-img">
                <img v-bind:src="imgSrc" v-if="preview.name"/>
            </div>
        </div>
        <div class="statics-preview-info" v-if="preview.name">
            <h3 title="{{ preview.name }}">{{ preview.name }}</h3>
            <p>大小: {{ imgWidth }} x {{ imgHeight }}</p>
            <p>类型: {{ preview.type }}</p>
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
                const path = encodeURIComponent(this.preview.name);
                const sroot = this.server.root;
                return `${sroot}/${path}`;
            }
        },

        watch: {
            'preview.name': function () {
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
        height: 128px;
        display: flex;
        &-wrap {
            padding: 20px 10px 0 10px;
        }
        &-img {
            max-width: 100px;
            max-height: 100px;
            display: inline-block;
            vertical-align: middle;
            margin: 0 auto;
            background: #000;
            img {
                max-width: 100px;
                max-height: 100px;
            }
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