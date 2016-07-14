<template>
    <div
        class="statics-tr statics-trd"
        :class="{ highlight: file.highlight }"
        @click="onSelected"
        draggable="true"
        @dragstart="onDragstart"
    >
        <div class="statics-td statics-name"
            @dblclick="onFocusName"
            :style="{ width: (level - 1) * 15 + 110 + 'px' }"
            title="{{ file.name }}"
        >
            <i class="iconfont"
                :class="{
                    image: file.type.indexOf('image') > -1,
                    psd: file.type.indexOf('photoshop') > -1
                }"
                :style="{ paddingLeft: (file.level - 1) * 15 + 'px' }"
            ></i>
            <input
                value="{{ file.name }}"
                @blur="onBlurName"
                v-if="file.focus"
            />
            <span v-else>{{ file.name }}</span>
        </div>
        <div class="statics-td statics-tag"><span :style="{ background: color }"></span></div>
        <div class="statics-td statics-type">{{ typeName }}</div>
        <div class="statics-td statics-size">{{ file.size }}</div>
        <div
            class="statics-td statics-comments"
            @dblclick="onFocusComments"
        >
            <input
                value="{{ file.comments }}"
                @blur="onBlurComments"
                v-if="file.focus"
            />
            <span v-else>{{ file.comments }}</span>
        </div>
        <div class="statics-td statics-path" title="{{ file.abspath }}">{{ file.abspath }}</div>
    </div>
</template>

<script>

    import data from 'lib/data';
    import { FILE_TYPES, SERVER } from 'lib/configs';
    import {
        staticFocus,
        staticBlur,
        staticHighlight,
        staticUpdate
    } from 'store/actions';
  

    export default {

        name: 'FileItem',

        props: {
            file: Object,
            index: Number
        },

        computed: {
            typeName () {
                return FILE_TYPES[this.file.type][0];
            },

            color () {
                return FILE_TYPES[this.file.type][1];
            }
        },

        methods: {
            onFocusName (e) {
                const index = this.index;
                const field = 'name';
                const parent = this.file.parent;
                this.staticFocus({ index, field, parent });
            },

            onBlurName (e) {
                const index = this.index;
                const parent = this.file.parent || '';
                const extname = FILE_TYPES[this.file.type][2];
                const field = 'name';
                const id = this.file._id;
                let value = e.target.value;
                let abspath = this.file.abspath;

                if (value) {
                    this.staticBlur({ index, parent });
                    if (!/\.(png|gif|jpg|psd|css|svg)$/.test(value)) {
                        value += extname;
                    }
                    this.staticUpdate({ index, field, parent, extname, value, id, abspath });
                }
            },

            onFocusComments (e) {
                const parent = this.file.parent;
                const index = this.index;
                const field = 'comments';
                this.staticFocus({ index, field, parent });
            },

            onBlurComments (e) {
                const index = this.index;
                const parent = this.file.parent;
                const field = 'comments';
                const id = this.file._id;
                let value = e.target.value;

                this.staticBlur({ index, parent});
                this.staticUpdate({ parent, index, field, value, id });
            },

            onSelected () {
                const index = this.index;
                const id = this.file._id;
                const parent = this.file.parent;
                this.staticHighlight({ index, id, parent });
            },

            onDragstart () {
                const abspath = this.file.abspath;
                data.set('dragFile', {
                    sourceid: this.file._id,
                    source: encodeURI(`${SERVER.root}${abspath}`)
                });
            }
        },

        vuex: {
            getters: {
                level: ({ statics}) => statics.level
            },
            actions: {
                staticFocus,
                staticBlur,
                staticHighlight,
                staticUpdate
            }
        }
    }
</script>

<style lang="less" scoped>
    .statics-name {
        margin-left: 20px;
    }
</style>