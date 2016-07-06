<template>
    <div
        class="statics-tr statics-trd"
        :class="{ highlight: file.highlight }"
        @click="onSelected"
    >
        <div class="statics-td statics-flag"></div>
        <div class="statics-td statics-name"
            @click="onFocus('name')"
        >
            <i class="iconfont"
                :class="{
                    image: file.type.indexOf('image') > -1,
                    psd: file.type.indexOf('photoshop') > -1
                }"
                :style="{ paddingLeft: (level * 12) + 'px' }"
            ></i>
            <input
                value="{{ file.name }}"
                @blur="onBlur('name')"
                v-if="file.focus"
            />
            <span v-else>{{ file.name }}</span>
        </div>
        <div class="statics-td statics-tag"><span :style="{background: color}"></span></div>
        <div class="statics-td statics-type">{{ typeName }}</div>
        <div class="statics-td statics-size">{{ file.size }}</div>
        <div class="statics-td statics-comments" @click="onFocus('comments')">
            <input value="{{ file.comments }}" @blur="onBlur('comments')" v-if="file.focus"/>
            <span v-else>{{ file.comments }}</span>
        </div>
        <div class="statics-td statics-path">{{ file.name }}</div>
    </div>
</template>

<script>

    import data from 'lib/data';
    import { FILE_TYPES } from 'lib/configs';
    import {
        staticFocus,
        staticBlur,
        staticHighlight
    } from 'store/actions';

    export default {

        name: 'FileItem',

        props: {
            file: Object,
            parentid: String,
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
            onFocus (field) {
                const index = this.index;
                this.staticFocus({ index, field });
            },

            onBlur (field) {
                const index = this.index;
                this.staticBlur({ index, field });
            },

            onSelected () {
                const index = this.index;
                this.staticHighlight({ index });
            }
        },

        vuex: {
            actions: {
                staticHighlight,
                staticBlur,
                staticFocus
            }
        }
    }
</script>